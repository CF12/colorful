import React from "react";

import "./Home.css";

export default class Home extends React.Component {
  render() {
    return (
      <div className="body flex--center flex--column">
        <p className="body__title">colorful</p>
        <p className="body__description">A very colorful experiment.</p>
        <p className="body__description">
          Developed by <a href="https://github.com/cf12/">Brian Xiang</a>
        </p>
      </div>
    );
  }
}
