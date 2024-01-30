const backendUrl = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', function() {
    const addSymbolForm = document.getElementById('add-symbol-form');
    if (addSymbolForm) {
        addSymbolForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(addSymbolForm);
            const symbolData = {
                code: formData.get('code'),
                name: formData.get('name'),
                description: formData.get('description')
            };
            addSymbol(symbolData);
        });
    }
});

function addSymbol(symbolData) {
    fetch(`${backendUrl}/symbols`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(symbolData)
    })
        .then(response => {
            if (response.ok) {
                window.location.href = 'index.html';
            } else {
                console.error('Error adding symbol');
            }
        })
        .catch(error => console.error('Error adding symbol:', error));
}
