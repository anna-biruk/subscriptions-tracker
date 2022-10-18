require('dotenv').config()
const express = require("express")
const router = require("./src/routes/router.js")
const cors = require('cors')


const app = express();
const port = process.env.PORT || 5000;
app.use(cors())

app.use(express.json())

app.use("/api", router)

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});