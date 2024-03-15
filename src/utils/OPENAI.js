// // import { Configuration, OpenAIApi} from 'openai'
// import OpenAI from "openai";
import axios from "axios";

// const openai = new OpenAI({
//   apiKey: import.meta.env.VITE_MY_API_KEY,
//   dangerouslyAllowBrowser: true,
// });
// // const configuration= new Configuration({
// //   apiKey: import.meta.env.VITE_MY_API_KEY,

// // })

// // const openai = new OpenAIApi(configuration);

// // import OpenAI from "openai";

// // const openai = new OpenAI();

// // async function main() {
// //   const image = await openai.images.generate({ model: "dall-e-3", prompt: "A cute baby sea otter" });

// //   console.log(image.data);
// // }
// // main();

export const imageGenerator = async (string) => {
  try {
    console.log(string)
    const response = await axios.post(import.meta.env.VITE_SERVER_URL + "ai/image-generator", {prompt:string});
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
