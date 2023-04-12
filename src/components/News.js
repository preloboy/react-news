import React, { Component } from 'react';
import Item from './Item';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1
    };
  }

  componentDidMount() {
    this.fetchArticles();
  }

  async fetchArticles() {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c3becb3f7a534a20956deb6f9446f892&page=${this.state.page}`);
    const jsonData = await response.json();
    this.setState({ articles: jsonData.articles });
  }

  clickPrev = async () => {
    // console.log("clicked on Previous")
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c3becb3f7a534a20956deb6f9446f892&page=${this.state.page - 1}`);
    const jsonData = await response.json();
    this.setState({
      page: this.state.page - 1,
      articles: jsonData.articles
    })

  }

  clickNext = async () => {
    // console.log("clicked on Next")
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c3becb3f7a534a20956deb6f9446f892&page=${this.state.page + 1}`);
    const jsonData = await response.json();
    console.log(jsonData)
    this.setState({
      page: this.state.page + 1,
      articles: jsonData.articles

    })
  }

  render() {
    const { articles } = this.state;
    return (
      <div className='container'>
        <h3 className='mt-3'>Top Business Headlines:</h3>
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-md-4 my-3" key={index}>
              <Item content={article} />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-between">
          <button disabled={this.state.page <= 1} onClick={this.clickPrev} type="button" className="btn btn-primary">&larr; Previous</button>
          <button onClick={this.clickNext} type="button" className="btn btn-primary">Next &rarr;</button>
        </div>
      </div>
    );
  }
}


export default News