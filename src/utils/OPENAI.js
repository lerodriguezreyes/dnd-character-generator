// import { Configuration, OpenAIApi} from 'openai'
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_MY_API_KEY,
  dangerouslyAllowBrowser: true,
});
// const configuration= new Configuration({
//   apiKey: import.meta.env.VITE_MY_API_KEY,

// })

// const openai = new OpenAIApi(configuration);

// import OpenAI from "openai";

// const openai = new OpenAI();

// async function main() {
//   const image = await openai.images.generate({ model: "dall-e-3", prompt: "A cute baby sea otter" });

//   console.log(image.data);
// }
// main();




export const imageGenerator = async (string) => {
    try {
      const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: `${string}`,
        n: 1,
        size: '1024x1024',
    })
    console.log("This is all of OpenAI response", response.data[0].url)
    console.log('This is the data ==>', response.data[0].url)
    return response.data[0].url
    } catch(error) {console.log(error)
    }
  }

