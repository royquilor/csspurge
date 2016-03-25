var div1=d3.select(document.getElementById('div1'));
var div2=d3.select(document.getElementById('div2'));
var div3=d3.select(document.getElementById('div3'));
var div4=d3.select(document.getElementById('div4'));
var div5=d3.select(document.getElementById('div5'));
var div6=d3.select(document.getElementById('div6'));
var div7=d3.select(document.getElementById('div7'));
var div8=d3.select(document.getElementById('div8'));
var div9=d3.select(document.getElementById('div9'));
var div10=d3.select(document.getElementById('div10'));
var div11=d3.select(document.getElementById('div11'));
var div12=d3.select(document.getElementById('div12'));
var div13=d3.select(document.getElementById('div13'));
var div14=d3.select(document.getElementById('div14'));
var div15=d3.select(document.getElementById('div15'));
var div16=d3.select(document.getElementById('div16'));
var div17=d3.select(document.getElementById('div17'));
var div18=d3.select(document.getElementById('div18'));
var div19=d3.select(document.getElementById('div19'));
var div20=d3.select(document.getElementById('div20'));
var div21=d3.select(document.getElementById('div21'));
var div22=d3.select(document.getElementById('div22'));
var div23=d3.select(document.getElementById('div23'));
var div24=d3.select(document.getElementById('div24'));

start();

function onClick1() {
deselect();
div1.attr("class","selectedRadial");
}

function onClick2() {
deselect();
div2.attr("class","selectedRadial");
}

function onClick3() {
deselect();
div3.attr("class","selectedRadial");
}

function onClick4() {
deselect();
div4.attr("class","selectedRadial");
}

function onClick5() {
deselect();
div5.attr("class","selectedRadial");
}

function onClick6() {
deselect();
div6.attr("class","selectedRadial");
}

function onClick7() {
deselect();
div7.attr("class","selectedRadial");
}

function onClick8() {
deselect();
div8.attr("class","selectedRadial");
}

function onClick9() {
deselect();
div9.attr("class","selectedRadial");
}

function onClick10() {
deselect();
div10.attr("class","selectedRadial");
}

function onClick11() {
deselect();
div11.attr("class","selectedRadial");
}

function onClick12() {
deselect();
div12.attr("class","selectedRadial");
}

function onClick13() {
deselect();
div13.attr("class","selectedRadial");
}

function onClick14() {
deselect();
div14.attr("class","selectedRadial");
}

function onClick15() {
deselect();
div15.attr("class","selectedRadial");
}

function onClick16() {
deselect();
div16.attr("class","selectedRadial");
}

function onClick17() {
deselect();
div17.attr("class","selectedRadial");
}

function onClick18() {
deselect();
div18.attr("class","selectedRadial");
}

function onClick19() {
deselect();
div19.attr("class","selectedRadial");
}

function onClick20() {
deselect();
div20.attr("class","selectedRadial");
}

function onClick21() {
deselect();
div21.attr("class","selectedRadial");
}

function onClick22() {
deselect();
div22.attr("class","selectedRadial");
}

function onClick23() {
deselect();
div23.attr("class","selectedRadial");
}

function onClick24() {
deselect();
div24.attr("class","selectedRadial");
}

// function labelFunction(val,min,max) {
//
// }
//
// function deselect() {
//     div1.attr("class","radial");
//     div2.attr("class","radial");
//     div3.attr("class","radial");
// }

function start() {

var rp1 = radialProgress(document.getElementById('div1'))
    .label("Airbnb")
    .onClick(onClick1)
    .value(100)
    .render();

var rp2 = radialProgress(document.getElementById('div2'))
    .label("Apple")
    .onClick(onClick2)
    .value(100)
    .render();

var rp3 = radialProgress(document.getElementById('div3'))
    .label("BBC")
    .onClick(onClick3)
    .value(100)
    .render();

var rp4 = radialProgress(document.getElementById('div4'))
    .label("Bootstrap")
    .onClick(onClick4)
    .value(100)
    .render();

var rp5 = radialProgress(document.getElementById('div5'))
    .label("Dribbble")
    .onClick(onClick5)
    .value(100)
    .render();

var rp6 = radialProgress(document.getElementById('div6'))
    .label("Etsy")
    .onClick(onClick6)
    .value(0)
    .render();

var rp7 = radialProgress(document.getElementById('div7'))
    .label("Facebook")
    .onClick(onClick7)
    .value(25)
    .render();

var rp8 = radialProgress(document.getElementById('div8'))
    .label("Github")
    .onClick(onClick8)
    .value(50)
    .render();

var rp9 = radialProgress(document.getElementById('div9'))
    .label("Google")
    .onClick(onClick9)
    .value(50)
    .render();

var rp10 = radialProgress(document.getElementById('div10'))
    .label("Kickstarter")
    .onClick(onClick10)
    .value(100)
    .render();

var rp11 = radialProgress(document.getElementById('div11'))
    .label("Medium")
    .onClick(onClick11)
    .value(100)
    .render();

var rp12 = radialProgress(document.getElementById('div12'))
    .label("PayPal")
    .onClick(onClick12)
    .value(0)
    .render();

var rp13 = radialProgress(document.getElementById('div13'))
    .label("Pinterest")
    .onClick(onClick13)
    .value(100)
    .render();

var rp14 = radialProgress(document.getElementById('div14'))
    .label("Pure CSS")
    .onClick(onClick14)
    .value(100)
    .render();

var rp15 = radialProgress(document.getElementById('div15'))
    .label("Slack")
    .onClick(onClick15)
    .value(100)
    .render();

var rp16 = radialProgress(document.getElementById('div16'))
    .label("Stack Overflow")
    .onClick(onClick16)
    .value(0)
    .render();

var rp17 = radialProgress(document.getElementById('div17'))
    .label("Stripe")
    .onClick(onClick17)
    .value(25)
    .render();

var rp18 = radialProgress(document.getElementById('div18'))
    .label("The Guardian")
    .onClick(onClick18)
    .value(100)
    .render();

var rp19 = radialProgress(document.getElementById('div19'))
    .label("Tachyons")
    .onClick(onClick19)
    .value(100)
    .render();

var rp20 = radialProgress(document.getElementById('div20'))
    .label("Twitter")
    .onClick(onClick20)
    .value(25)
    .render();

var rp21 = radialProgress(document.getElementById('div21'))
    .label("UFC")
    .onClick(onClick21)
    .value(0)
    .render();

var rp22 = radialProgress(document.getElementById('div22'))
    .label("Yahoo")
    .onClick(onClick22)
    .value(25)
    .render();

var rp23 = radialProgress(document.getElementById('div23'))
    .label("Youtube")
    .onClick(onClick23)
    .value(100)
    .render();

var rp24 = radialProgress(document.getElementById('div24'))
    .label("Wikipedia")
    .onClick(onClick24)
    .value(100)
    .render();

}
