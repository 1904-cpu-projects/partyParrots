import React from 'react';
import QuantitySelector from '../QuantitySelector/QuantitySelector';

export default function DetailedProduct(props) {
  return (
    <div className={props.modal ? 'modal is-active' : 'modal'}>
      <div className="modal-background" onClick={props.handleClick} />

      <div className="modal-content box">
        <article
          className="media"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <div className="media-left" style={{ flexBasis: '50%' }}>
            <p className="image is-4by5">
              <img src={props.beverage.imageURL} alt="Image" />
            </p>
          </div>
          <div className="media-content">
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
            <div className="level is-mobile">
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
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
