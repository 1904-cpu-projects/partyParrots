import React from "react";

export default function CheckoutForm() {
  return (
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-two-thirds">
          <form>
            <div className="field is-centered">
              <div className="has-text-centered">
                <label className="is-size-3">Place Order</label>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Full Name:</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded has-icons-left">
                    <input class="input" type="text" placeholder="First Name" />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user" />
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control is-expanded has-icons-left has-icons-right">
                    <input
                      class="input"
                      type="text"
                      placeholder="Last Name"
                      value=""
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user" />
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Contact:</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded has-icons-left has-icons-right">
                    <input
                      class="input"
                      type="email"
                      placeholder="Email Address"
                      value=""
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user" />
                    </span>
                  </p>
                </div>

                <div class="field">
                  <p class="control is-expanded has-icons-left has-icons-right">
                    <input
                      class="input"
                      type="email"
                      placeholder="Phone Number"
                      value=""
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user" />
                    </span>
                  </p>
                  <p class="help">example: (xxx) xxx-xxxx</p>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Address Line 1:</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <p class="control is-expanded has-icons-left has-icons-right">
                      <input
                        class="input"
                        type="text"
                        placeholder="Street address, P.O. box, company name, c/o"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-address-card" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Address Line 2:</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <p class="control is-expanded has-icons-left has-icons-right">
                      <input
                        class="input"
                        type="text"
                        placeholder="Apartment, suite, unit, building, floor, etc."
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-address-card" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">City:</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <p class="control is-expanded has-icons-left has-icons-right">
                      <input class="input" type="text" placeholder="City" />
                      <span class="icon is-small is-left">
                        <i class="fas fa-city" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label">
                <label class="label">State:</label>
              </div>
              <div class="field-body">
                <div class="field has-addons">
                  <div class="control is-expanded">
                    <div class="select is-fullwidth">
                      <select name="country">
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

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Zip Code:</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <p class="control is-expanded has-icons-left has-icons-right">
                      <input class="input" type="text" placeholder="Zip Code" />
                      <span class="icon is-small is-left">
                        <i class="fas fa-map-marker-alt" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label">
                <label class="label">Already a member?</label>
              </div>
              <div class="field-body">
                <div class="field is-narrow">
                  <div class="control">
                    <label class="radio">
                      <input type="radio" name="member" />
                      Yes
                    </label>
                    <label class="radio">
                      <input type="radio" name="member" />
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="field">
              <div class="field-label" />
              <div class="field-body">
                <div class="field center">
                  <div class="control">
                    <button class="button is-primary">Place Order</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
