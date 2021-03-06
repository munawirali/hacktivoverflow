const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res,nex)=>{
  res.json(
    {name:'server',port:3000}
  )
})

const user = require('./routes/user');
const question = require('./routes/question');
const answer = require('./routes/answer');

app.use('/users',user);
app.use('/questions',question);
app.use('/answers',answer);

module.exports = app.listen(process.env.PORT || 3000, ()=>{
  console.log('Listening from port 3000');
})
