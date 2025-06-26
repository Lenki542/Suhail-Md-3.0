const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "96407730169350";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_32_06_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDkxLFxuICAgICAgICA4MixcbiAgICAgICAgMTY3LFxuICAgICAgICA0MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDMyLFxuICAgICAgICAzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI5LFxuICAgICAgICAzNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDc4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5LFxuICAgICAgICAyNCxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI3LFxuICAgICAgICA1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDgzLFxuICAgICAgICA5MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDczLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NCxcbiAgICAgICAgNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxLFxuICAgICAgICAzOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA1NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUyLFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgODMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjEzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDgzLFxuICAgICAgICAzMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYsXG4gICAgICAgIDM0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQwLFxuICAgICAgICA0MixcbiAgICAgICAgNDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDUzLFxuICAgICAgICAxODksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY0xpeU02Y2VRNG1uM3Rwd0JzbnMvNHFsWTdEY1JZNnpSWnZsYlFNNlNYZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NjQ3NzMwMTY5MzUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1NUYxNkYzQ0Q3RTcxNkRDM0M2RDcwRTEwQzI0NkQ2RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTA5NDExMjdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NjQ3NzMwMTY5MzUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwM0MyMkIwQjA2RkExMzYzNzA3RjI3RkFFQkEwMzA3RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTA5NDExMjdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibWtPTTduZUpRUUtVN1NncjV0RDBid1wiLFxuICBcInBob25lSWRcIjogXCJhMmExZDdjZC0yOWFlLTQxNjktYThmNy01MDQ1NTdhYWVhZDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjAsXG4gICAgICA2NSxcbiAgICAgIDEyOCxcbiAgICAgIDc2LFxuICAgICAgOTksXG4gICAgICAxNzMsXG4gICAgICA3MCxcbiAgICAgIDIzLFxuICAgICAgMjAyLFxuICAgICAgMzAsXG4gICAgICAxODEsXG4gICAgICAxNjksXG4gICAgICAxNjcsXG4gICAgICAxNjksXG4gICAgICAyMDksXG4gICAgICAxMTgsXG4gICAgICA5OCxcbiAgICAgIDEzMCxcbiAgICAgIDE4OCxcbiAgICAgIDE0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgMTU5LFxuICAgICAgMTExLFxuICAgICAgMjA5LFxuICAgICAgMTc3LFxuICAgICAgMTY5LFxuICAgICAgNjksXG4gICAgICAxNTksXG4gICAgICA5NixcbiAgICAgIDE2LFxuICAgICAgMjM5LFxuICAgICAgMjMxLFxuICAgICAgNDQsXG4gICAgICA5NixcbiAgICAgIDMyLFxuICAgICAgMjE2LFxuICAgICAgMjIsXG4gICAgICAzMSxcbiAgICAgIDg5LFxuICAgICAgMjA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWZpMlp3RkVNSDc5TUlHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5cVVaV0hCVkl5TjBaUVlwSDNpajE4ZjgxMmxwbVVNVENSVS9uM0F3aDAwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNwaDBIN1NCOXpPY3padkRxL0ZNR1htWVduRGFKYTBxTHBvQWVTVlhKOEZkZVFGYXlTOFM2a0dkUVRuVG5sd2gwSHhaOXJsVGhzVnRFb2kwSFFoYUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxxdWFUZWZ0ZkRFK0tSTm8wUzcvMFVSR1BUbzBUWnNZeDNuK25KMEFJeWJwcVVac2hBMStFTzJpc2o5VGQ0M0IrbGRUaTB2OTd2ckMvaUxQeGtQOGhRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTY0NzczMDE2OTM1MDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NjM2NDcwMzA4MDQ4MDozQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkF5aGFtXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NjQ3NzMwMTY5MzUwOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzUwOTQxMTI1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSmJXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKYlUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVN09WemlqMjJOY1U2LzROTUhkK1FmMFpHVG1wc29lekhVUllEQWVLOFVjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MDIzNjgyNjIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpiVi5qc29uIjogIntcImtleURhdGFcIjpcImlnbk1FN3RaQjAzak01QVc5M3JnZlA0QnU3VFVpM0MxWFdpZmNPdEpKT1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQwMjM2ODI2MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc1MDg5MTA5MTc2MFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpiVy5qc29uIjogIntcImtleURhdGFcIjpcIlRuRTFXSElSb0dmdHJjb0piZ09nS0g1QW8ra3VDUzZXQ3UyNnowaEg4NTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQwMjM2ODI2MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzUwOTM0OTE4NTE0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
