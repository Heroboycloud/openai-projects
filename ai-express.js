// Getting the required modules ready
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
//Next, configuration ahead....
const app = express();
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// configuration finished...
// Next is express stuff to handle
//app.use(express.json());
app.disable('x-powered-by');
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true }));


app.post('/', (req,res)=>{
let myreq= {
headers: req.headers,
body: req.body
};
console.log(myreq.body.query);
res.json(myreq);
});
app.post('/gen', async (req, res) => {
  const message = req.body.message;
  let prompt = "";
  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: prompt,
    temperature: 0.3,
    max_tokens: 200,
    top_p: 0.9,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  res.json({ text: response.data.choices[0].text });
});


app.listen(3000, () => {
  console.log('Server started on port 3000');
});
