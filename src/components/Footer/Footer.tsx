import React from "react";
import "react-dom";
import { contentConfig } from '../../config/contentConfig';

interface FooterProps {
  page: string
}

interface FooterState {
  currentWidth: number;
}

class Footer extends React.Component<FooterProps, FooterState> {
  constructor(props) {
    super(props);
    this.updateWidth = this.updateWidth.bind(this);
    this.state = {
      currentWidth: 0
    }
  }

  updateWidth() {
    this.setState({
      currentWidth: document.getElementById("footer")!.offsetWidth
    })
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth);
  }

  componentDidUpdate() {
    if (document.getElementById("footer")!.offsetWidth !== this.state.currentWidth) {
      this.updateWidth();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <div id="footer" className={this.footerClassNames()}>
        <div className="bx--col">
          <div id="links">
            {
              contentConfig[this.props.page].socialLinks.map((link) =>  {
                return (
                  <a href={link['href']}>
                    <div className="link-text">{link['text']}</div>
                    {link['icon']}
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }

  footerClassNames() {
    let classNames = ["bx--row"];

    if (this.state.currentWidth < 600) {
      classNames.push("small");
    }
    else if (this.state.currentWidth < 950) {
      classNames.push("medium");
    }

    return classNames.join(" ");
  }
}

export default Footer;
