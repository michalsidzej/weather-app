const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const icon = document.querySelector('.icon')
const timeImg = document.querySelector('.time')

const updateUI = ({cityDets, weather}) => {
  details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `
  console.log(weather)
  const timeSrc = weather.IsDayTime ? 'img/day.svg' :  'img/night.svg'

  timeImg.setAttribute('src', timeSrc)

  icon.innerHTML = `
  <img src="img/icons/${weather.WeatherIcon}.svg" />
  `
  if(card.classList.contains('d-none')){
    card.classList.remove('d-none')
  }
}
const updateCity = async city => {

  const cityDets = await getCity(city)
  const weather = await getCurrentConditions(cityDets.Key)

  return { cityDets, weather }
}

cityForm.addEventListener('submit', e => {
  e.preventDefault()
  const city = cityForm.city.value.trim()
  cityForm.reset()

  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err))
})