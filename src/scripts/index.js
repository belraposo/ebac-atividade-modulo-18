document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(e) {
        e.preventDefault()
        let maxNumber = document.getElementById('max-number').value
        maxNumber = parseInt(maxNumber)

        let randomNumber = Math.random() * maxNumber
        randomNumber = Math.floor(randomNumber)

        document.getElementById('result-value').innerText = randomNumber
        document.querySelector('.result').style.display = 'block'
    })
})