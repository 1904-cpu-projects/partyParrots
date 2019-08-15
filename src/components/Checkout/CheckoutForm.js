import React from "react";

const CheckoutForm = ({ values, errors, isSubmitted, handleChange, handleSubmit, clear }) => {
  return (
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-two-thirds">
          <form onSubmit={handleSubmit}>
            <div className="field is-centered">
              <div className="has-text-centered">
                <label className="is-size-3">Place Order</label>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Full Name:</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <input
                      className="input"
                      name='firstName'
                      type="text"
                      onChange={handleChange}
                      placeholder="First Name"
                      value={values.firstName}
                      />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user" />
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control is-expanded has-icons-left has-icons-right">
                    <input
                      className="input"
                      name='lastName'
                      type="text"
                      onChange={handleChange}
                      placeholder="Last Name"
                      value={values.lastName}

                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user" />
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Contact:</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="email"
                      name='email'
                      onChange={handleChange}
                      placeholder="Email Address"
                      value={values.email}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user" />
                    </span>
                  </p>
                </div>

                <div className="field">
                  <p className="control is-expanded has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      name='phone'
                      placeholder="Phone Number"
                      value={values.phone}
                      onChange={handleChange}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user" />
                    </span>
                  </p>
                  <p className="help">example: 444-876-5309</p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Address Line 1:</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <p className="control is-expanded has-icons-left has-icons-right">
                      <input
                        className="input"
                        type="text"
                        placeholder="Street address, P.O. box, company name, c/o"
                        name='address1'
                        value={values.address1}
                        onChange={handleChange}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-address-card" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Address Line 2:</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <p className="control is-expanded has-icons-left has-icons-right">
                      <input
                        className="input"
                        type="text"
                        placeholder="Apartment, suite, unit, building, floor, etc."
                        name='address2'
                        value={values.address2}
                        onChange={handleChange}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-address-card" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">City:</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <p className="control is-expanded has-icons-left has-icons-right">
                      <input
                      className="input"
                      type="text"
                      placeholder="City"
                      name='city'
                      value={values.city}
                      onChange={handleChange}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-city" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">State:</label>
              </div>
              <div className="field-body">
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <div className="select is-fullwidth">
                      <select name="state" onChange={handleChange} >
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Zip Code:</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <p className="control is-expanded has-icons-left has-icons-right">
                      <input
                        className="input"
                        type="number"
                        placeholder="Zip Code"
                        name='zip'
                        value={values.zip}
                        onChange={handleChange}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-map-marker-alt" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="field">
              <div className="field-label" />
              <div className="field-body">
                <div className="field center">
                  <div className="control">
                    <button
                    className="button is-primary"
                    disabled={isSubmitted}>
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="field">
              <div className="field-label" />
              <div className="field-body">
                <div className="field center">
                  <div className="control">
                    <button className="button is-danger" onClick={clear}>Clear</button>
                  </div>
                </div>
              </div>
            </div>

          </form>
          {isSubmitted && <div>Order Successful!</div>}
        </div>
      </div>
    </section>
  );
}

export default CheckoutForm;
