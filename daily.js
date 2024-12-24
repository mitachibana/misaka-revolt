const { tokenWolf, tokenExchange } = require("./config.json");

async function daily() {
  const wolfData = await fetch(
    `http://api.wolframalpha.com/v2/query?appid=${tokenWolf}&input=today%20nagano&output=json&ip=138.199.21.39`
  );
  const astronomy = await wolfData.json();
  const wolfTime1 = await fetch(
    `http://api.wolframalpha.com/v2/query?appid=${tokenWolf}&input=december+31+2024&output=json&ip=138.199.21.39`
  );
  const gBannerTime = await wolfTime1.json();
  const wolfTime2 = await fetch(
    `http://api.wolframalpha.com/v2/query?appid=${tokenWolf}&input=january+14+2024&output=json&ip=138.199.21.39`
  );
  const hBannerTime = await wolfTime2.json();
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
    ${astronomy?.queryresult?.pods?.[1]?.subpods?.[0]?.plaintext}
    ${astronomy?.queryresult?.pods?.[3]?.subpods?.[1]?.plaintext} | ${astronomy?.queryresult?.pods?.[3]?.subpods?.[0]?.plaintext}
    ${astronomy?.queryresult?.pods?.[7]?.subpods?.[0]?.plaintext}

    :01HM7RWMYHXZYVG6NKQCBVDYYK: **Banners**
    Current Genshin Banner: Ends on ${gBannerTime?.queryresult?.pods?.[0]?.subpods?.[0]?.plaintext}
    Time left: ${gBannerTime?.queryresult?.pods?.[2]?.subpods?.[0]?.plaintext}

    Current HSR Banner: Ends on ${hBannerTime?.queryresult?.pods?.[0]?.subpods?.[0]?.plaintext}
    Time left: ${hBannerTime?.queryresult?.pods?.[2]?.subpods?.[0]?.plaintext}

    :01HM7S2WR7G8W1N4QP0RR9K2JC: **Exchange Rates**
    *For those looking to import goods*
    USD/JPY: ${usd.conversion_rates.JPY}
    CAD/JPY: ${cad.conversion_rates.JPY}
    GBP/JPY: ${gbp.conversion_rates.JPY}
    EUR/JPY: ${eur.conversion_rates.JPY}

    :01HD3VTA1Y9SYSR1YD5JJWSEBZ: **Moon Phase:**
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
