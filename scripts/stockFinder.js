// variables & constants;
const url =
  "https://platform.easyequities.io/ValueAllocation/Buy?contractCode=";
const path = "./data/ShareData.json";

async function findStock(path) {
  const response = await fetch(path);
  const stocks = await response.json();

  for (let i = 0; i < stocks.length; i++) {
    let instrumentName;
    let contractCode;
    let regex;

    if (document.body.innerText.includes(stocks[i].InstrumentName)) {
      instrumentName = stocks[i].InstrumentName;
      contractCode = stocks[i].ContractCode;
      regex = new RegExp(instrumentName, "g");
    }
    document.body.innerHTML = document.body.innerHTML.replace(
      regex,
      `<a href=${url + contractCode} target="_">${instrumentName}</a>`
    );
  }
}

findStock(path);
