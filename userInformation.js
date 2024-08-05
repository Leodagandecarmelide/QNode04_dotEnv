require('dotenv').config();

const languages = process.env.LANGUAGES.split(',');


function displayLanguages () {
    console.log (`Mes laguages favoris sont :`);
    for (let i=0; i < languages.length; i+=1)
    {
    console.log(`- ${languages[i]}`);
    }
}

module.exports = {displayLanguages,};

