"use strict";

var Progress = React.createClass({
  displayName: "Progress",


  render: function render() {
    return React.createElement(
      "div",
      { className: "bar relative bb border--white h-25 lh-copy-2 overflow-hidden" },
      React.createElement(
        "div",
        { className: "relative z-100" },
        React.createElement(
          "span",
          null,
          this.props.name
        ),
        React.createElement(
          "span",
          { className: "fr" },
          this.props.value
        )
      ),
      React.createElement("progress", { className: "db red h-25 absolute left-0 top-0 w-100", value: this.props.value, max: "1180" })
    );
  }
});

var ProgressList = React.createClass({
  displayName: "ProgressList",

  getInitialState: function getInitialState() {
    return {
      productList: [{ name: "BassCss", value: 14 }, { name: "Pure CSS", value: 18 }, { name: "Wikipedia", value: 32 }, { name: "Tachyons", value: 40 }, { name: "Smashing Magazine", value: 56 }, { name: "Google", value: 65 }, { name: "Stripe", value: 70 }, { name: "Bootstrap", value: 111 }, { name: "Unsplash", value: 114 }, { name: "IMDB", value: 170 }, { name: "CSS-Tricks", value: 173 }, { name: "Slack", value: 188 }, { name: "UFC", value: 217 }, { name: "Paypal", value: 244 }, { name: "Dropbox", value: 272 }, { name: "BBC", value: 288 }, { name: "Yahoo", value: 312 }, { name: "Airbnb", value: 356 }, { name: "Apple", value: 362 }, { name: "Dribbble", value: 385 }, { name: "Facebook", value: 389 }, { name: "Youtube", value: 441 }, { name: "Etsy", value: 507 }, { name: "Github", value: 534 }, { name: "Stack Overflow", value: 600 }, { name: "Twitter", value: 623 }, { name: "Medium", value: 674 }, { name: "The Guardian", value: 697 }, { name: "Kickstarter", value: 991 }, { name: "Pinterest", value: 1180 }]
    };
  },

  render: function render() {
    var products = this.state.productList.map(function (product) {
      return React.createElement(Progress, { name: product.name, value: product.value });
    });

    return React.createElement(
      "div",
      null,
      products
    );
  }
});

ReactDOM.render(React.createElement(ProgressList, null), document.getElementById("component-cssfilesize"));