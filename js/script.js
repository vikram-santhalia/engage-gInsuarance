var data1 = [
[1354586000000, 153], [1364587000000, 258], [1374588000000, 198],
[1384589000000, 263], [1394590000000, 201], [1404591000000, 148],
[1414592000000, 153], [1424593000000, 249], [1434594000000, 223],
[1444595000000, 258], [1454596000000, 188], [1464597000000, 164],
[1479597000000, 248], [1484997000000, 208], [1499597000000, 214]
];

 var dataDN = [
    { label: "Donated", data: 10.34, color: '#2ed069' },
    { label: "Goal", data: 89.66, color: '#8E9496' }
];


var dataM1 = [
[1409516926966, 113], [1409603326966, 125], [1409689726966, 127],
[1409776126966, 132], [1409862526966, 139], [1409948926966, 144],
[1410035718739, 153]];
var dataM2 = [
[1409516926966, 83], [1409603326966, 95], [1409689726966, 98],
[1409776126966, 105], [1409862526966, 115], [1409948926966, 122],
[1410035718739, 129]];
var dataM3 = [
[1409516926966, 65], [1409603326966, 69], [1409689726966, 73],
[1409776126966, 76], [1409862526966, 79], [1409948926966, 86],
[1410035718739, 91]];
var dataM4 = [
[1409516926966, 41], [1409603326966, 47], [1409689726966, 52],
[1409776126966, 57], [1409862526966, 62], [1409948926966, 66],
[1410035718739, 73]];

var dataF = [
[1354586000000, 253], [1364587000000, 358], [1374588000000, 138],
[1384589000000, 163], [1394590000000, 131], [1404591000000, 278],
[1414592000000, 143], [1424593000000, 179], [1434594000000, 123],
[1444595000000, 159], [1454596000000, 288], [1464597000000, 364],
[1479597000000, 359], [1484997000000, 308], [1499597000000, 214]
];

var dataT = [
[1354586000000, 53], [1364587000000, 148], [1374588000000, 128],
[1384589000000, 163], [1394590000000, 221], [1404591000000, 248],
[1414592000000, 153], [1424593000000, 149], [1434594000000, 223],
[1444595000000, 208], [1454596000000, 88], [1464597000000, 174],
[1479597000000, 118], [1484997000000, 208], [1499597000000, 114]
];

var data2 = [
{ label: "Sent",  data: 3500, color: '#eec14e'},
{ label: "Opened",  data: 2500, color: '#99d25d'},
{ label: "Saved",  data: 1000, color: '#c4a5e0'},
{ label: "Clicked",  data: 3800, color: '#f08da9'}
];

var data3 = [
{label: 'Delivered',color: '#3baeed', data: [[1,726], [2,890], [3,752], [4,900], [5,865],[6,720], [7,859]]},
{label: 'Career',color: '#847cc5', data: [[1,110], [2,90], [3,87], [4,101], [5,121],[6,99],[7,105]]},
{label: 'Bounced',color: '#abe3bc', data: [[1,151], [2,202], [3,173], [4,159], [5,162],[6,170],[7,153]]},
];


function drawAreaChart() { 
  setStyle(890,220);   
  var options = {
    series:{
      lines: {                         
        fill: true, show:true,
        fillColor: { colors: [{ opacity: 0.2 }, { opacity: 0.8}] }
      },
      clickable: true,
      hoverable: true,
      shadowSize: 4,
      highlightColor: "#27b5eb",
      color: '#27b5eb',
      points: { show: true, fill: true}
    },
    xaxis: {
      mode: "time",
      show: true,
      position: "bottom",
      tickColor: "#fafafa"
    },
    yaxis: {
      show: true,
      position: "left",
      tickColor: "#fafafa",
      position: "left",
      color: "black"
    },
    grid: {
      hoverable: true,
      borderColor: "#d1d1d1",
      backgroundColor: { colors: ["#ffffff", "#ffffff"] },
      borderWidth: 1,
      aboveData: false,
      markings: [ { xaxis: { from: 0, to: 10 }, yaxis: { from: 0, to: 0 }, color: "#000000" },
      { xaxis: { from: 0, to: 0 }, yaxis: { from: 0, to: 15 }, color: "#000000" }]

    }

  };

  var plot = $.plot($("#flotcontainer"), [data1], options);  
}

function drawPieChart() {
  setStyle(890,220);   
  $.plot($("#flotcontainer"), data2, 
  {
    series: {
      pie: { 
        show: true,
        innerRadius: 0.5,
        gradient: {
          radial: true,
          colors: [
          {opacity: 0.5},
          {opacity: 1.0}
          ]
        },
        radius: 1,
        hoverable: true,
        label: {
          show: true,
          radius: 3/4,
          formatter: function(label, series){
            return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'+series.data[0][1]+'</div>';
          },
          background: { opacity: 0.5 }
        }
      }
    },
    legend: { show: true, container: $("#chartLegendPie") }
  });
}

