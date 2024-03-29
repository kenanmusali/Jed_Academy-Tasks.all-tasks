document.addEventListener("DOMContentLoaded", function () {
    const data = [
        { "name": "Bitcoin", "ticker": "BTC", "value": "9685", "change": "2.83%" },
        { "name": "Ethereum", "ticker": "ETH", "value": "210.5", "change": "6.17%" },
        { "name": "Ripple", "ticker": "XRP", "value": "0.2812", "change": "2.47%" },
        { "name": "Bitcoin Cash", "ticker": "BCH", "value": "441.4", "change": "5.01%" },
        { "name": "Bitcoin SV", "ticker": "BSV", "value": "303.17", "change": "5.53%" },
        { "name": "Litecoin", "ticker": "LTC", "value": "74.935", "change": "4.25%" },
        { "name": "Tether", "ticker": "USDT", "value": "0.9994", "change": "-1.7%" },
        { "name": "EOS", "ticker": "EOS", "value": "4.6161", "change": "3.15%" },
        { "name": "Binance Coin", "ticker": "BNB", "value": "19.824", "change": "-3.82%" },
        { "name": "Cardano", "ticker": "ADA", "value": "0.060389", "change": "2.93%" },
        { "name": "Tezos", "ticker": "XTZ", "value": "2.1247", "change": "6.12%" },
        { "name": "Ethereum Classic", "ticker": "ETC", "value": "12.5988", "change": "4.09%" },
        { "name": "Stellar", "ticker": "XLM", "value": "0.07034", "change": "-4.10%" },
        { "name": "Monero", "ticker": "XMR", "value": "79.523", "change": "3.45%" },
        { "name": "TRON", "ticker": "TRX", "value": "0.020881", "change": "5.21%" }
    ];

data.forEach(item => {
    const changeUsingDot = item.change;
    let changeDot = changeUsingDot.split('%');

    let numericValue = Number(changeDot[0]);

    if (numericValue < 0) {
        item.change = `${numericValue}↓`;
    } else if (numericValue > 0) {
        item.change = `+${numericValue}↑`;
    }
});

    const tableBody = document.querySelector('#cryptoTable tbody');

    data.forEach(crypto => {
        const row = tableBody.insertRow();
        const Name = row.insertCell(0);
        const Ticker = row.insertCell(1);
        const Value = row.insertCell(2);
        const Change = row.insertCell(3);

        Name.textContent = crypto.name;
        Ticker.textContent = crypto.ticker;
        Value.textContent = crypto.value;
        Change.textContent = crypto.change;
    });



    const inputElem = document.getElementById("searchByNames");
    inputElem.addEventListener("keyup", () => {
        let filteredTable = data.filter(item => {
            let name = item.name.toLowerCase();
            let inputVal = inputElem.value.toLowerCase();
            return name.includes(inputVal);
        });


        tableBody.innerHTML = "";

        filteredTable.forEach(crypto => {
            const row = tableBody.insertRow();
            const Name = row.insertCell(0);
            const Ticker = row.insertCell(1);
            const Value = row.insertCell(2);
            const Change = row.insertCell(3);

            Name.textContent = crypto.name;
            Ticker.textContent = crypto.ticker;
            Value.textContent = crypto.value;
            Change.textContent = crypto.change;
        });
    });
});

