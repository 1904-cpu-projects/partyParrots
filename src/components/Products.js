import React from "react";
import { connect } from "react-redux";
import ProductCardSmall from "./ProductCardSmall";

function Products(props) {
  return (
    <section className="section" style={{ paddingTop: "90px" }}>
      <div style={{ marginBottom: "50px" }}>
        <p className="center" style={{ fontSize: "45px" }}>
          Products
        </p>
        <hr />
      </div>

      <div className="container">
        <div className="columns is-centered is-multiline">
          {props.beverages.map(beverage => (
            <div key={beverage.id} className="column is-2">
              <ProductCardSmall beverage={beverage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  beverages: state.beverages
});

export default connect(mapStateToProps)(Products);
