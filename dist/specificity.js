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
      React.createElement("progress", { className: "db red h-25 absolute left-0 top-0 w-100", value: this.props.value, max: "512" })
    );
  }
});

var ProgressList = React.createClass({
  displayName: "ProgressList",

  getInitialState: function getInitialState() {
    return {
      productList: [{ name: "BassCss", value: 30 }, { name: "Tachyons", value: 30 }, { name: "Pure CSS", value: 51 }, { name: "Unsplash", value: 60 }, { name: "Bootstrap", value: 83 }, { name: "Github", value: 110 }, { name: "Medium", value: 110 }, { name: "Marketinvoice", value: 121 }, { name: "Pinterest", value: 121 }, { name: "The Guardian", value: 150 }, { name: "Smashing Magazine", value: 200 }, { name: "Twitter", value: 202 }, { name: "Wikipedia", value: 210 }, { name: "Stripe", value: 214 }, { name: "Google", value: 220 }, { name: "Paypal", value: 222 }, { name: "Yahoo", value: 230 }, { name: "CSS-Tricks", value: 241 }, { name: "Facebook", value: 241 }, { name: "Etsy", value: 244 }, { name: "Apple", value: 270 }, { name: "Airbnb", value: 300 }, { name: "Slack", value: 311 }, { name: "Stack Overflow", value: 311 }, { name: "IMDB", value: 312 }, { name: "Youtube", value: 330 }, { name: "BBC", value: 350 }, { name: "Dribbble", value: 355 }, { name: "Dropbox", value: 510 }, { name: "UFC", value: 510 }, { name: "Kickstarter", value: 512 }]
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

ReactDOM.render(React.createElement(ProgressList, null), document.getElementById("component-specificity"));