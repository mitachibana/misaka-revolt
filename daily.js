const { tokenWolf, tokenExchange } = require("./config.json");

async function daily() {
  const wolfTime1 = await fetch(
    `http://api.wolframalpha.com/v2/query?appid=${tokenWolf}&input=august+19+2025&output=json`
  );
  const gBannerTime = await wolfTime1.json();
  const wolfTime2 = await fetch(
    `http://api.wolframalpha.com/v2/query?appid=${tokenWolf}&input=september+2+2025&output=json`
  );
  const hBannerTime = await wolfTime2.json();
  const wolfTime3 = await fetch(
    `http://api.wolframalpha.com/v2/query?appid=${tokenWolf}&input=september+3+2025&output=json`
  );
  const zBannerTime = await wolfTime3.json();
  const exchange = await fetch(
    `https://v6.exchangerate-api.com/v6/${tokenExchange}/latest/usd`
  );
  const usd = await exchange.json();
  const exchange2 = await fetch(
    `https://v6.exchangerate-api.com/v6/${tokenExchange}/latest/cad`
  );
  const cad = await exchange2.json();
  const exchange3 = await fetch(
    `https://v6.exchangerate-api.com/v6/${tokenExchange}/latest/gbp`
  );
  const gbp = await exchange3.json();
  const exchange4 = await fetch(
    `https://v6.exchangerate-api.com/v6/${tokenExchange}/latest/eur`
  );
  const eur = await exchange4.json();
  const quote = await fetch("https://zenquotes.io/api/random");
  const motivation = await quote.json();
  const word = await fetch("https://random-word.ryanrk.com/api/jp/word/random");
  const jpword = await word.json();
  return `
  :01H12ZH32NFRESS95RA5NRCG0N: ***GOOD DAY ReVoYo!*** :01H12ZH32NFRESS95RA5NRCG0N:

    :salt: **Banners**
    ***Genshin Banner | 5.8 Phase 1: Ineffa DEBUT, Citlali, Xingqiu, Setos, Fischl***
    Ends on ${gBannerTime?.queryresult?.pods?.[0]?.subpods?.[0]?.plaintext}
    Time left: ${gBannerTime?.queryresult?.pods?.[2]?.subpods?.[0]?.plaintext}
    
    ***HSR Banner | 3.5 Phase 1: Hysilens DEBUT, Kafka, Archer & Saber (COLLAB), Asta, Arlan, Hook***
    Ends on ${hBannerTime?.queryresult?.pods?.[0]?.subpods?.[0]?.plaintext}
    Time left: ${hBannerTime?.queryresult?.pods?.[2]?.subpods?.[0]?.plaintext}
    
    ***ZZZ Banner | 2.1 Phase 2: Alice DEBUT, Yanagi, Seth, Soukaku**
    Ends on ${zBannerTime?.queryresult?.pods?.[0]?.subpods?.[0]?.plaintext}
    Time left: ${zBannerTime?.queryresult?.pods?.[2]?.subpods?.[0]?.plaintext}
    
    :01HM7S2WR7G8W1N4QP0RR9K2JC: **Exchange Rates**
    USD/JPY: ${usd.conversion_rates.JPY}
    CAD/JPY: ${cad.conversion_rates.JPY}
    GBP/JPY: ${gbp.conversion_rates.JPY}
    EUR/JPY: ${eur.conversion_rates.JPY}
    
    **Quote of the Day:**
    *${motivation?.[0]?.q} 
    -${motivation?.[0]?.a}*
    
    **Japanese Word of the Day:**
    ${jpword?.[0]}
    
    *Pinging <@01H0M62PT3AXCQY4V0CAP08CDC> to notify of function execution, Misaka explains with increasing irritation.*
    `;
}
module.exports.daily = daily;
