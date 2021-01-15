const key = 'pwp9Mfa4F7lsf5oUl6N0oCgjVd0EARQG'

const getCity = async city => {

  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
  const query = `?apikey=${key}&q=${city}`

  const response = await fetch(base + query)
  const data = await response.json()

  return data[0]
}

const getCurrentConditions = async code => {

  const base = `http://dataservice.accuweather.com/currentconditions/v1/${code}`
  const query = `?apikey=${key}`

  const response = await fetch(base + query)
  const data = await response.json()

  return data[0]
}



