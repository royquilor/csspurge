"use strict";

var Progress = React.createClass({
  displayName: "Progress",


  render: function render() {
    return React.createElement(
      "section",
      { className: this.props.classname },
      React.createElement(
        "div",
        { className: "pv3 pv5-ns" },
        React.createElement(
          "h2",
          { className: "mb4" },
          React.createElement(
            "a",
            { href: this.props.link },
            this.props.name
          )
        ),
        React.createElement(
          "dl",
          { className: "dib w-30 w-20-ns" },
          React.createElement(
            "dt",
            { className: "f6 f5-ns b ml0" },
            "Floats"
          ),
          React.createElement(
            "dd",
            { className: "f3 f2-ns b ml0" },
            this.props.floats
          )
        ),
        React.createElement(
          "dl",
          { className: "dib w-30 w-20-ns" },
          React.createElement(
            "dt",
            { className: "f6 f5-ns b ml0" },
            "Unique Colors"
          ),
          React.createElement(
            "dd",
            { className: "f3 f2-ns b ml0" },
            this.props.uniquecolors
          )
        ),
        React.createElement(
          "dl",
          { className: "dib w-30 w-20-ns" },
          React.createElement(
            "dt",
            { className: "f6 f5-ns b ml0" },
            "Font Sizes"
          ),
          React.createElement(
            "dd",
            { className: "f3 f2-ns b ml0" },
            this.props.fontsizes
          )
        ),
        React.createElement(
          "dl",
          { className: "dib w-30 w-20-ns" },
          React.createElement(
            "dt",
            { className: "f6 f5-ns b ml0" },
            "Font Families"
          ),
          React.createElement(
            "dd",
            { className: "f3 f2-ns b ml0" },
            this.props.fontfamilies
          )
        ),
        React.createElement(
          "dl",
          { className: "dib w-30 w-20-ns" },
          React.createElement(
            "dt",
            { className: "f6 f5-ns b ml0" },
            "Specificity"
          ),
          React.createElement(
            "dd",
            { className: "f3 f2-ns b ml0" },
            this.props.specificity
          )
        ),
        React.createElement(
          "dl",
          { className: "dib w-30 w-20-ns" },
          React.createElement(
            "dt",
            { className: "f6 f5-ns b ml0" },
            "Media Queries"
          ),
          React.createElement(
            "dd",
            { className: "f3 f2-ns b ml0" },
            this.props.mediaqueries
          )
        ),
        React.createElement(
          "dl",
          { className: "dib w-30 w-20-ns" },
          React.createElement(
            "dt",
            { className: "f6 f5-ns b ml0" },
            "Style Tags"
          ),
          React.createElement(
            "dd",
            { className: "f3 f2-ns b ml0" },
            this.props.styletags
          )
        ),
        React.createElement(
          "dl",
          { className: "dib w-30 w-20-ns" },
          React.createElement(
            "dt",
            { className: "f6 f5-ns b ml0" },
            "Style Links"
          ),
          React.createElement(
            "dd",
            { className: "f3 f2-ns b ml0" },
            this.props.stylelinks
          )
        ),
        React.createElement(
          "dl",
          { className: "dib w-30 w-20-ns" },
          React.createElement(
            "dt",
            { className: "f6 f5-ns b ml0" },
            "File Size kb"
          ),
          React.createElement(
            "dd",
            { className: "f3 f2-ns b ml0" },
            this.props.filesizekb
          )
        )
      )
    );
  }
});

