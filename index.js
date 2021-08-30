const express = require('express');
const app = express()
app.set('view engine', 'hbs')

const port = process.env.PORT || 4000;

app.listen( port, () => { console.log(`E-compliment app running on port ${port}`)})
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ]
  
  const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
//   {newColor: randomColors, newCompliments: randomCompliments}

  app.get('/', (req, res) => { 
    let randomCompliments = compliments[Math.floor(Math.random()*compliments.length)]
    let randomColors = colors[Math.floor(Math.random()*colors.length)]
    res.render ('welcome', {newCompliments: randomCompliments})
}
)

  app.get('/:name', (req, res) => { 
      let randomCompliments = compliments

      res.render('index', {name: req.params.name})
    }
    )