import React, { Component } from "react";
import DetailedProduct from "./DetailedProduct/DetailedProduct";

export default class ProductCardSmall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.beverage.imageURL,
      modal: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.onHover = this.onHover.bind(this);
    this.onLeave = this.onLeave.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      modal: !state.modal
    }));
  }

  onHover() {
    this.setState({
      image: this.props.beverage.hoverURL
    });
  }
  onLeave() {
    this.setState({
      image: this.props.beverage.imageURL
    });
  }

  render() {
    return (
      <div>
        <div className="card">
          <a onClick={this.handleClick}>
            <img
              src={this.state.image}
              style={{ height: "285px", width: "225px" }}
              onMouseEnter={this.onHover}
              onMouseLeave={this.onLeave}
            />
          </a>
          <div className="level center">
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
