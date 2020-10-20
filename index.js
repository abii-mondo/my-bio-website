
const express = require('express')

const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

const urlencodedParser = bodyParser.urlencoded({extended: true})

app.use(express.static('public'))




app.get('/', function(req,res){
	res.sendFile(path.resolve(__dirname, 'pages/index.html'))
})

app.get('/contact', function(req,res){
	res.sendFile(path.resolve(__dirname,'pages/contact.html'))
})

app.post('/contact', urlencodedParser, function(req, res){
	console.log(req.body)
	let name = `<h3>Hey ${req.body.name}, Thanks for contacting me. I will get back to you! </h3>`
	if (!req.body.email || !req.body.message) return res.sendFile(path.resolve(__dirname, 'pages/contact-unsuccess.html'))
	res.sendFile(path.resolve(__dirname, 'pages/contact-success.html'), name)
})

app.get('/education', function(req,res){

	res.sendFile(path.resolve(__dirname,'pages/education.html'))
})

app.get('/work', function(req,res){
	res.sendFile(path.resolve(__dirname, 'pages/work.html'))
})

app.get('/skills', function(req,res){
	res.sendFile(path.resolve(__dirname, 'pages/skills.html'))
})

app.listen(port, (req, res) => {
	console.log(`Bio Profile App listening on http://localhost:${port}`)
})

