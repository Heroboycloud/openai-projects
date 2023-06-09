curl https://api.openai.com/v1/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
  "model": "text-davinci-003",
  "prompt": "Convert this text to a programmatic command:\n\nExample: Ask Constance if we need some bread\nOutput: send-msg `find constance` Do we need some bread?\n\nReach out to the ski store and figure out if I can get my skis fixed before I leave on Thursday",
  "temperature": 0,
  "max_tokens": 100,
  "top_p": 1.0,
  "frequency_penalty": 0.2,
  "presence_penalty": 0.0,
  "stop": ["\n"]
}'
