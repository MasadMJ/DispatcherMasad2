const API_KEY = '4b4059d4befd45d1882ef4913a6a5c04';

export async function getTopHeadlines() {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=il&apiKey=${API_KEY}`);
  const data = await response.json();
  return data.articles;
}
export const newapi =  {getTopHeadlines};