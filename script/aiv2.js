const axios = require('axios');

module.exports.config = {
  name: 'ai2',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['gpt-3.5', 'turbo'],
  description: "AI",
  usage: "Ai2 [prompt]",
  credits: 'Developer',
  cooldown: 3,
};

module.exports.run = async function({ api, event, args }) {
  
const axios = require('axios');

const test = async () => {
  try {
    const response = await axios.post('https://free-ai-models.vercel.app/v1/chat/completions', {
      model: 'gemini-1.5-pro-latest', // change if you want!
      messages: [
        { role: 'system', content: 'You are HiroshiKim AI(gemini-1.5-pro-latest)' }, // blank it or change the prompt!
        { role: 'user', content: 'Hello!' }
      ]
    });

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
};

test();
    
