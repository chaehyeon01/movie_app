const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const axios = require('axios');

const ID_KEY = 'ArpxgCmGBKK14b_uRIYK';
const SECRET_KEY = 'KFIrYMupCl';

app.use(cors());

app.use(bodyParser.json());

app.use('/search', (req, res) => {
  const word = req.query.query;
  axios.get('https://openapi.naver.com/v1/search/movie.json', {
    params: {
      query: word
    },
    headers: {
      'X-Naver-Client-Id': ID_KEY,
      'X-Naver-Client-Secret': SECRET_KEY,
      'Access-Control-Allow-Origin': '*'
    }
  }).then(function(response) {
    const items = response.data.items;
    res.send({items:items});
  }).catch(function(error) {
    console.log(error);
  });


});

app.use('/movie', (req, res) => {
  axios.get('https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=88e5912e2bfb079238ca7936c0322922&targetDt=20200603', {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }).then(function(response) {
    const data = response.data.boxOfficeResult.dailyBoxOfficeList;
    res.send({data:data});
  }).catch(function(error) {
    console.log(error);
  });

});

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});