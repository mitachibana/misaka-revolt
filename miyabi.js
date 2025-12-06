const { tokenWolf, tokenExchange } = require("./config.json");

async function miyabi() {
  const wolfData = await fetch(
    `http://api.wolframalpha.com/v2/query?appid=${tokenWolf}&input=december+30+2025%20nagano&output=json&ip=138.199.21.39`
  );
  const hoshimi = await wolfData.json();
  return `
  ## ReVoYo Reminders!
  We hope everyone is having a good day! We wanted to remind everyone about how to reach out to a mod if you need anything.
  The easiest way is to just DM or ping a mod:
  - mitachibana#1667
  - suichanwaa#4961
  - Thijnmens#4468
  ### In case of emergency:
  You can contact us via the Google Form below. All admins get a notification whenever someone submits a response. 
  https://forms.gle/i9vNpx4w2yGosfu87
  ### YE SHUNGUANG WORSHIP
  > **Ye Shunguang Debut Banner Start Date (30 December 2025):** ${hoshimi?.queryresult?.pods?.[3]?.subpods?.[0]?.plaintext}
  
  #### Post art and messages about Ye Shunguang in <#01KBSVRTNXJ443RD169WNKV3Y6>! We know you all absolutely adore her, but please remember to follow the rules!
    `;
}
module.exports.miyabi = miyabi;



