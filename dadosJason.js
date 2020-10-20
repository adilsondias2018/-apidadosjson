const fs = require('fs')
const fetch = require('node-fetch')
// fetch('https://github.com/')
//     .then(res => res.text())
//     .then(body => console.log(body));


// console.log(writerData());    
fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then( data => writerData(data))


    const writerData = (data)=>{        

        fs.appendFileSync('dados.json',  JSON.stringify(data.value))

        console.log(JSON.stringify(data));
    }
    
