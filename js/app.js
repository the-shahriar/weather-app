const loadWeather = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    searchInput.value = '';

    const apiKey = '2b77066c0b364e68b5d86bcf8a5598b8';

    //load data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}`;


    fetch(url)
    .then(res => res.json())
    .then(data => showWeather(data))
    .catch(err => alert("Wrong city name!"));
}

const showWeather = data => {
    let cityValue = data['name'];
    let tempValue = (data['main']['temp']-273).toFixed(2);
    let descValue = data['weather'][0]['main'];


    const city = document.getElementById('city-name');
    city.innerText = cityValue;
    const temp = document.getElementById('temp');
    temp.innerText = tempValue;
    const desc = document.getElementById('desc');
    desc.innerText = descValue;
}