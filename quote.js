module.exports.quote = quote;

async function quote() {
  const quote = await fetch("https://zenquotes.io/api/random");
  const motivation = await quote.json();
  return `
  *${motivation?.[0]?.q} 
  -${motivation?.[0]?.a}*
  `;
}
