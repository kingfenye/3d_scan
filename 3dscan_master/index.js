const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/scan", (req, res) => {
    const options = {
        method: "POST",
        url: "https://api.developer.in3d.io/scans/new",
        params: { config: "head_body" },
        headers: {
            accept: "application/json",
            Authorization: process.env.REACT_APP_API_KEY,
        },
    };

    axios
        .request(options)
        .then(function (response) {
            res.json(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
});

app.get("/check", (req, res) => {
    const info = req.query.id;
    const options = {
        method: "GET",
        url: `https://api.developer.in3d.io/scans/${info}`,
        headers: {
            accept: "application/json",
            Authorization: process.env.REACT_APP_API_KEY,
        },
    };

    axios
        .request(options)
        .then(function (response) {
            res.json(response.data);
        })
        .catch(function (error) {
            res.json(error);
        });
});

app.get("/return", (req, res) => {
    const info = req.query.id;
    const options = {
        method: "GET",
        url: `https://api.developer.in3d.io/scans/${info}/result?type=glb`,
        headers: {
            accept: "application/json",
            Authorization: process.env.REACT_APP_API_KEY,
        },
    };

    axios
        .request(options)
        .then(function (response) {
            res.json(response.data);
        })
        .catch(function (error) {
            res.json(error);
        });
});

app.get("/pubkey", (req, res) => {
    res.json(process.env.REACT_APP_PUB_KEY);
});

app.get("/sitepass", (req, res) => {
    res.json(process.env.REACT_APP_SITE_PASS);
});

app.listen(8000, () => console.log(`Server is running on port ${PORT}`));