function drawStackChart() {
    setStyle(400,220);   
    var options = {
        series: {stack: 0,
                 lines: {show: false, steps: false },
                 bars: {show: true, barWidth: 0.5, align: 'center',fill:1},},
        xaxis: {ticks: [[1,'Mon'], [2,'Tue'], [3,'Wed'], [4,'Thu'], [5,'Fri'],[6,'Sat'],[7,'Sun']]},
        xaxis: {
                tickLength: 0
            },
        grid: {
          hoverable: true,
          borderColor: "#dfdfdf",
          backgroundColor: { colors: ["#ffffff", "#ffffff"] },
          borderWidth: 1,
          aboveData: false,
          },
        legend: { show: true, container: $("#chartLegend") }
    };

    $.plot($("#flotcontainer"), data3, options);
}

function setStyle(x,y){
  var xx = x;
  var yy = y;
  $("#flotcontainer").height(yy).width(xx);
  $("#flotcontainer").css( {
    height:  yy+"px",
    width: xx+"px", 
    marginLeft : (-xx/2)+"px", 
    marginTop : (-yy/2)+"px"
    
  });
}

function drawFbAreaChart() { 
  setStyle(890,220);   
  var options = {
    series:{
      lines: {                         
        fill: true, show:true,
        fillColor: { colors: [{ opacity: 0.2 }, { opacity: 0.8}] }
      },
      clickable: true,
      hoverable: true,
      shadowSize: 4,
      highlightColor: "#f89406",
      color: '#f89406',
      points: { show: true, fill: true}
    },
    xaxis: {
      mode: "time",
      show: true,
      position: "bottom",
      tickColor: "#fafafa"
    },
    yaxis: {
      show: true,
      position: "left",
      tickColor: "#fafafa",
      position: "left",
      color: "black"
    },
    grid: {
      hoverable: true,
      borderColor: "#d1d1d1",
      backgroundColor: { colors: ["#ffffff", "#ffffff"] },
      borderWidth: 1,
      aboveData: false,
      markings: [ { xaxis: { from: 0, to: 10 }, yaxis: { from: 0, to: 0 }, color: "#000000" },
      { xaxis: { from: 0, to: 0 }, yaxis: { from: 0, to: 15 }, color: "#000000" }]

    }

  };

  var plot = $.plot($("#flotcontainer"), [dataF], options);  
}

function drawTwAreaChart() { 
  setStyle(890,220);   
  var options = {
    series:{
      lines: {                         
        fill: true, show:true,
        fillColor: { colors: [{ opacity: 0.2 }, { opacity: 0.8}] }
      },
      clickable: true,
      hoverable: true,
      shadowSize: 4,
      highlightColor: "#21ddcc",
      color: '#21ddcc',
      points: { show: true, fill: true}
    },
    xaxis: {
      mode: "time",
      show: true,
      position: "bottom",
      tickColor: "#fafafa"
    },
    yaxis: {
      show: true,
      position: "left",
      tickColor: "#fafafa",
      position: "left",
      color: "black"
    },
    grid: {
      hoverable: true,
      borderColor: "#d1d1d1",
      backgroundColor: { colors: ["#ffffff", "#ffffff"] },
      borderWidth: 1,
      aboveData: false,
      markings: [ { xaxis: { from: 0, to: 10 }, yaxis: { from: 0, to: 0 }, color: "#000000" },
      { xaxis: { from: 0, to: 0 }, yaxis: { from: 0, to: 15 }, color: "#000000" }]

    }

  };

  var plot = $.plot($("#flotcontainer"), [dataT], options);  
}


$( document ).ready(function() {
      setStyle(890,220);
});

$(document).on("click","#areachart", function() {
  animationClick("#flotcontainer", "animated fadeIn");
  $("#chartLegend").css( { display: 'none' });
  $("#chartLegendPie").css( { display: 'none' });
  $("#padHeightArea").css( { display: 'block' });
  $("#padWidthArea").css( { display: 'block' });
  $("#padHeightStack").css( { display: 'none' });
  $("#padWidthStack").css( { display: 'none' });
  drawAreaChart("display");
});

$(document).on("click","#areachartFb", function() {
  animationClick("#flotcontainer", "animated fadeIn");
  $("#chartLegend").css( { display: 'none' });
  $("#chartLegendPie").css( { display: 'none' });
  $("#padHeightArea").css( { display: 'block' });
  $("#padWidthArea").css( { display: 'block' });
  $("#padHeightStack").css( { display: 'none' });
  $("#padWidthStack").css( { display: 'none' });
  drawFbAreaChart("facebook");
});

