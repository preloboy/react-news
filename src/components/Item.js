import React, { Component } from 'react'

export class Item extends Component {
    render() {
        const { title, description, image, url } = this.state;
        return (
            <div className="card" style={{width: '18rem'}}>
                <img src={image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={url} className="btn btn-sm btn-primary">Go somewhere</a>
                    </div>
            </div>
        )
    }
}

export default Item
