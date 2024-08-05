require('dotenv').config();
const userInformation = require('./userInformation.js')

console.log(`Bonjour, je m'appelle ${process.env.PRENOM} ${process.env.NOM}. J'habite à ${process.env.VILLE}.`)
userInformation.displayLanguages();