function showweatherDetails(event) {
    event.preventDefault();
}

const city = document.getElementById('city').value;
const apiKey = 'c4f86ece00bc8aa272652ac9065af12d'; // Replace 'YOUR_API_KEY' with your actual API key
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;