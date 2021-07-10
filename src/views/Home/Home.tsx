import React from "react";
import { contentConfig } from '../../config/contentConfig';

interface HomeState {
  curWidth: number;
}

class Home extends React.Component<{}, HomeState> {
  constructor(props) {
    super(props);
    this.updateWidth = this.updateWidth.bind(this);
    this.state = {
      curWidth: window.innerWidth
    }
  }

  updateWidth() {
    this.setState({
      curWidth: document.getElementById("home-page")!.offsetWidth
    })
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth);
  }

  componentDidUpdate() {
    if (document.getElementById("home-page")!.offsetWidth !== this.state.curWidth) {
      this.updateWidth();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <div id="home-page" className={"bx--grid bx--grid--full-width " + this.homeSize()}>
        <div id="header" className="bx--row">
          <div className="bx--col">
            <a href="/">
              <h1 className="header-text" data-content={contentConfig['home'].headerText}>{contentConfig['home'].headerText}</h1>
            </a>
          </div>
        </div>
        <div id="main-content" className="bx--row">
          <div className="bx--col"/>
          <div className="bx--col-lg-11">
            <div id="main-text">
              I am fixing broken hearts with bioengineering.<br/>
              <p>&nbsp;</p>
              Let's work together.
            </div>
          </div>
          <div className="bx--col"/>
        </div>
        <div id="footer" className="bx--row">
          <div className="bx--col"/>
          <div id="links" className="bx--row">
            {
              contentConfig['home'].socialLinks.map((link) =>  {
                return (
                  <div className="bx--col">
                    <a href={link['href']}>
                      <div className="link-text">{link['text']}</div>
                      {link['icon']}
                    </a>
                  </div>
                )
              })
            }
          </div>
          <div className="bx--col"/>
        </div>
      </div>
    )
  }

  homeSize() {
    if (this.state.curWidth < 575) {
      return "small";
    }

    else if (this.state.curWidth < 955) {
      return "medium";
    }

    else if (this.state.curWidth < 1487) {
      return "large";
    }

    else {
      return "xlarge";
    }
  }

  headerClassNames() {
    let classNames = ["bx--row"];
  
    if (this.state.curWidth < 575) {
      classNames.push("small");
    }
    else if (this.state.curWidth < 955) {
      classNames.push("medium");
    }

    return classNames.join(" ");
  }

  mainContentClassNames() {
    let classNames = ["bx--row"];

    if (this.state.curWidth < 575) {
      classNames.push("small");
    }
    else if (this.state.curWidth < 955) {
      classNames.push("medium");
    }

    return classNames.join(" ");
  }

  footerClassNames() {
    let classNames = ["bx--row"];

    if (this.state.curWidth < 955) {
      classNames.push("small");
    }
    else if (this.state.curWidth < 1487) {
      classNames.push("medium");
    }

    return classNames.join(" ");
  }
}

export default Home;