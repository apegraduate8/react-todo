const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const Mod = require('./model')
const PORT = process.env.PORT || 9000;



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.post('/api', (req, res) => {
    let my_todo = req.body.todoo;
    let me = {};

    console.log(me)

        Mod
          .Create(my_todo)
          .then(data => {console.log(data); me.creation = data})
          .catch(err => console.log(err))

         Mod
        .Get()
        .then(data => {me.all = data; console.log("made the get ", me);  res.json(me)})
        .catch(err => console.log(err))

})





app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
