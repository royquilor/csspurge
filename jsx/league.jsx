var League = React.createClass({
  render: function() {
    return (
	<tr>
<td className="lp">{this.props.position}</td>
<td className="tl">{this.props.name}</td>
<td className="lf">{this.props.floats}</td>
<td className="lc">{this.props.colors}</td>
<td className="lfs">{this.props.fontsizes}</td>
<td className="lff">{this.props.fontfamilies}</td>
<td className="lsp">{this.props.specificity}</td>
<td className="lmq">{this.props.mediaqueries}</td>
<td className="lst">{this.props.styletags}</td>
<td className="lsl">{this.props.stylelinks}</td>
<td className="lfskb">{this.props.filesize}</td>
<td className="lts">{this.props.score}</td>
<td>
<a href={this.props.href}>
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13.636" viewBox="80 96 15 13.636" enable-background="new 80 96 15 13.636">
                      <title>CSS stats</title>
                      <path d="M80 106.909h2.727v2.727h-2.727zM84.091 104.182h2.728v5.455h-2.728zM88.182 100.091h2.728v9.545h-2.728zM92.273 96h2.727v13.636h-2.727z"/>
                  </svg>

</a>
</td>
</tr>
    );
  }
});

var LeagueList = React.createClass({
  render: function() {
    return (
<tbody>
<League position="1" name="Basscss" floats="10" colors="10" fontsizes="8" fontfamilies="3" specificity="30" mediaqueries="3" styletags="0" stylelinks="1" filesize="14" score="0" href="http://www.cssstats.com/stats?link=http%3A%2F%2Fd2v52k3cl9vedd.cloudfront.net%2Fbasscss%2F4.1.4%2Fbasscss.min.css&name=Basscss"/>
<League position="2" name="Pure CSS" floats="1" colors="13" fontsizes="14" fontfamilies="7" specificity="51" mediaqueries="2" styletags="0" stylelinks="1" filesize="18"/>
<League position="3" name="Tachyons" floats="12" colors="31" fontsizes="13" fontfamilies="12" specificity="30" mediaqueries="3" styletags="0" stylelinks="1" filesize="40"/>
<League position="4" name="Unsplash" floats="63" colors="23" fontsizes="29" fontfamilies="7" specificity="60" mediaqueries="9" styletags="0" stylelinks="1" filesize="114"/>
</tbody>   
 );
  }
});

ReactDOM.render(<LeagueList/>, document.getElementById("league"));
