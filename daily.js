import config from "./config.json" with { type: "json" };
const { tokenWolf, tokenExchange } = config;

import configDaily from "./config-daily.json" with { type: "json" };
const { gBannerEnd, gDescription, hBannerEnd, hDescription, zBannerEnd, zDescription } = configDaily;

export async function daily() {
  const wolfTime1 = await fetch(
    `http://api.wolframalpha.com/v2/query?appid=${tokenWolf}&input=${gBannerEnd}&output=json`
  );
  const gBannerTime = await wolfTime1.json();
  const wolfTime2 = await fetch(
    `http://api.wolframalpha.com/v2/query?appid=${tokenWolf}&input=${hBannerEnd}&output=json`
  );
  const hBannerTime = await wolfTime2.json();
  const wolfTime3 = await fetch(
    `http://api.wolframalpha.com/v2/query?appid=${tokenWolf}&input=${zBannerEnd}&output=json`
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
  return `
  :01H12ZH32NFRESS95RA5NRCG0N: ***GOOD DAY ReVoYo!*** :01H12ZH32NFRESS95RA5NRCG0N:

    :salt: **Banners**
    ***Genshin Banner | ${gDescription}***
    Ends on ${gBannerTime?.queryresult?.pods?.[0]?.subpods?.[0]?.img?.title}
    Time left: ${gBannerTime?.queryresult?.pods?.[2]?.subpods?.[0]?.img?.title}
    
    ***HSR Banner | ${hDescription}***
    Ends on ${hBannerTime?.queryresult?.pods?.[0]?.subpods?.[0]?.img?.title}
    Time left: ${hBannerTime?.queryresult?.pods?.[2]?.subpods?.[0]?.img?.title}
    
    ***ZZZ Banner | ${zDescription}***
    Ends on ${zBannerTime?.queryresult?.pods?.[0]?.subpods?.[0]?.img?.title}
    Time left: ${zBannerTime?.queryresult?.pods?.[2]?.subpods?.[0]?.img?.title}
    
    :01HM7S2WR7G8W1N4QP0RR9K2JC: **Exchange Rates**
    USD/JPY: ${usd.conversion_rates.JPY}
    CAD/JPY: ${cad.conversion_rates.JPY}
    GBP/JPY: ${gbp.conversion_rates.JPY}
    EUR/JPY: ${eur.conversion_rates.JPY}
    
    **Quote of the Day:**
    *${motivation?.[0]?.q} 
    -${motivation?.[0]?.a}*
    
    *Pinging <@01H0M62PT3AXCQY4V0CAP08CDC> to notify of function execution, Misaka explains with increasing irritation.*
    `;
}







