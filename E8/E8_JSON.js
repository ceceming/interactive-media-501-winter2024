function fetchActivity() {
    fetch('https://www.boredapi.com/api/activity')
        .then(response => response.json())
        .then(data => {
            document.getElementById('activity').innerText = data.activity;
        })
        .catch(error => console.error('Error:', error));
}
