const apiKey = "882393db9c455cb35a0c4cbcce5b0b52";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

        searchBox = document.querySelector(".search input");
        searchBtn = document.querySelector(".search button");
        weatherIcon = document.querySelector(".weather-icon")

        async function checkWeather(city){
            const response = await fetch(apiUrl + `&q=` + city + `&appid=` + apiKey);

            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
            }else{
                var data = await response.json();

            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".humidity").innerHTML = data.main.humidity + " % ";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr ";

            if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "images/clear.png"
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "images/drizzle.png"
            }
            else if(data.weather[0].main == "Humidity"){
                weatherIcon.src = "images/humidity.png"
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "images/mist.png"
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "images/rain.png"
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
            }

     }
           

        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })

        