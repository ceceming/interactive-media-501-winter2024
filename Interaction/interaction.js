fetch('http://worldtimeapi.org/api/timezone/America/Toronto')
    .then(response => response.json())
    .then(data => {
        const torontoTime = new Date(data.datetime);
        document.getElementById('torontoTime').innerText = torontoTime.toLocaleString();
    })
    .catch(error => {
        console.error('Error:', error);
    });  