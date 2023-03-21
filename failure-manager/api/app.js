const express = require("express");

const app = express();
app.use(express.json());

app.post("/cpulog", (request, response) => {
    if (!request.body?.logMessage) {
        return response.status(400).json({ error: "Send a Log Message" });
    }
    console.log(request.body);
    return response.status(200);
});

app.listen(3000, () => {
    console.log("App is running at http://localhost:3000");
});
