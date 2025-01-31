
const txtpeso = document.querySelector('#txt_peso')
const txtaltura = document.querySelector('#txt_altura')

function calcularImc(){
    let calculo = txtpeso.value / (txtaltura.value * txtaltura.value)
    const resultado = document.querySelector('#resultado')

    if(txtpeso !== '' && txtaltura !== ''){
        resultado.innerHTML = `<h1>IMC:${calculo.toFixed(2)}</h1>`
    }
}