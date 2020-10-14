
const express = require('express')

const path = require('path')

const app = express()
const port = 3000

app.use(express.static('public'))


app.get('/', function(req,res){
	res.sendFile(path.resolve(__dirname, 'pages/index.html'))
})

app.get('/contact', function(req,res){
	res.sendFile(path.resolve(__dirname,'pages/contact.html'))
})

app.get('/post', function(req,res){

	res.sendFile(path.resolve(__dirname,'pages/post.html'))
})

app.get('/about', function(req,res){
	res.sendFile(path.resolve(__dirname, 'pages/about.html'))
})

app.listen(port, (req, res) => {
	console.log(`Blog App listening on http://localhost:${port}`)
})

