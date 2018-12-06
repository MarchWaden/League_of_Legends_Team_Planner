const express = require ('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const summonerController = require('./controllers/summoner');
const teamController = require('./controllers/team');

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const port = 3001;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

require('./db/db')

app.use('/summoner', cors(corsOptions), summonerController);
app.use('/team', cors(corsOptions), teamController);

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
});
