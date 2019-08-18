import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

export default function Home() {
  return (
    <CSSTransitionGroup
      transitionAppear={true}
      transitionName="backgroundFadeIn"
      transitionAppearTimeout={9000}
      transitionLeaveTimeout={9000}
      transitionEnterTimeout={9000}
    >
      <div key="1" className="background example-enter">
        <section style={{ height: "100vh", width: "100vw" }}>
          <CSSTransitionGroup transitionAppear={true} transitionName="title1" transitionAppearTimeout={9000}  transitionLeaveTimeout={9000} transitionEnterTimeout={9000}>
            <div
              style={{
                color: "white",
                fontSize: "50px",
                paddingTop: "75px",
                fontStyle: "italic"
              }}
            >
              <div style={{ marginLeft: "200px" }}>Welcome To...</div>
            </div>
          </CSSTransitionGroup>

          <CSSTransitionGroup transitionAppear={true} transitionName="title2" transitionAppearTimeout={9000}  transitionLeaveTimeout={9000} transitionEnterTimeout={9000}>
            <div
              style={{
                marginLeft: "420px",
                marginTop: "10px",
                fontSize: "100px",
                color: "white",
                fontWeight: "bold"
              }}
            >
              Boujee Brews
            </div>
            <div style={{ marginLeft: "300px" }} />
          </CSSTransitionGroup>
        </section>
      </div>
    </CSSTransitionGroup>
  );
}
