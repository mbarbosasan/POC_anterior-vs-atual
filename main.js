const obj1 = {
    nome: 'Mariazinha',
    idade: '13',
    estuda: true,
    serie: '6o ano',
    endereco: {
        rua: 'Rua das Flores',
        numero: '827',
        bairro: 'Florlândia'
    }
}

const obj2 = {
    nome: 'Joaozinho',
    idade: '14',
    estuda: true,
    serie: '5o ano',
    endereco: {
        rua: 'Rua das Aranhas',
        numero: '161',
        bairro: 'Spidercity'
    }
}

function compareValuesAndReturnDiffKeys(prev, curr, ancestor) {
    const keys = Object.keys(prev).map((key) => {
        if (typeof prev[key] === 'object') return compareValuesAndReturnDiffKeys(prev[key], curr[key], key)
        if  (prev[key] !== curr[key] && !ancestor) return key
        if (ancestor && obj1[ancestor][key] !== obj2[ancestor][key]) return `${ancestor}.${key}`
    }).filter((key) => key)

    insertIntoBody(keys)
}


function insertIntoBody(chaves) {
    chaves.forEach((key) => {
        if (key.includes('.')) {
            const [ancestor, chave] = key.split('.')
            return document.querySelector('#app #previous').innerHTML +=
                `
                    <p>${chave}: <span>${obj1[ancestor][chave]}</span></p>   
               
                `
        } else {
            document.querySelector('#app #previous').innerHTML +=
                `<p>${key}: <span>${obj1[key]}</span></p>`
        }
    })

    chaves.forEach((key) => {
        if (key.includes('.')) {
            const [ancestor, chave] = key.split('.')
            return document.querySelector('#app #current').innerHTML +=
                `
                    <p>${chave}: <span>${obj2[ancestor][chave]}</span></p>   
                `
        } else {
            document.querySelector('#app #current').innerHTML +=
                `<p>${key}: <span>${obj2[key]}</span></p>`
        }
    })
}

compareValuesAndReturnDiffKeys(obj1, obj2)
