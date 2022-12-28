const { cronScheduler } = require("./3cron.js");
const { getNews } = require("./2.GetNews.js");
const { getResponse } = require("./4gpt3.js");
const { thread } = require("./5twitter.js");

const generalBot = async () => {
  // Get the news articles
  const article = await getNews();

  article.forEach(async (element, i) => {
    console.log(i);
    // // Create the prompt
    // const prompt = await createPrompt(article[i]);

    let prompt = `Please generate a short tweet summary from the title, description and beggining of the content of this news article: ${article[i]}`;

    console.log(`Article ${i} :  ${prompt}`);

    // Create the tweet
    const gpt = await getResponse(prompt);
    console.log(gpt);
    const toArray = [gpt];
    // Post the tweet
    thread(toArray);
  });
};

// cronScheduler("generalBot", "0 15 * * *", generalBot);
generalBot();
