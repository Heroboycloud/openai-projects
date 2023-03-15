const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function SendPrompt(prompt,config)
{
const response = await openai.createCompletion({
  model: config.model,
  prompt: prompt,
  temperature:config.temp,
  max_tokens: config.max_tokens,
  top_p: 1.0,
  frequency_penalty: 0.2,
  presence_penalty: 0.0,
  stop: ["\n"],
});
console.log(response.data.choices[0].text);
}
var config ={
model: "text-davinci-003",
temp: 0,
max_tokens : 100

};

var query = " Provide 10 list of openai app ideas";




sendPrompt(query,config);

