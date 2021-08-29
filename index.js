const express = require('express');
const app = express()
app.set('view engine', 'hbs')

const port = process.env.PORT || 4000;

app.listen( port, () => { console.log(`E-compliment app running on port ${port}`)})

const compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ]
  
  const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]