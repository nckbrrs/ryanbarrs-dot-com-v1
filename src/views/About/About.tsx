import React from "react";
import Headshot from "../../assets/images/headshot.png";
import { contentConfig } from '../../config/contentConfig';

interface AboutState {
  curWidth: number;
}

class About extends React.Component<{}, AboutState> {
  constructor(props) {
    super(props);
    this.updateWidth = this.updateWidth.bind(this);
    this.state = {
      curWidth: window.innerWidth
    }
  }

  updateWidth() {
    this.setState({
      curWidth: document.getElementById("about-page")!.offsetWidth
    })
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth);
  }

  componentDidUpdate() {
    if (document.getElementById("about-page")!.offsetWidth !== this.state.curWidth) {
      this.updateWidth();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <div id="about-page" className="bx--grid bx--grid--full-width">
        <div id="header" className={this.headerClassNames()}>
          <div className="bx--col">
            <a href="/">
              <h1 className="header-text" data-content={contentConfig['about'].headerText}>{contentConfig['about'].headerText}</h1>
            </a>
          </div>
        </div>
        <div  id="about-content" className={this.aboutContentClassNames()}>
          <div className="bx--col-xlg-1"/>
          <div className="bx--col-lg bx--col-md-8" id="headshot-wrapper">
            <span id="headshot-spacer"></span>
            <img id="headshot" alt="my face" src={Headshot}/>
          </div>
          <div className="bx--col-xlg-6 bx--col-lg-7" id="about-text">
            <div>
              I am a PhD Candidate in Bioengineering living in Charleston, SC.
              <br /><br />
              My research focuses on cardiovascular tissue engineering and cardiac regeneration, and I am currently supported by an NIH F31 Predoctoral Fellowship.
              <br /><br />
              Outside of the lab, I enjoy cooking, roasting coffee, discovering new music, and playing the ancient Irish sport of hurling with the Charleston Hurling Club.
            </div>
          </div>
          <div className="bx--col-xlg-1"/>
        </div>
        <div id="footer" className={this.footerClassNames()}>
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

  headerClassNames() {
    let classNames = ["bx--row"];
  
    if (this.state.curWidth < 875) {
      classNames.push("small");
    }
    else if (this.state.curWidth < 1320) {
      classNames.push("medium");
    }

    return classNames.join(" ");
  }

  aboutContentClassNames() {
    let classNames = ["bx--row"];

    if (this.state.curWidth < 680 ) {
      classNames.push("small");
    }
    else if (this.state.curWidth < 1056) {
      classNames.push("medium");
    }

    return classNames.join(" ");
  }

  footerClassNames() {
    let classNames = ["bx--row"];

    if (this.state.curWidth < 950) {
      classNames.push("small");
    }
    else if (this.state.curWidth < 1487) {
      classNames.push("medium");
    }

    return classNames.join(" ");
  }
}

export default About;