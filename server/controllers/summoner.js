const express = require('express');
const router  = express.Router();
const fetch = require("node-fetch");


const apiKey = 'RGAPI-8cd34975-5487-400e-ae6e-cdf181d45db9';
const apiUrl = ("?api_key="+apiKey);
const summonerByNameUrl = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/';
const masteryBySummonerUrl = "https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/";
const getSummonerByName = async (name) => {
  try{
    let endpointUrl = (summonerByNameUrl+name+apiUrl);
    let data = await fetch(endpointUrl, {
      method: 'get',
      headers: {
        "Origin": null,
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Riot-Token": apiKey,
        "Accept-Language": "en-US,en;q=0.5",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:63.0) Gecko/20100101 Firefox/63.0"
        }
    });
      let parsedData = await data.json();
      console.log(parsedData);
      return(parsedData);
    }catch(err){
      console.log(err);
  }
}
router.get('/mastery/:summonerName', async (req, res) =>  {
  const summonerName = req.params.summonerName;
  const summoner = await getSummonerByName(summonerName);
  console.log(summoner.id);
  const summonerId = summoner.id;
  let masteryUrl = (masteryBySummonerUrl+summonerId+apiUrl);
  try{
    let mastery = await fetch(masteryUrl,{
      method: 'get',
      headers:  {
            "Origin": null,
            "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Riot-Token": apiKey,
            "Accept-Language": "en-US,en;q=0.5",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:63.0) Gecko/20100101 Firefox/63.0"
            }
    });
    let parsedData = await mastery.json();
    console.log(parsedData);
    let topThree = [];
    for(let i=0;i<3;i++){
      topThree.push(parsedData[i]);
    }
    let response = await JSON.stringify(topThree)
    console.log(response);
    res.send(response);
  }catch(err){
    console.log(err);
  }
})

module.exports = router;
