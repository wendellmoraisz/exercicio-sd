const axios = require("axios");
const apiBaseUrl = "http://localhost:3000";

async function sendCpuMessage() {
  try {
    await axios.post(`${apiBaseUrl}/cpulog`, {
      logMessage: "Insufficient CPU!!",
      dateEvent: new Date(),
      currentUser: "ADMIN",
    });
  } catch (error) {
    console.log({...error.response.data, httpStatus: error.response.status});
  }
}

setInterval(sendCpuMessage, 3000);
