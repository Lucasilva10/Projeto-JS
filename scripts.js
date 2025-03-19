
const buttonConvert = document.querySelector(".button-convert")
const currencySelect = document.querySelector(".currency-select")
const currencySelectToConverted = document.querySelector(".currency-select-to-converted")



async function convertValues(){

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConverted = document.querySelector(".currency-value-to-converted")
    const currencyValueConverted = document.querySelector(".currency-value")

const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

const dolar = data.USDBRL.high
const euro = data.EURBRL.high
const bitcoin = data.BTCBRL.high

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolar)


    }


    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euro)


    }

    currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoin)

    }


    }
    if (currencySelectToConverted.value == 'dolar-to-converted'){
            currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-US',{
                style: 'currency',
                currency: 'USD'
            }).format(inputCurrencyValue)
        }

    

function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img')
    const currencyNameToConverted = document.querySelector('.currency-name-to-converted')
    const currencyImageToConverted = document.querySelector('.currency-img-to-converted')
   

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar'
        currencyImage.src = './assets/usa.png'
    }

    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro.png'
    }

    if (currencySelect.value == 'bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = './assets/bitcoin.png'

    }
    
    convertValues()

}


currencySelectToConverted.addEventListener('change', changeCurrency)
currencySelect.addEventListener("change", changeCurrency)
buttonConvert.addEventListener('click', convertValues)
