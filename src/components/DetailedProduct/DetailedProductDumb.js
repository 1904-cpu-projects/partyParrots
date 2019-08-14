import React from 'react';
import QuantitySelector from '../QuantitySelector/QuantitySelector';

export default function DetailedProduct(props) {
  return (
    <div className={props.modal ? 'modal is-active' : 'modal'}>
      <a className="modal-background" onClick={props.handleClick} />
      <div className="modal-content">
        <div className="box">
          <article className="media">
            <div
              className="media-left center"
              style={{
                height: '370px',
                width: '300px',
                marginTop: '20px',
                marginBottom: '20px',
                marginRight: '10px',
                marginLeft: '10px',
              }}
            >
              <figure className="image">
                <img
                  src="https://cdn.shoplightspeed.com/shops/611413/files/7188569/lost-coast-brewery-lost-coast-brewery-sharkinator.jpg"
                  alt="Image"
                />
              </figure>
            </div>
            <div
              className="media-content"
              style={{ marginTop: '50px', marginRight: '50px' }}
            >
              <div className="content">
                <div style={{ paddingBottom: '5px' }}>
                  <div className="is-size-4 has-text-weight-semibold">
                    {props.beverage.name}
                  </div>
                  <div className="is-italic is-size-6 has-text-weight-medium">
                    {props.beverage.manufacturer}
                  </div>
                </div>
                <br />

                <div style={{ paddingBottom: '5px' }}>
                  {props.beverage.description}
                </div>
                <br />
                <small>
                  {props.beverage.size + ' fl. oz.'}
                  <br />
                  {'Alcohol by Volume: ' + props.beverage.percentAlcohol + '%'}
                  <br />
                  {'Category: ' + props.beverage.category}
                </small>
                <br />
              </div>
              <nav className="level is-mobile">
                <div className="level-left">
                  <div className="is-size-5 has-text-danger">
                    {'$' + props.beverage.price + ' ea.'}
                  </div>
                </div>
                {props.inCart && props.inCart.id ? (
                  <div className="level-right control">
                    <QuantitySelector item={props.inCart} showZero={true} />
                  </div>
                ) : (
                  <a className="level-right button is-text">
                    <span className="icon is-size-4" onClick={props.addToCart}>
                      <i className="fas fa-cart-plus" />
                    </span>
                  </a>
                )}
              </nav>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
