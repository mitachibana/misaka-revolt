const { tokenWolf, tokenExchange } = require("./config.json");

async function miyabi() {
  const wolfData = await fetch(
    `http://api.wolframalpha.com/v2/query?appid=${tokenWolf}&input=december+30+2025%20nagano&output=json&ip=138.199.21.39`
  );
  const hoshimi = await wolfData.json();
  return `## ReVoYo Reminders!
  We hope everyone is having a good day! Just a reminder that if you need anything, DM or Ping a mod:
  - mitachibana#1667
  - suichanwaa#4961
  - Thijnmens#4468
  **If Stoat is down or you want an anonymous way to contact a mod, use this Google Form. (Please bookmark it in the case of downage!)**
  <https://forms.gle/i9vNpx4w2yGosfu87>
  ----`;
}
module.exports.miyabi = miyabi;





