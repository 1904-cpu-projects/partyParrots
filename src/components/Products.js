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
    const search = values.search || 'All';
    this.props.fetchBevs(category, search);
  }

  componentDidUpdate(prevProps) {
    const prevQuery = qs.parse(prevProps.location.search);
    const query = qs.parse(this.props.location.search);

    const prevCategory = prevQuery.category;
    const prevSearch = prevQuery.search;
    const category = query.category;
    const search = query.search;

    if (prevCategory !== category || prevSearch !== search) {
      this.props.fetchBevs(category, search);
    }
  }

  changeCategory = category => {
    const queries = qs.parse(this.props.location.search);

    if (category === '') {
      delete queries.category;
    } else {
      queries.category = category;
    }

    if (!queries.search && !queries.category) {
      this.props.history.push('/products');
    } else {
      const stringified = qs.stringify(queries);
      this.props.history.push(`/products?${stringified}`);
    }
  };

  changeSearch = search => {
    const queries = qs.parse(this.props.location.search);

    if (search === '') {
      delete queries.search;
    } else {
      queries.search = search;
    }

    if (!queries.search && !queries.category) {
      this.props.history.push('/products');
    } else {
      const stringified = qs.stringify(queries);
      this.props.history.push(`/products?${stringified}`);
    }
  };

  render() {
    const queries = qs.parse(this.props.location.search);

    return (
      <section className="section" style={{ paddingTop: '90px' }}>
        <div style={{ marginBottom: '50px' }}>
          <p className="center" style={{ fontSize: '45px' }}>
            Products
          </p>
          <hr />
        </div>

        <div className="container" style={{ marginBottom: '2%' }}>
          <form style={{ display: 'flex', justifyContent: 'start'}} onSubmit={e => e.preventDefault()}>
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <label className="label is-sr-only">Category:</label>
                  <div className="control">
                    <div className="select">
                      <select
                        value={queries.category ? queries.category : ''}
                        onChange={e => this.changeCategory(e.target.value)}
                      >
                        <option value="">-- Select a category --</option>
                        {BeverageCategories.map(cat => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label className="label is-sr-only">Search:</label>
                  <div className="control is-expanded">
                    <input
                      placeholder="search"
                      className="input"
                      type="text"
                      value={queries.search ? queries.search : ''}
                      onChange={e => this.changeSearch(e.target.value)}
                    />
                  </div>
                </div>
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
  fetchBevs(category, search) {
    dispatch(fetchAllBeverages(category, search));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
