import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from "./components/Navbar";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=sports&apiKey=${process.env.REACT_NEWS_API}`
      )
      .then((res) => {
        setArticles(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-md">
          {articles.map((article) => (
            <div
              key={article.title}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <img
                src={article.urlToImage}
                alt={article.title}
                className="h-48 w-full object-cover"
              />
              <div className="px-4 py-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={article.url}
                  className="block font-bold text-lg mb-2"
                >
                  {article.title}
                </a>
                <p className="text-gray-700 text-base">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
