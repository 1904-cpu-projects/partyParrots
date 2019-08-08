import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllBeverages } from '../actions/beverageActions';

class Products extends Component {

    componentDidMount(){
        this.props.fetchBeverages();
    }

    render(){
        return this.props.beverages.map( beverage => {return <li key={ beverage.id }>{ beverage.name }</li>}) 
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
