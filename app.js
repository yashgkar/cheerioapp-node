const request = require('request')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    request('https://en.wikipedia.org/wiki/Facebook,_Inc.', (error, response, html) => {
        if (!error && response.statusCode == 200) {
            const $ = cheerio.load(html)
            const infobox = $('.mw-parser-output')
            const output = infobox.find('table.infobox').html()
            res.send(output)
        }
    })
})
app.listen(port, () => console.log(`Example app listening on port port!`))

