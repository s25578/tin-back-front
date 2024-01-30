const backendUrl = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', function() {
    const addPredictionForm = document.getElementById('add-prediction-form');
    if (addPredictionForm) {
        addPredictionForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(addPredictionForm);
            const predictionData = {
                author: formData.get('author'),
                full_text: formData.get('text'),
                symbol_id: formData.get('symbol')
            };
            addPrediction(predictionData);
        });
    }
});

function addPrediction(predictionData) {
    fetch(`${backendUrl}/predictions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(predictionData)
    })
        .then(response => {
            if (response.ok) {
                window.location.href = 'index.html';
            } else {
                console.error('Error adding prediction');
            }
        })
        .catch(error => console.error('Error adding prediction:', error));
}
