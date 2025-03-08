module.exports = {
    up: async (queryInterface) => {
      await queryInterface.bulkInsert("Locations", [
        { id: 1, location_name: "Da Nang", organization: "PNS", status: "actived" },
        { id: 2, location_name: "Ha Noi", organization: "PNS", status: "unactive" },
        { id: 3, location_name: "Ho Chi Minh", organization: "PNS", status: "actived" },
        { id: 4, location_name: "Nha Trang", organization: "PLJ", status: "actived" },
        { id: 5, location_name: "Can Tho", organization: "PLJ", status: "actived" },
      ]);
    },
    down: async (queryInterface) => {
      await queryInterface.bulkDelete("Locations", null, {});
    },
  };
  