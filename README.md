# asset-management-system-test

🚀 How to Run the Project

1️⃣ Clone the Repository

git clone <repository_url>
cd <project_directory>

2️⃣ Install Dependencies

npm install

3️⃣ Setup MySQL Database

Create a MySQL database named asset_development on your local machine.

Open the file config/config.json and update the development configuration with your database credentials.

4️⃣ Run Database Migrations

npx sequelize-cli db:migrate

5️⃣ Seed Initial Data

npx sequelize-cli db:seed:all

6️⃣ Start the Server

node server.js

7️⃣ Run the Cron Job

node cronjob.js

✅ The project is now running successfully! 🎉