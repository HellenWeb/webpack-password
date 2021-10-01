
// Default Varibles

const inputNumber = document.querySelector('.number-input')
const tab = document.querySelector('.input')
const btnPass = document.querySelector('.button-pass')

// Function Generate Password

function generatePassword(lengt) {
    if (!lengt) return;
    let arr_en = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','!','№',';','%',':','?','*','(',')','_','+',',','='];
    let result = []
    for (let i = 1; i < lengt + 3; i++) {
        result.push(arr_en[Math.floor(Math.random() * arr_en.length)])
    }
    return result.join('')
}

// ||

btnPass.addEventListener('click', function(e) {
    e.preventDefault()
    document.querySelector('.input').innerHTML = generatePassword(10)
})

