const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("85638fd06ceb40c0bc1e944b3104bec2");

async function getNews() {
  try {
    const response = await newsapi.v2.topHeadlines({
      language: "en",
      country: "us",
    });

    let articleArray = [];
    response.articles.forEach((article) => {
      // create an array of articles with the title and description
      const string = `title: ${article.title}, description ${article.description}, content (first 200 char): ${article.content}`;
      articleArray.push(string);
    });
    return articleArray;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getNews };
