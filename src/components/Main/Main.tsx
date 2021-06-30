import React from "react";
import "react-dom";

interface MainProps {
  width: number;
}

class Main extends React.Component<MainProps, {}> {
  
  render() {
    return (
      <div id="main-content" className={this.mainContentClassNames()}>
        <div className="bx--col">
          <div id="main-text">
            I am fixing broken hearts with bioengineering.
            <br />
            Let's work together.
          </div>
        </div>
      </div>
    );
  }

  mainContentClassNames() {
    let classNames = ["bx--row"];

    if (this.props.width < 875) {
      classNames.push("small");
    }
    else if (this.props.width < 950) {
      classNames.push("medium");
    }

    return classNames.join(" ");
  }
}

export default Main;