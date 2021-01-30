let res = document.querySelector('div#res')
let nmbH = document.querySelector('input#nmb')
let anb = document.querySelector('select#anb')
let values = []

function adicionar(){
if(VNumber(nmbH.value) && List(nmbH.value)){
let n = Number(nmbH.value)
values.push(n)
createElementHTML(n);
res.innerHTML = ""
}else {
    alert(`ERROR/ Número invalido ou já adicinado na lista.`)
}

}

function VNumber(l){
if(Number(l) >= 1 && Number(l) <= 100){
        return true
    }
        return false
}

function List(l){
if(values.indexOf(Number(l)) == -1){
        return true
    }
        return false
}

function createElementHTML(n){
    let item = document.createElement('option')
    item.value = `tab${values.length}`
    item.text = `Foi adicinado o número ${n}`
    anb.appendChild(item)
}

function analisar(){
    res.innerHTML = ""
    res.innerHTML += `<p>Ao todo temos ${values.length} números.</p>`
    let maior = values[0]
    let menor = values[0]
    let sum = 0
    let med = 0
    for(let p in values){
        sum += values[p]
        if(values[p] > maior){
            maior = values[p]
        }else if(values[p] < menor){
            menor = values[p]
        }
        med = sum/values.length
    }
    res.innerHTML += `<p>O maior número é ${maior}.</p>`
    res.innerHTML += `<p>O menor número é ${menor}.</p>`
    res.innerHTML += `<p>A soma dos valores é ${sum}.</p>`
    res.innerHTML += `<p>A media de valores é ${med}</p>`

}