const key = '5399c219f8c11c581e46cb42e73c00fa'

export async function getWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (e) {
    throw e
  }
}