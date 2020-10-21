const fs = require('fs')
const fetch = require('node-fetch') 

fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then( data => writerData(data))
    const writerData = (data)=>{       

        fs.appendFileSync('dados.json',  JSON.stringify(data.value))
        
    }