// CSSStats links
var airbnbStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fwww.airbnb.com",
    appleStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fapple.com&name=Apple",
    basscssStats = "http://www.cssstats.com/stats?link=http%3A%2F%2Fd2v52k3cl9vedd.cloudfront.net%2Fbasscss%2F4.1.4%2Fbasscss.min.css&name=Basscss",
    bbcStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fwww.bbc.co.uk",
    bootstrapStats = "http://www.cssstats.com/stats?link=http%3A%2F%2Fmaxcdn.bootstrapcdn.com%2Fbootstrap%2F3.3.1%2Fcss%2Fbootstrap.min.css&name=Bootstrap",
    csstricksStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fcss-tricks.com",
    dribbbleStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fwww.dribbble.com",
    dropboxStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fdropbox.com",
    etsyStats = "http://cssstats.com/stats?url=http%3A%2F%2Fetsy.com&name=Etsy",
    facebookStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Ffacebook.com&name=Facebook",
    githubStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fgithub.com&name=GitHub",
    googleStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fgoogle.com&name=Google",
    imdbStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fimdb.com",
    kickstarterStats = "http://cssstats.com/stats?url=http%3A%2F%2Fkickstarter.com&name=Kickstarter",
    mediumStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fmedium.com&name=Medium",
    paypalStats = "http://cssstats.com/stats?url=http%3A%2F%2Fpaypal.com&name=PayPal",
    pinterestStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fpinterest.com&name=Pinterest",
    purecssStats = "http://www.cssstats.com/stats?link=http%3A%2F%2Fyui.yahooapis.com%2Fpure%2F0.5.0%2Fpure-min.css&name=Pure%20CSS",
    slackStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fwww.slack.com",
    smashingmagazineStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fsmashingmagazine.com",
    stackoverflowStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fstackoverflow.com&name=Stack%20Overflow",
    stripeStats = "http://cssstats.com/stats?url=http%3A%2F%2Fstripe.com&name=Stripe",
    tachyonsStats = "http://www.cssstats.com/stats?link=http%3A%2F%2Ftachyons.io%2Fcss%2Ftachyons.min.css&name=Tachyons",
    theguardianStats = "http://cssstats.com/stats?url=http%3A%2F%2Ftheguardian.com&name=The%20Guardian",
    twitterStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Ftwitter.com&name=Twitter",
    ufcStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fufc.com",
    unsplashStats = "http://www.cssstats.com/stats?link=http%3A%2F%2Fmaxcdn.bootstrapcdn.com%2Fbootstrap%2F3.3.1%2Fcss%2Fbootstrap.min.css&name=Bootstrap",
    wikipediaStats = "http://cssstats.com/stats?url=http%3A%2F%2Fwww.wikipedia.org&name=Wikipedia",
    yahooStats = "http://cssstats.com/stats?url=http%3A%2F%2Fyahoo.com&name=Yahoo",
    youtubeStats = "http://cssstats.com/stats?url=http%3A%2F%2Fyoutube.com&name=YouTube",
    iminStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fwww.imin.co&ua=Browser%20Default",
    futuriceStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Ffuturice.com&ua=Browser%20Default",
    skyscannerStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fwww.skyscanner.net&ua=Browser%20Default",
    zooplaStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fwww.zoopla.co.uk&ua=Browser%20Default",
    marvelappStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fmarvelapp.com&ua=Browser%20Default",
    rightmoveStats = "http://cssstats.com/stats?url=http%3A%2F%2Fwww.rightmove.co.uk&ua=Browser%20Default";

// Totalscores
// 79
// var basscssScore = floats + colors + fontsizes + fontfamilies + specificity + mediaqueries + styletags + stylelinks + filesize;

