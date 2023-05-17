import React, { useEffect, useState } from "react";
import "../styles/news.css";

const NewsContent = () => {
  const [news, setNews] = useState([]);
  // const [main, setMain] = useState([]);
  // const [sideBar, setSideBar] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      await fetch(
        "https://newsapi.org/v2/everything?q=tesla&from=2023-04-17&sortBy=publishedAt&apiKey=c935578757914d02b8765bb69b583e80"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data.articles);
          // setMain(data.articles.splice(0, 1));
          // setSideBar(data.articles.splice(0, 3));
          setNews(data.articles);
        });
    };
    getdata();
  }, []);

  return (
    <div className="newsMain">
      <header>
        <span>
          <h1>D</h1>
        </span>
        <div className="navItems">
          <ul>
            <li>
              <a href="">LEARN</a>
            </li>
            <li>
              <a href="">BLOG</a>
            </li>
            <li>
              <a href="">BOOKMARKS</a>
            </li>
            <li>
              <a href="">UI KIT</a>
            </li>
            <li>
              <a href="">LAIN NYA</a>
            </li>
          </ul>
        </div>
        <div className="socialSites">
          <i className="fa-brands fa-twitter fa-xl"></i>
          <i className="fa-brands fa-instagram fa-xl"></i>
          <i className="fa-solid fa-globe fa-xl"></i>{" "}
          <i className="fa-solid fa-key  fa-xl"></i>{" "}
        </div>
      </header>

      <section className="lowerSection">
        <h1>Articles</h1>
        <div className="articles">
          {news.map((ele, i) => (
            <div key={i} className="singleItem">
              <img src={ele.urlToImage} alt="" />
              <p>{ele.publishedAt}</p>
              <h1>{ele.title}</h1>
              <p>{ele.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsContent;
