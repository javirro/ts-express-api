import express from 'express' // ESMODULES
// const express = require('express) // common jjs

const router = express.Router()

router.get('/', (_req, res) => {
console.log("Fetching data")
res.send("fetching")
})

router.post('/', (_req, res) => {
    console.log("Posting data")
    res.send("posting")
})


export default router