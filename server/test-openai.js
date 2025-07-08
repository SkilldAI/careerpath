import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

// Test OpenAI API connection
export async function testOpenAIConnection() {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return {
        success: false,
        error: 'OPENAI_API_KEY environment variable is not set'
      };
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Make a simple test request
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant. Respond with exactly: 'OpenAI API is working correctly!'"
        },
        {
          role: "user",
          content: "Test connection"
        }
      ],
      max_tokens: 20,
      temperature: 0,
    });

    const response = completion.choices[0]?.message?.content;

    return {
      success: true,
      message: response,
      model: completion.model,
      usage: completion.usage
    };

  } catch (error) {
    console.error('OpenAI API Test Error:', error);
    
    let errorMessage = 'Unknown error occurred';
    
    if (error.code === 'invalid_api_key') {
      errorMessage = 'Invalid API key provided';
    } else if (error.code === 'insufficient_quota') {
      errorMessage = 'Insufficient quota - check your OpenAI billing';
    } else if (error.code === 'rate_limit_exceeded') {
      errorMessage = 'Rate limit exceeded - too many requests';
    } else if (error.message) {
      errorMessage = error.message;
    }

    return {
      success: false,
      error: errorMessage,
      code: error.code
    };
  }
}