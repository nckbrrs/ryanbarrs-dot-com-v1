import React from "react";
import "react-dom";
import { contentConfig } from '../../config/contentConfig';

interface HeaderProps {
  page: string
}

class Header extends React.Component<HeaderProps, {}> {
  render() {
    return (
      <div className="bx--row">
        <div className="bx--col">
          <h1 className="header-text" data-content={contentConfig[this.props.page].headerText}>{contentConfig[this.props.page].headerText}</h1>
        </div>
      </div>
    );
  }
}

export default Header;
