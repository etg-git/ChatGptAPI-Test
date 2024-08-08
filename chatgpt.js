import OpenAI from 'openai/index.mjs';


var openai = new OpenAI({
  // apiKey: process.env.OPEN_API_KEY
  apiKey: process.env.VUE_APP_OPEN_AI_API_KEY,
  dangerouslyAllowBrowser: true 
});


let gpt = {
  requestMessage: null,
}

gpt.requestMessage = function(requestMessage) {
  let responseMessage = '';
  try {
      responseMessage = openai.chat.completions.create({
      message: [
        {
          role: 'user',
          content: requestMessage,
        }
      ],
      model: 'gpt-4o-mini',// 모델 선택 gpt-3.5-turbo gpt-4o
      max_tokens: 100, // 비용발생 ex) 200은 최대 200단어 생성
      temperature: 1.0, // 창의성 발휘 여부 0에 가까우면 strict, 2에 가까우면 자유롭게
      stop: null,
    })
    console.log(responseMessage)
    responseMessage = responseMessage.data.choices[0].message.content;
  } catch (error) {
    console.error('Error:', error);
    responseMessage = 'Error occurred while fetching response.';
  }

  return responseMessage
}

export default gpt;
