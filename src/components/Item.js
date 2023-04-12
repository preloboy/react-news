import React, { Component } from 'react'

export class Item extends Component {
  render() {
    const { content } = this.props;
    return (
      // console.log(content.title)
      <div className="card" style={{width: '18rem'}}>
          <img src={content.urlToImage} className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">{content.title}</h5>
                  <p className="card-text">{content.description}</p>
                  <a href={content.url} className="btn btn-sm btn-primary">Go somewhere</a>
              </div>
      </div>
    )
  }
}

export default Item
