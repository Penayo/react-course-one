const mongoose = require("mongoose")
const app = require("./app")

const { API_VERSION, DB_SERVER_IP, DB_PORT, API_PORT } = require('./config')

async function main() {
  console.log(`mongodb://${DB_SERVER_IP}:${DB_PORT}/penayowebpage`);
  return mongoose.connect(`mongodb://${DB_SERVER_IP}:${DB_PORT}/penayowebpage`)
}

main()
  .then(() => {
    console.log("Database connected!");
    app.listen(API_PORT, () => {
      console.log("*************************************************************");
      console.log("************************ API REST ***************************");
      console.log(`http://localhost:${API_PORT}/api/${API_VERSION}`);
    })
  })
  .catch(error => {
    console.log(error);
  })


