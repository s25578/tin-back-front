const backendUrl = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', function() {
    loadSymbols();
    loadPredictions();
});

function loadSymbols() {
    fetch(`${backendUrl}/symbols`)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#symbols-table tbody');
            tableBody.innerHTML = '';
            data.forEach(symbol => {
                const row = tableBody.insertRow();
                row.innerHTML = `
                    <td>${symbol.code}</td>
                    <td><a href="#" onclick="showSymbol(${symbol.id})">${symbol.name}</a></td>
                    <td>${symbol.description}</td>
                    <td>
                        <button onclick="deleteSymbol(${symbol.id})">Delete</button>
                    </td>
                `;
            });
        })
        .catch(error => console.error('Error fetching symbols:', error));
}

function loadPredictions() {
    fetch(`${backendUrl}/predictions`)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#predictions-table tbody');
            tableBody.innerHTML = '';
            data.forEach(prediction => {
                const row = tableBody.insertRow();
                row.innerHTML = `
                    <td>${prediction.author}</td>
                    <td>${prediction.full_text}</td>
                    <td>${prediction.symbol.code}</td>
                    <td>
                        <button onclick="deletePrediction(${prediction.id})">Delete</button>
                    </td>
                `;
            });
        })
        .catch(error => console.error('Error fetching predictions:', error));
}

function showSymbol(symbolId) {
    console.log('Show details for symbol', symbolId);
}

function editSymbol(symbolId) {
    console.log('Edit symbol', symbolId);
}

function deleteSymbol(symbolId) {
    fetch(`${backendUrl}/symbols/${symbolId}`, { method: 'DELETE' })
        .then(response => {
            if (response.ok) {
                loadSymbols();
            } else {
                console.error('Error deleting symbol');
            }
        })
        .catch(error => console.error('Error deleting symbol:', error));
}

function editPrediction(predictionId) {
    console.log('Edit prediction', predictionId);
}

function deletePrediction(predictionId) {
    fetch(`${backendUrl}/predictions/${predictionId}`, { method: 'DELETE' })
        .then(response => {
            if (response.ok) {
                loadPredictions();
            } else {
                console.error('Error deleting prediction');
            }
        })
        .catch(error => console.error('Error deleting prediction:', error));
}
