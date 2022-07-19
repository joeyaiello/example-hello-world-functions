import fetch from 'node-fetch'

export const handler = async (event, context) => {
    const zip = event.queryStringParameters.zip || 12345
    const key = process.env.WEATHER_APIKEY
    const api = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=" + key + "&units=imperial"
   
    const response = await fetch(api)
    const json = await response.json()
    
    return {
        statusCode: 200,
        body: `The current temperature in ${json.name} is ${json.main.temp}°F`
    }
}