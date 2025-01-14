const buttonConvert = document.querySelector(".button-convert")
const currencySelect = document.querySelector(".currency-select")
const currencySelectToConverted = document.querySelector(".currency-select-to-converted")



function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConverted = document.querySelector(".currency-value-to-converted")
    const currencyValueConverted = document.querySelector(".currency-value")

    const bitcoin = 577000.188
    const dolar = 5.1
    const euro = 4.9
    const won = 241.4

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

    if (currencySelect.value == "won") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ko-KR", {
            style: "currency",
            currency: "KRW"
        }).format(inputCurrencyValue * won)

    }


}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img')

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

    if (currencySelect.value == 'won') {
        currencyName.innerHTML = 'Won'
        currencyImage.src = './assets/won.png'
    }

    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
buttonConvert.addEventListener('click', convertValues)
