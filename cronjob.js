const cron = require("node-cron");
const axios = require("axios");
const { Asset, Location, sequelize } = require("./models");

async function syncAssets() {
  console.log("Starting synchronization ...");

  const transaction = await sequelize.transaction();
  try {
    const response = await axios.get("https://669ce22d15704bb0e304842d.mockapi.io/assets");

    if (response.status !== 200) {
        throw new Error(`API Error: status code ${response.status}`);
    }

    const assets = response.data;

    for (const asset of assets) {
      const location = await Location.findOne({ where: { id: asset.location_id, status: "actived" } });

      if (location && new Date(asset.created_at * 1000) < new Date()) {
        const assetExists = await Asset.findOne({ where: { type: asset.type, serial: asset.serial, location_id: asset.location_id } });

        // Insert if not exists
        if (!assetExists) {
            await Asset.create(
              {
                type: asset.type,
                serial: asset.serial,
                status: asset.status,
                description: asset.description,
                location_id: asset.location_id,
                synced: true,
                createdAt: asset.created_at && asset.created_at * 1000,
                updatedAt: asset.updated_at && asset.updated_at * 1000,
              },
              { transaction }
            );
        }
      }
    }

    await transaction.commit();
    console.log("Synchronization completed successfully.");
  } catch (error) {
    console.error("Error syncing assets:", error);
    await transaction.rollback();
  }
}

// Run the SyncAssets method every day at 00:00
cron.schedule("0 0 * * *", syncAssets);

module.exports = syncAssets;
