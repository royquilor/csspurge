"use strict";

var League = React.createClass({
  displayName: "League",

  render: function render() {
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        { className: "lp" },
        this.props.position
      ),
      React.createElement(
        "td",
        { className: "tl" },
        this.props.name
      ),
      React.createElement(
        "td",
        { className: "lf" },
        this.props.floats
      ),
      React.createElement(
        "td",
        { className: "lc" },
        this.props.colors
      ),
      React.createElement(
        "td",
        { className: "lfs" },
        this.props.fontsizes
      ),
      React.createElement(
        "td",
        { className: "lff" },
        this.props.fontfamilies
      ),
      React.createElement(
        "td",
        { className: "lsp" },
        this.props.specificity
      ),
      React.createElement(
        "td",
        { className: "lmq" },
        this.props.mediaqueries
      ),
      React.createElement(
        "td",
        { className: "lst" },
        this.props.styletags
      ),
      React.createElement(
        "td",
        { className: "lsl" },
        this.props.stylelinks
      ),
      React.createElement(
        "td",
        { className: "lfskb" },
        this.props.filesize
      ),
      React.createElement(
        "td",
        { className: "lts" },
        this.props.score
      ),
      React.createElement(
        "td",
        null,
        React.createElement(
          "a",
          { href: this.props.href },
          React.createElement(
            "svg",
            { xmlns: "http://www.w3.org/2000/svg", width: "15", height: "13.636", viewBox: "80 96 15 13.636", "enable-background": "new 80 96 15 13.636" },
            React.createElement(
              "title",
              null,
              "CSS stats"
            ),
            React.createElement("path", { d: "M80 106.909h2.727v2.727h-2.727zM84.091 104.182h2.728v5.455h-2.728zM88.182 100.091h2.728v9.545h-2.728zM92.273 96h2.727v13.636h-2.727z" })
          )
        )
      )
    );
  }
});

var LeagueList = React.createClass({
  displayName: "LeagueList",

  render: function render() {
    return React.createElement(
      "tbody",
      null,
      React.createElement(League, { position: "1", name: "Basscss", floats: "10", colors: "10", fontsizes: "8", fontfamilies: "3", specificity: "30", mediaqueries: "3", styletags: "0", stylelinks: "1", filesize: "14", score: "0", href: basscssStats }),
      React.createElement(League, { position: "2", name: "Pure CSS", floats: "1", colors: "13", fontsizes: "14", fontfamilies: "7", specificity: "51", mediaqueries: "2", styletags: "0", stylelinks: "1", filesize: "18" }),
      React.createElement(League, { position: "3", name: "Tachyons", floats: "12", colors: "31", fontsizes: "13", fontfamilies: "12", specificity: "30", mediaqueries: "3", styletags: "0", stylelinks: "1", filesize: "40" }),
      React.createElement(League, { position: "4", name: "Unsplash", floats: "63", colors: "23", fontsizes: "29", fontfamilies: "7", specificity: "60", mediaqueries: "9", styletags: "0", stylelinks: "1", filesize: "114" })
    );
  }
});

ReactDOM.render(React.createElement(LeagueList, null), document.getElementById("league"));