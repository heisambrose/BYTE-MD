const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0lVQnZKUTNpTjczRTg1M25hM0VETEV6YUdKelBzN3BCa1UxbXJVbVoxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU5BT25VZ0NrQlNrdFA1eUlHWklEaE1jVkNndm05VXNDTDFTOVR3eEx6MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQndhU1QzY2pWN0Z1K0VxeWlxV1MxR2UyVnlPa3ViRndEL3JsUUZCYVU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXMkczU09tSWg5N2d0RU41MDMzYkp4WjJXcDJNMEowUllDTkVXVEE5bkZjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVBc2FiWTg1VnpzSENHZ0hNbE11OEJWUEllY3JPRTg4NXhxUHRTNTBja0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldnS1NuSjMxV0FYRFpSWFJHSmtxbTQxUFRzUHYyaHZvWDhjZ2UraHVjREk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUkwbW40RENNY1BTUXZya2xxZVNnK2Yvays5RnJXQlJzZitYOE43N3drVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidldNTWFjZnB4NmZlbStFRE5NUUZLMWprNTk4SXg1cHFoaWtkMWtFZlNtOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFCb1FRdjIrQXpOSTJTVTNtejJHY09heVJVQUk1cDQwMk4wRjl3U2ZwOGRTMVlBNGJpRFRYczd2M2prQjdPK0VqUHVLekg5MlV5TzZOR25MZ0h1ZERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgwLCJhZHZTZWNyZXRLZXkiOiJOUUdmVGdvQi8wWHpRdDhxKzRWNHErN3czamdSWnVkSGJKaG9YbTFDcjkwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc5MDM4NjgwM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyMEFGNzMzMkYxRTZFQjVCMUYzNDFDMzgzQUE1NENGNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQwNzc2NDA0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1T3ZPR1ZJNFNWdThnMk1vZm9kaFZ3IiwicGhvbmVJZCI6IjkwNDdlOThjLTkwYmQtNDNlMy04OWIxLTA2MzI2MTA2ZGFlNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxUWgyakE4M3ArWHBpSkZ1Um15eUpoMkhocHM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1JBVGVyNDZmQUIxNjVGQXViUVNJVTRKaFNrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkQ5OE5EODNCIiwibWUiOnsiaWQiOiIyNTQ3OTAzODY4MDM6NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHlLaFpJR0VNVEhpTDRHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQlNTcE01M1FtWXVNT2xXUmtZZ3FpL3M0UndabWRvb3VkVE4vcjlLYWNFND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZjVZcTJuWjhla25SL1lwczBwNGZGald4VC9JRjFSQ0k2ZW85cU82THJ1Z2xTZFZXTk9KOHk4eDB3ajhxT0tzUlUwOCtzT1pVZGNsSkdxUllLajhOQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IkZWVithbkJpM0Q5MGxublhXZVFyZG56WmJJN2U4MlJPdDczLzNzTjB0WnFndjBIUEVadjJCVFpEc21nRWZ4WGZaMHlOY3FpUEFFTUxjNEZuSVJqbER3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzkwMzg2ODAzOjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUVVrcVRPZDBKbUxqRHBWa1pHSUtvdjdPRWNHWm5hS0xuVXpmNi9TbW5CTyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MDc3NjQwMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJK0MifQ==",
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'true',
  "MODE": process.env.MODE || "public",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "923072380380",
  "OWNER_NAME": process.env.OWNER_NAME || "Hamza",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'true',
  "PRESENCE": process.env.PRESENCE || "online",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'true',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'true',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'true',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'true',
  "AUTO_REACT": process.env.AUTO_REACT === 'true',
  "WELCOME": process.env.WELCOME === 'true',
  "ANTI_BAD": process.env.ANTI_BAD === 'true',
  "ANTI_LINK": process.env.ANTI_LINK === 'true',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'true',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'true',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'true',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "972",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'true'
};
