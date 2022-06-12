const express = require('express')
const app = express()
const path = require('path')

const PORT = 8000;

const rappers = {
    '21 savage': {
        'birthLocation': 'London, England',
        'birthName': 'Sheya Bin Abraham-Joseph',
        'age': 29
    },
    'chance the rapper': {
        'birthLocation': 'Chicago, Illinois',
        'birthName': 'ChanCelor Bennett',
        'age': 29
    },
    'unknown': {
        'birthLocation': 'unknown',
        'birthName': 'unknown',
        'age': 0
    }
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html') )
    // res.sendFile(path.join(__dirname, '/css', '/normalize.css'))
    // res.sendFile(path.join(__dirname, '/css', '/style.css'))
})

app.get('/api/:name', (req, res) => {
    const rapperName = req.params.name.toLowerCase()
    console.log(rappers[rapperName])
    if( rappers[rapperName] ) {
        res.json(rappers[rapperName])
    } else {
        res.json(rappers['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})