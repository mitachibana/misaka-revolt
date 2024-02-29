const { tokenWolf, tokenExchange } = require("./config.json");

async function daily() {
  const data = {
    astronomy: (await fetch(`http://api.wolframalpha.com/v2/query?appid=${tokenWolf}&input=today%20nagano&output=json&ip=138.199.21.39`)).json(),
    gBannerTime: (await fetch(`http://api.wolframalpha.com/v2/query?appid=${tokenWolf}&input=march+13+2024&output=json&ip=138.199.21.39`)).json(),
    hBannerTime: (await fetch(`http://api.wolframalpha.com/v2/query?appid=${tokenWolf}&input=march+27+2024&output=json&ip=138.199.21.39`)).json(),
    usd: (await fetch(`https://v6.exchangerate-api.com/v6/${tokenExchange}/latest/usd`)).json(),
    cad: (await fetch(`https://v6.exchangerate-api.com/v6/${tokenExchange}/latest/cad`)).json(),
    gbp: (await fetch(`https://v6.exchangerate-api.com/v6/${tokenExchange}/latest/gbp`)).json(),
    eur: (await fetch(`https://v6.exchangerate-api.com/v6/${tokenExchange}/latest/eur`)).json(),
    motivation: (await fetch(`https://zenquotes.io/api/random`)).json(),
    jpword: (await fetch(`https://random-word.ryanrk.com/api/jp/word/random`)).json(),
  }
  return `
  :01H12ZH32NFRESS95RA5NRCG0N: ***GOOD DAY ReVoYo!*** :01H12ZH32NFRESS95RA5NRCG0N:
    ${data.astronomy?.queryresult?.pods?.[1]?.subpods?.[0]?.plaintext}
    ${data.astronomy?.queryresult?.pods?.[3]?.subpods?.[1]?.plaintext} | ${data.astronomy?.queryresult?.pods?.[3]?.subpods?.[0]?.plaintext}
    ${data.astronomy?.queryresult?.pods?.[7]?.subpods?.[0]?.plaintext}

    :01HM7RWMYHXZYVG6NKQCBVDYYK: **Banners**
    Current Genshin Banner: Ends on ${data.gBannerTime?.queryresult?.pods?.[0]?.subpods?.[0]?.plaintext}
    Time left: ${data.gBannerTime?.queryresult?.pods?.[2]?.subpods?.[0]?.plaintext}

    Current HSR Banner: Ends on ${data.hBannerTime?.queryresult?.pods?.[0]?.subpods?.[0]?.plaintext}
    Time left: ${data.hBannerTime?.queryresult?.pods?.[2]?.subpods?.[0]?.plaintext}

    :01HM7S2WR7G8W1N4QP0RR9K2JC: **Exchange Rates**
    *For those looking to import goods*
    USD/JPY: ${data.usd.conversion_rates.JPY}
    CAD/JPY: ${data.cad.conversion_rates.JPY}
    GBP/JPY: ${data.gbp.conversion_rates.JPY}
    EUR/JPY: ${data.eur.conversion_rates.JPY}

    :01HD3VTA1Y9SYSR1YD5JJWSEBZ: **Moon Phase:**
    ${data.astronomy?.queryresult?.pods?.[6]?.subpods?.[0]?.plaintext}

    **Quote of the Day:**
    *${data.motivation?.[0]?.q} 
    -${data.motivation?.[0]?.a}*

    **Japanese Word of the Day:**
    ${data.jpword?.[0]}

    *Pinging <@01H0M62PT3AXCQY4V0CAP08CDC> to notify of boot, Misaka explains with increasing irritation.*
    `;
}
module.exports.daily = daily;
