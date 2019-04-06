"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.router = express_1.Router();
exports.router.get('/prueba', (req, res) => {
    res.status(200).send("Bienvenido");
});
