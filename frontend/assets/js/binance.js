document.addEventListener('DOMContentLoaded', function() {
    setInterval(loadTop10Cryptos, 5000);
});

function loadTop10Cryptos() {
    fetch('https://api.binance.com/api/v3/ticker/price')
        .then(response => response.json())
        .then(data => {
            const top10 = data.slice(0, 10);
            const list = document.getElementById('crypto-list');
            list.innerHTML = '';
            top10.forEach(crypto => {
                const listItem = document.createElement('li');
                listItem.textContent = `${crypto.symbol}: ${crypto.price}`;
                list.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching top 10 cryptos:', error));
}