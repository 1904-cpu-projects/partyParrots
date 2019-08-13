import React, { Component } from "react";
import DetailedProduct from "./DetailedProduct";

export default class ProductCardSmall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //hard-coded placeholder image until we get seed:
      image:
        "https://cdn.shoplightspeed.com/shops/611413/files/7188569/lost-coast-brewery-lost-coast-brewery-sharkinator.jpg",
      modal: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.onHover = this.onHover.bind(this);
    this.onLeave = this.onLeave.bind(this);
  }

  handleClick() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onHover() {
    this.setState({
      //hard-coded placeholder image until we get seed:
      image:
        "https://untappd.akamaized.net/site/beer_logos_hd/beer-677170_7ee29_hd.jpeg"
    });
  }
  onLeave() {
    this.setState({
      //hard-coded placeholder image until we get seed:
      image:
        "https://cdn.shoplightspeed.com/shops/611413/files/7188569/lost-coast-brewery-lost-coast-brewery-sharkinator.jpg"
    });
  }

  render() {
    return (
      <div>
        <div className="card">
          <figure className="image is-3by3">
            <a onClick={this.handleClick}>
              <img
                src={this.state.image}
                className="full-height"
                onMouseEnter={this.onHover}
                onMouseLeave={this.onLeave}
              />
            </a>
          </figure>
          <div
            className="level center"
            
          >
            <a
              className="title is-7"
              style={{ margin: "6px" }}
              onClick={this.handleClick}
            >
              {this.props.beverage.name}
            </a>
          </div>
        </div>
        <DetailedProduct
          modal={this.state.modal}
          handleClick={this.handleClick}
          beverage={this.props.beverage}
        />
      </div>
    );
  }
}
