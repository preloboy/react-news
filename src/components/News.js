import React, { Component } from 'react';
import Item from './Item';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    this.fetchArticles();
  }

  async fetchArticles() {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c3becb3f7a534a20956deb6f9446f892');
    const jsonData = await response.json();
    this.setState({ articles: jsonData.articles });
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        <h1>Top Business Headlines:</h1>
        <ul>
          {articles.map((article, index) => (
            <div key={index} className="col-md-4">
              <Item title={article.title ? article.title : ""} description={article.description ? article.description : ""} image={article.urlToImage} url={article.url} />
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default News