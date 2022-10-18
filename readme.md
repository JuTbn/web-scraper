## .env file
- Rename the file .env_model to .env
- Add web page url that will be scrapped to the variable URL_SCRAPPED
- Inspect the web page url that will be scrapped and find the class of the element of the list you want to collect, add it to the variable TAG_TITLE

For example :
```
PORT = 8000
URL_SCRAPPED = 'https://www.theguardian.com/international'
TAG_TITLE = '.fc-item__title'
```

If any changes new to be made to collect the link of each TAG_TITLE check the npm doc of cheerio : [cheerio](https://www.npmjs.com/package/cheerio)

## Start the server

In the terminal use the command : **npm run start**

Exemple of result :
```
...
{
    title: '   Listen to previous episodes   ',
    url: 'https://www.theguardian.com/news/series/todayinfocus'
  },
...
```