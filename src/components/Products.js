import React, { Component } from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';
import ProductCardSmall from './ProductCardSmall';
import { BeverageCategories } from '../../utils/index';
import { fetchAllBeverages } from '../actions/beverageActions';

class Products extends Component {
  componentDidMount() {
    const values = qs.parse(this.props.location.search);
    const category = values.category || 'All';
    this.props.fetchBevs(category);
  }

  componentDidUpdate(prevProps) {
    const prevCategory = qs.parse(prevProps.location.search).category;
    const category = qs.parse(this.props.location.search).category;

    if (prevCategory !== category) {
      const _category = category || 'All';
      this.props.fetchBevs(_category);
    }
  }

  changeCategory = category => {
    if (category === '') {
      this.props.history.push('/products');
      return;
    }

    const queries = qs.parse(this.props.location.search);
    queries.category = category;
    const stringified = qs.stringify(queries);
    this.props.history.push(`/products?${stringified}`);
  };

  render() {
    return (
      <section className="section" style={{ paddingTop: '90px' }}>
        <div style={{ marginBottom: '50px' }}>
          <p className="center" style={{ fontSize: '45px' }}>
            Products
          </p>
          <hr />
        </div>

        <div className="container" style={{ marginBottom: '2%' }}>
          <form onSubmit={e => e.preventDefault()}>
            <div className="field is-grouped">
              <label className="label is-sr-only">Category:</label>
              <div className="select">
                <select onChange={e => this.changeCategory(e.target.value)}>
                  <option value="">-- Select a category --</option>
                  {BeverageCategories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form>
        </div>

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

const mapDispatchToProps = dispatch => ({
  fetchBevs(category) {
    dispatch(fetchAllBeverages(category));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
