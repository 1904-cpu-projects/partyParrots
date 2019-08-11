import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductCardSmall from './ProductCardSmall'
import { fetchAllBeverages } from '../actions/beverageActions';

class Products extends Component {

    componentDidMount(){
      this.props.fetchBeverages();
    }

    render(){
      return  <section className="section" style={{paddingTop:'120px'}}>
                <div className="container">
                  <div className = "columns is-centered is-multiline">
                    {this.props.beverages.map( 
                      beverage => <div key={beverage.id} className = "column is-2">< ProductCardSmall  beverage = { beverage } /></div>
                    )}
                  </div>
                </div>
              </section>
    }

}

const mapStateToProps = state => (
{
    beverages: state.beverages
})

const mapDispatchToProps = ( dispatch ) => {
    return {
        fetchBeverages: () => {
            dispatch( fetchAllBeverages() )
        }
    }
}

export default connect( mapStateToProps , mapDispatchToProps )( Products );
