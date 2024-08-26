const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
process.env.OWNER_NUMBER = process.env.OWNER_NUMBER || '237694268225'
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Krishna:pss968048@cluster0.4rfuzro.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'crazycvv@gmail.com'
global.github = 'https://github.com/CrazyPrince/CRAZY-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || "237620114013"
global.devs = "237620114013";
global.website = 'https://github.com/CrazyPrince/CRAZY-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/984e15c49561a5dd9d112.jpg'

	
{
  "SESSION_ID": "CRAZY-MD-WHATSAPP-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUlZTTBvNERxMVY2RUd3enN2V0cwZVJLQkNJcTZFQW9pYVBxNm1ZM3oybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGQvWDNYQ1d4NzV0eDZ6bXRGSmJjcjB2QklLaTlTYnlxa1JSR1hNRDZEST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXT2tXUUdnMkNqRk5rN0dMY0NTVlp0c25kakxpUUI3UW01a0I2MmRzZm1RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3WUpFSnF2aGZicklRdDFJVnY0WkRxbk1JZElyajEwbGQ0ZjRzY2QrcEc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVOZGMvNnZjZUw2b1k0TGNuNGxsblBMVHd6UlROUFZUT0dxNlR0OU91V1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjN2TVN6Tkcrb3JaVytWczNUaHh1eE1yS0NHd3hKSHYvTTBiRXBKOFJwQ0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0ovdngwZVNFTGVoVStoUjZqd2UvMHBtUHlLVzlVZ1BvQUNxUnNlWUYxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3dmUVZVbGNrRkI0Vlo4b2dUWjQrZDRBRTM2SjRNemUralNJOUFCZy8yUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxTZW1mYjIzT0VCQUNZZGlUMWlmZlNRc1lxNk1SeDJZN3hSM1JqekJ3dERNcjBKQjZwbDEwMVp0d0VnajAyOHY0VzVEREJSbk5kVzNTSjZXQ1NiSmhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUzLCJhZHZTZWNyZXRLZXkiOiIxWkl0OFB4Um5zcXNoV1dTd0hwT3ZLelY2WE1mdmZDbzhxcHZzZlpMUWU0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4ZDBEV2ZyN1N6T29HZ2FSR2ZDd1Z3IiwicGhvbmVJZCI6IjMyYzg1OGMyLWU5ZjUtNDlmOS1iNGJkLTIzMTY2Zjk5N2NjNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaMnZqZ1ptd1lmbXZUU0tHMnd6VVB3YmRtOFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXBBOUlhUlFGS2k1Uzg5b0VsMGVYbFJpZlhJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFWVjM4Vjk5IiwibWUiOnsiaWQiOiIyMzQ3MDI2OTYxNjc3OjM4QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOdW1nTzRGRU1IT3NiWUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJNRlZCVUhIY1dWTndHU3UvVlpPM2R5Uys4NjBGR2hTemVCSmNDdHZiTUVZPSIsImFjY291bnRTaWduYXR1cmUiOiJxeVJVejdqMVU5L1BqVmFOWDBpMDlEU2FoZXdEQzdBaEh5bTN0L3didGpwbkQvUCsweTkvQUtCdC9wWERxb1NnZjdzVXRJcVdrV3Q0NUVzb3k2cVRCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiS3JYa1J3V0NhWEtPQXZSQ3Iyb2JrUjFaUmFwR2NjQlpHaFoxUzVGdi9aelpIN1F1dnBDWUMwL1VnMXkxWFR6Uk4rZzVGdG1qc0k1b3p2c2F0azQvaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDI2OTYxNjc3OjM4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRCVlFWQngzRmxUY0JrcnYxV1R0M2NrdnZPdEJSb1VzM2dTWEFyYjJ6QkcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjQ2NzE4MjN9",
  "OWNER_NUMBER": "2347026961677",
  "OWNER_NAME": "CRAZY PRINCE",
  "AUTO_READ_STATUS": "false",
  "AUTO_STATUS_SAVER": "false",
  "PACK_INFO": "👑;CrazyPrince",
  "PREFIX": "."
   
}



module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'Crazy Bot' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'CRAZY MD' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'CRAZY_MD' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'Crazy-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  GENIUS_API_KEY:  process.env.GENIUS_API_KEY === undefined ? '6vdum57Wo2tsKxaEGKJcvNHeSo1sd9oNTcPpDZD8E9v3mUh0jArn5TSvuvgmZLIs' : process.env.GENIUS_API_KEY,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'delete' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hey bruh, I,m Crazy  Md...Alive Now...' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'CRAZY',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE,
  LG: process.env.LG === undefined ? 'false' : process.env.LG,
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
