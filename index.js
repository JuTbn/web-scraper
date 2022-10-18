const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
const env = require('dotenv').config()
const PORT = process.env.PORT

// const url = 'https://www.theguardian.com/international'
const url = process.env.URL_SCRAPPED

axios(url)
    .then(response => {
        const html = response.data
        // console.log(html)

        const $ = cheerio.load(html)
        const articles = []

        $(process.env.TAG_TITLE, html).each(function() {
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })
        console.log(articles);
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))