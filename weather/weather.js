//Get reference to key dom element
const city = document.getElementById('city');
const currentTemp = document.getElementById('current-temp');
const maxTemp = document.getElementById('max-temp');
const minTemp = document.getElementById('min-temp');
const humidity = document.getElementById('humidity');

//Helper functions
const getLocation = () => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error("Geolocation is not supported by your browser"));
        }
        else
        {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        }
    })}

const getWeatherDetail = async (lat, lng) =>{
    try{
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=#`)
        const retData = await data.json()
        console.log(retData);
        return retData
    }
    catch(error)
    {
        console.log(`Error in retreving data from site: ${error}`)
    }
}

//code flow
(async() => {
    try
    {
        let getLocationDetail = await getLocation()
        console.log(getLocationDetail);
        let weatherDetail = await getWeatherDetail(getLocationDetail.coords.latitude, getLocationDetail.coords.longitude)
        city.textContent = `City: ${weatherDetail.name}`
        currentTemp.textContent = `Temp (f): ${weatherDetail.main.temp}`
        maxTemp.textContent = `Max Temp (f): ${weatherDetail.main.temp_max}`
        minTemp.textContent = `Min Temp (f): ${weatherDetail.main.temp_min}`
        humidity.textContent = `Humidity (f): ${weatherDetail.main.humidity}`
    }
    catch(err)
    {
        console.log(`Error:${String(err)}`);
    }
})()