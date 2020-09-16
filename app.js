window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature__description');
    let temperatureDegree = document.querySelector('.temperature__degree');
    let locationTimezon = document.querySelector('.location__timezone')

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            // console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
            fetch(api)
                .then(data => {
                    return data.json();
                })
                .then(data => {
                    console.log(data);
                    const { temperature, summary } = data.currently;
                    //Set DOM elements from the API
                    temperatureDegree.textContent = Math.floor(temperature);
                    temperatureDescription.textContent = summary;
                    locationTimezon.textContent = data.timezone;
                })
        });

    } else {
        h1.textContent = "hey lemme see where you at"
    }
})