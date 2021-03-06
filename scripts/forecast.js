class Forecast{
  constructor() {
    this.key = 'pwp9Mfa4F7lsf5oUl6N0oCgjVd0EARQG'
    this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/'
  }
  async updateCity(city){
    const cityDets = await this.getCity(city)
    const weather = await this.getWeather(cityDets.Key)

    return { cityDets, weather }
  }
  async getCity(city){
    const query = `?apikey=${this.key}&q=${city}`
    const response = await fetch(this.cityURI + query)
    const data = await response.json()
  
    return data[0]
  }
  async getWeather(code){
    const query = `${code}?apikey=${this.key}`
    const response = await fetch(this.weatherURI + query)
    const data = await response.json()

    return data[0]
  }
}