var ProgressList = React.createClass({
  displayName: "ProgressList",

  getInitialState: function getInitialState() {
    return {
      productList: [{ classname: "basscss black", name: "Basscss", floats: 10, uniquecolors: 10, fontsizes: 8, fontfamilies: 3, specificity: 30, mediaqueries: 3, styletags: 0, stylelinks: 1, filesizekb: 14, link: basscssStats }, { classname: "purecss black", name: "Pure CSS", floats: 1, uniquecolors: 13, fontsizes: 14, fontfamilies: 7, specificity: 51, mediaqueries: 2, styletags: 0, stylelinks: 1, filesizekb: 18, link: purecssStats }, { classname: "tachyons black", name: "Tachyons", floats: 12, uniquecolors: 31, fontsizes: 13, fontfamilies: 12, specificity: 30, mediaqueries: 3, styletags: 0, stylelinks: 1, filesizekb: 40, totalscore: 142, link: tachyonsStats }, { classname: "unsplash black", name: "Unsplash", floats: 63, uniquecolors: 23, fontsizes: 29, fontfamilies: 7, specificity: 60, mediaqueries: 9, styletags: 0, stylelinks: 1, filesizekb: 114, link: unsplashStats }, { classname: "wikipedia black", name: "Wikipedia", floats: 4, uniquecolors: 20, fontsizes: 21, fontfamilies: 3, specificity: 210, mediaqueries: 13, styletags: 3, stylelinks: 0, filesizekb: 32, link: wikipediaStats }, { classname: "bootstrap black", name: "Bootstrap", floats: 38, uniquecolors: 36, fontsizes: 23, fontfamilies: 7, specificity: 83, mediaqueries: 12, styletags: 0, stylelinks: 1, filesizekb: 111, link: bootstrapStats }, { classname: "stripe", name: "Stripe", floats: 3, uniquecolors: 28, fontsizes: 22, fontfamilies: 4, specificity: 214, mediaqueries: 4, styletags: 0, stylelinks: 3, filesizekb: 70, link: stripeStats }, { classname: "google", name: "Google", floats: 12, uniquecolors: 32, fontsizes: 19, fontfamilies: 5, specificity: 220, mediaqueries: 4, styletags: 8, stylelinks: 0, filesizekb: 65, link: googleStats }, { classname: "smashingmagazine", name: "Smashing Magazine", floats: 40, uniquecolors: 46, fontsizes: 26, fontfamilies: 10, specificity: 200, mediaqueries: 10, styletags: 2, stylelinks: 2, filesizekb: 56, link: smashingmagazineStats }, { classname: "marvelapp", name: "Marvel", floats: 13, uniquecolors: 63, fontsizes: 28, fontfamilies: 8, specificity: 121, mediaqueries: 15, styletags: 1, stylelinks: 2, filesizekb: 288, link: marvelappStats }, { classname: "csstricks black", name: "CSS-Tricks", floats: 57, uniquecolors: 52, fontsizes: 49, fontfamilies: 5, specificity: 241, mediaqueries: 6, styletags: 1, stylelinks: 2, filesizekb: 173, link: csstricksStats }, { classname: "paypal", name: "PayPal", floats: 38, uniquecolors: 41, fontsizes: 69, fontfamilies: 29, specificity: 222, mediaqueries: 21, styletags: 1, stylelinks: 1, filesizekb: 244, link: paypalStats }, { classname: "skyscanner black", name: "Skyscanner", floats: 100, uniquecolors: 32, fontsizes: 38, fontfamilies: 10, specificity: 322, mediaqueries: 25, styletags: 1, stylelinks: 6, filesizekb: 180, link: skyscannerStats }, { classname: "slack", name: "Slack", floats: 31, uniquecolors: 90, fontsizes: 59, fontfamilies: 7, specificity: 311, mediaqueries: 40, styletags: 0, stylelinks: 4, filesizekb: 188, link: slackStats }, { classname: "imdb", name: "IMDB", floats: 124, uniquecolors: 79, fontsizes: 49, fontfamilies: 18, specificity: 312, mediaqueries: 2, styletags: 0, stylelinks: 7, filesizekb: 170, link: imdbStats }, { classname: "apple black", name: "Apple", floats: 38, uniquecolors: 16, fontsizes: 32, fontfamilies: 31, specificity: 270, mediaqueries: 44, styletags: 0, stylelinks: 5, filesizekb: 362, link: appleStats }, { classname: "facebook", name: "Facebook", floats: 69, uniquecolors: 53, fontsizes: 27, fontfamilies: 24, specificity: 241, mediaqueries: 4, styletags: 1, stylelinks: 7, filesizekb: 389, link: facebookStats }, { classname: "yahoo", name: "Yahoo", floats: 28, uniquecolors: 140, fontsizes: 72, fontfamilies: 12, specificity: 230, mediaqueries: 20, styletags: 7, stylelinks: 2, filesizekb: 312, totalscore: 823, link: yahooStats }, { classname: "airbnb", name: "Airbnb", floats: 84, uniquecolors: 43, fontsizes: 50, fontfamilies: 11, specificity: 300, mediaqueries: 17, styletags: 0, stylelinks: 2, filesizekb: 356, link: airbnbStats }, { classname: "dropbox", name: "Dropbox", floats: 37, uniquecolors: 26, fontsizes: 21, fontfamilies: 4, specificity: 510, mediaqueries: 9, styletags: 2, stylelinks: 17, filesizekb: 272, link: dropboxStats }, { classname: "bbc black", name: "BBC", floats: 58, uniquecolors: 54, fontsizes: 60, fontfamilies: 18, specificity: 350, mediaqueries: 74, styletags: 1, stylelinks: 6, filesizekb: 288, link: bbcStats }, { classname: "rightmove", name: "Rightmove", floats: 134, uniquecolors: 48, fontsizes: 73, fontfamilies: 11, specificity: 510, mediaqueries: 6, styletags: 0, stylelinks: 2, filesizekb: 166, link: rightmoveStats }, { classname: "zoopla", name: "Zoopla", floats: 227, uniquecolors: 81, fontsizes: 63, fontfamilies: 15, specificity: 300, mediaqueries: 4, styletags: 1, stylelinks: 3, filesizekb: 271, link: zooplaStats }, { classname: "ufc black", name: "UFC", floats: 141, uniquecolors: 53, fontsizes: 37, fontfamilies: 4, specificity: 510, mediaqueries: 2, styletags: 0, stylelinks: 7, filesizekb: 217, link: ufcStats }, { classname: "medium", name: "Medium", floats: 69, uniquecolors: 51, fontsizes: 57, fontfamilies: 10, specificity: 110, mediaqueries: 35, styletags: 0, stylelinks: 2, filesizekb: 674, link: mediumStats }, { classname: "youtube", name: "Youtube", floats: 210, uniquecolors: 49, fontsizes: 30, fontfamilies: 4, specificity: 440, mediaqueries: 24, styletags: 1, stylelinks: 4, filesizekb: 441, link: youtubeStats }, { classname: "etsy", name: "Etsy", floats: 232, uniquecolors: 91, fontsizes: 54, fontfamilies: 18, specificity: 244, mediaqueries: 50, styletags: 1, stylelinks: 5, filesizekb: 507, link: etsyStats }, { classname: "dribbble", name: "Dribbble", floats: 313, uniquecolors: 51, fontsizes: 41, fontfamilies: 5, specificity: 355, mediaqueries: 49, styletags: 0, stylelinks: 5, filesizekb: 385, link: dribbbleStats }, { classname: "twitter", name: "Twitter", floats: 280, uniquecolors: 78, fontsizes: 49, fontfamilies: 14, specificity: 202, mediaqueries: 29, styletags: 0, stylelinks: 3, filesizekb: 623, link: twitterStats }, { classname: "github", name: "Github", floats: 399, uniquecolors: 151, fontsizes: 63, fontfamilies: 17, specificity: 110, mediaqueries: 12, styletags: 0, stylelinks: 4, filesizekb: 534, link: githubStats }, { classname: "theguardian black", name: "The Guardian", floats: 307, uniquecolors: 69, fontsizes: 38, fontfamilies: 16, specificity: 150, mediaqueries: 36, styletags: 8, stylelinks: 3, filesizekb: 697, link: theguardianStats }, { classname: "stackoverflow", name: "Stack Overflow", floats: 216, uniquecolors: 176, fontsizes: 40, fontfamilies: 9, specificity: 311, mediaqueries: 4, styletags: 0, stylelinks: 1, filesizekb: 600, link: stackoverflowStats }, { classname: "pinterest", name: "Pinterest", floats: 448, uniquecolors: 127, fontsizes: 76, fontfamilies: 16, specificity: 121, mediaqueries: 33, styletags: 1, stylelinks: 5, filesizekb: 1180, link: pinterestStats }, { classname: "kickstarter", name: "Kickstarter", floats: 462, uniquecolors: 87, fontsizes: 89, fontfamilies: 23, specificity: 512, mediaqueries: 51, styletags: 0, stylelinks: 1, filesizekb: 991, link: kickstarterStats }]
    };
  },

  render: function render() {
    var products = this.state.productList.map(function (product) {
      return React.createElement(Progress, { classname: product.classname, name: product.name, casestudy: product.casestudy, floats: product.floats, uniquecolors: product.uniquecolors, fontsizes: product.fontsizes, fontfamilies: product.fontfamilies, specificity: product.specificity, mediaqueries: product.mediaqueries, styletags: product.styletags, stylelinks: product.stylelinks, filesizekb: product.filesizekb, link: product.link });
    });

    return React.createElement(
      "div",
      { className: "ph3 ph5-ns" },
      React.createElement(
        "h2",
        { className: "mv5" },
        "Css Stats"
      ),
      products
    );
  }
});

ReactDOM.render(React.createElement(ProgressList, null), document.getElementById("component-league"));