$(document).on("click","#areachartTw", function() {
  animationClick("#flotcontainer", "animated fadeIn");
  $("#chartLegend").css( { display: 'none' });
  $("#chartLegendPie").css( { display: 'none' });
  $("#padHeightArea").css( { display: 'block' });
  $("#padWidthArea").css( { display: 'block' });
  $("#padHeightStack").css( { display: 'none' });
  $("#padWidthStack").css( { display: 'none' });
  drawTwAreaChart("twitter");
});

$(document).on("click","#piechart", function() {
  animationClick("#flotcontainer", "animated fadeIn");
  $("#chartLegendPie").css( { display: 'block' });
  $("#chartLegend").css( { display: 'none' });
  $("#padHeightArea").css( { display: 'none' });
  $("#padWidthArea").css( { display: 'none' });
  $("#padHeightStack").css( { display: 'none' });
  $("#padWidthStack").css( { display: 'none' });
  drawPieChart();
});

$(document).on("click","#stackchart", function() {
  animationClick("#flotcontainer", "animated fadeIn");
  $("#chartLegend").css( { display: 'block' });
  $("#chartLegendPie").css( { display: 'none' });
  $("#padHeightArea").css( { display: 'none' });
  $("#padWidthArea").css( { display: 'none' });
  $("#padHeightStack").css( { display: 'block' });
  $("#padWidthStack").css( { display: 'block' });
  drawStackChart();
});


  setTimeout( function(){
      setStyle(890,220);
      $("#chartLegend").css( { display: 'none' });
      $("#chartLegendPie").css( { display: 'none' });
      $("#padHeightArea").css( { display: 'block' });
      $("#padWidthArea").css( { display: 'block' });
      $("#padHeightStack").css( { display: 'none' });
      $("#padWidthStack").css( { display: 'none' });
      drawDonutChart()
      drawAreaChart();
      drawMultiLineChart();

  }, 500 );




function animationHover(element, animation){
  element = $(element);
  element.hover(
    function() {
      element.addClass('animated ' + animation);
    },
    function(){
      window.setTimeout( function(){
        element.removeClass('animated ' + animation);
      }, 2000);
    }
  );
};


function animationClick(element, animation){
  element = $(element);
      element.addClass('animated ' + animation);
      window.setTimeout( function(){
          element.removeClass('animated ' + animation);
      }, 2000);
};


function drawMultiLineChart() { 

  var dataM = [
    {
      data: dataM1,
      lines: {                         
          fill: false, show:true
      },
      clickable: true,
      hoverable: true,
      shadowSize: 4,
      highlightColor: "#2574a9",
      color: '#2574a9',
      points: { show: true, fill: true, fillColor: '#669EC3'}
    },
    {
      data: dataM2,
      lines: {                         
          fill: false, show:true
      },
      clickable: true,
      hoverable: true,
      shadowSize: 4,
      highlightColor: "#239d58",
      color: '#239d58',
      points: { show: true, fill: true, fillColor: '#65BA8A'}
    },
    {
      data: dataM3,
      lines: {                         
          fill: false, show:true
      },
      clickable: true,
      hoverable: true,
      shadowSize: 4,
      highlightColor: "#70757b",
      color: '#70757b',
      points: { show: true, fill: true, fillColor: '#9B9EA3'}
    },
    {
      data: dataM4,
      lines: {                         
          fill: false, show:true
      },
      clickable: true,
      hoverable: true,
      shadowSize: 4,
      highlightColor: "#b9493e",
      color: '#b9493e',
      points: { show: true, fill: true, fillColor: '#CE8078'}
    }
  ];

  var options = {
    xaxis: {
      mode: "time",
      timeformat: "%b\n%d",
      minTickSize: [1, "day"],
      timezone: "browser",
      show: true,
      position: "bottom",
      tickColor: "#fafafa"
    },
    yaxis: {
      show: true,
      position: "left",
      tickColor: "#fafafa",
      position: "left",
      color: "black"
    },
    grid: {
      hoverable: true,
      borderColor: "#d1d1d1",
      backgroundColor: { colors: ["#ffffff", "#ffffff"] },
      borderWidth: 1,
      aboveData: false
     /* markings: [ { xaxis: { from: 0, to: 10 }, yaxis: { from: 0, to: 0 }, color: "#000000" },
      { xaxis: { from: 0, to: 0 }, yaxis: { from: 0, to: 15 }, color: "#000000" }]*/

    }

  };


  var plot = $.plot($("#multiLineChart"), dataM, options);  
}


function drawDonutChart() {
    var options = {
         series: {
            pie: {
                innerRadius: 0.7,
                show: true,
                label: { show: false },
                gradient: {
                  radial: true,
                  colors: [
                    {opacity: 0.5},
                    {opacity: 1.0}
                  ]
                }
            }
        },
        legend: { show: false }
    };

    $.plot($("#donut"), dataDN, options);
    /*$("#donutData").text(Math.round(dataDN[0].data/dataDN[1].data*100)+"%");*/
}
