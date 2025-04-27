const { tokenWolf, tokenExchange } = require("./config.json");

async function daily() {
  const wolfData = await fetch(
    `http://api.wolframalpha.com/v2/query?appid=${tokenWolf}&input=today%20nagano&output=json&ip=138.199.21.39`
  );
  const astronomy = await wolfData.json();
  const wolfTime1 = await fetch(
    `http://api.wolframalpha.com/v2/query?appid=${tokenWolf}&input=may+6+2025&output=json&ip=138.199.21.39`
  );
  const gBannerTime = await wolfTime1.json();
  const wolfTime2 = await fetch(
    `http://api.wolframalpha.com/v2/query?appid=${tokenWolf}&input=april+30+2025&output=json&ip=138.199.21.39`
  );
  const hBannerTime = await wolfTime2.json();
  const wolfTime3 = await fetch(
    `http://api.wolframalpha.com/v2/query?appid=${tokenWolf}&input=may+14+2025&output=json&ip=138.199.21.39`
  );
  const zBannerTime = await wolfTime3.json();
  const quote = await fetch("https://zenquotes.io/api/random");
  const motivation = await quote.json();
  const word = await fetch("https://random-word.ryanrk.com/api/jp/word/random");
  const jpword = await word.json();
  return `
  :01H12ZH32NFRESS95RA5NRCG0N: ***GOOD DAY ReVoYo!*** :01H12ZH32NFRESS95RA5NRCG0N:
    ${astronomy?.queryresult?.pods?.[1]?.subpods?.[0]?.plaintext}
    ${astronomy?.queryresult?.pods?.[3]?.subpods?.[1]?.plaintext} | ${astronomy?.queryresult?.pods?.[3]?.subpods?.[0]?.plaintext}
    ${astronomy?.queryresult?.pods?.[7]?.subpods?.[0]?.plaintext}
    
    :salt: **Banners**
    ***Genshin Banner | 5.5 Phase 2: Xilonen, Venti***
    Ends on ${gBannerTime?.queryresult?.pods?.[0]?.subpods?.[0]?.plaintext}
    Time left: ${gBannerTime?.queryresult?.pods?.[2]?.subpods?.[0]?.plaintext}
    
    ***HSR Banner | 3.2 Phase 1: Castorice DEBUT, Fugue, Jiaoqiu, Acheron***
    Ends on ${hBannerTime?.queryresult?.pods?.[0]?.subpods?.[0]?.plaintext}
    Time left: ${hBannerTime?.queryresult?.pods?.[2]?.subpods?.[0]?.plaintext}
    
    ***ZZZ Banner | 1.7 Phase 1: Vivian DEBUT, Jane, Piper, Seth***
    Ends on ${zBannerTime?.queryresult?.pods?.[0]?.subpods?.[0]?.plaintext}
    Time left: ${zBannerTime?.queryresult?.pods?.[2]?.subpods?.[0]?.plaintext}
    
    :crescent_moon: **Moon Phase:**
    ${astronomy?.queryresult?.pods?.[6]?.subpods?.[0]?.plaintext}
    
    **Quote of the Day:**
    *${motivation?.[0]?.q} 
    -${motivation?.[0]?.a}*
    
    **Japanese Word of the Day:**
    ${jpword?.[0]}
    
    *Pinging <@01H0M62PT3AXCQY4V0CAP08CDC> to notify of function execution, Misaka explains with increasing irritation.*
    `;
}
module.exports.daily = daily;
