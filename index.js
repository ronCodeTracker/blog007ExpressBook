




const express = require('express')
const path = require('path')


const app = new express()
const ejs = require('ejs')
app.set('view engine','ejs')



app.use(express.static('public'))

app.listen(4000, ()=>{
    console.log('App listening on port 4000')
})

app.get('/',(req, res)=>{
    
    //res.sendFile(path.resolve(__dirname, 'pages/index.html'))
    res.render('index')
    res.json({error: err })



})


app.get('/about',(req, res)=>{
    
    //res.sendFile(path.resolve(__dirname, 'pages/about.html'))
    res.render('about')



})

app.get('/post',(req, res)=>{
    
    //res.sendFile(path.resolve(__dirname, 'pages/post.html'))
    res.render('post')



})


app.get('/contact',(req, res)=>{
    
    //res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
    res.render('contact')



})



