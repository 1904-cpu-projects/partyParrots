import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductCardSmall from './ProductCardSmall';

class Products extends Component {
  render() {
    return (
      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div className="columns is-centered is-multiline">
            {this.props.beverages.map(beverage => (
              <div key={beverage.id} className="column is-2">
                <ProductCardSmall beverage={beverage} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  beverages: state.beverages,
});

export default connect(
  mapStateToProps,
  null
)(Products);
