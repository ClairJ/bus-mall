'use strict';
BusMall.clicks = 0;
BusMall.allPics = [];
BusMall.lastDisplayed = [];
BusMall.section = document.getElementById('pics');

BusMall.resultsList = document.getElementById('results');
function BusMall(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.timesDisplayed = 0;
  this.votes = 0;

  BusMall.allPics.push(this);
}

var votes = [];
var names = [];

new BusMall('bag','img/bag.jpg');
new BusMall('banana', 'img/banana.jpg');
new BusMall('bathroom','img/bathroom.jpg');
new BusMall('boots', 'img/boots.jpg');
new BusMall('breakfast', 'img/breakfast.jpg');
new BusMall('bubblegum', 'img/bubblegum.jpg');
new BusMall('chair', 'img/chair.jpg');
new BusMall('cthulhu', 'img/cthulhu.jpg');
new BusMall('dog-duck','img/dog-duck.jpg');
new BusMall('dragon', 'img/dragon.jpg');
new BusMall('pen', 'img/pen.jpg');
new BusMall('pet-sweep', 'img/pet-sweep.jpg');
new BusMall('scissors', 'img/scissors.jpg');
new BusMall('shark', 'img/shark.jpg');
new BusMall('sweep', 'img/sweep.png');
new BusMall('tauntaun', 'img/tauntaun.jpg');
new BusMall('unicorn', 'img/unicorn.jpg');
new BusMall('usb', 'img/usb.gif');
new BusMall('water-can', 'img/water-can.jpg');
new BusMall('wine-glass', 'img/wine-glass.jpg');


var imgEl = document.getElementById('pic1');
var imgEl2 = document.getElementById('pic2');
var imgEl3 = document.getElementById('pic3');


function updateChart() {
  for (var i = 0; i < BusMall.allPics.length; i++) {
    names[i] = BusMall.allPics[i].name;
    votes[i] = BusMall.allPics[i].votes;
  }
}

var data = {
  labels: names,
  datasets: [
    {
      data: votes,
      backgroundColor: '#48A497',
    }
  ]
};
var dataAdd = {
  labels: names,
  data: votes,
};
function drawChart() {
  var ctx = document.getElementById('votesshown').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      legend: {
        display: false,
        labels: {
          fontColor: 'green',
          fontSize: 10
        }
      },
      responsive: false,
    },
    scales: {
      yAxes: [{
        ticks: {
          stepSize: 1
        }
      }]
    }
  });
}
function randomProduct() {
  var value1 = Math.floor(Math.random() * BusMall.allPics.length);
  var value2 = Math.floor(Math.random() * BusMall.allPics.length);
  var value3 = Math.floor(Math.random() * BusMall.allPics.length);

  imgEl.src = BusMall.allPics[value1].filepath;
  imgEl.id = BusMall.allPics[value1].name;

  while (value1 === value2 || value1 === value3 || value2 === value3) {
    console.log('Prevented duplicates');
    value1 = Math.floor(Math.random() * BusMall.allPics.length);
    value2 = Math.floor(Math.random() * BusMall.allPics.length);
    value3 = Math.floor(Math.random() * BusMall.allPics.length);
  }
  imgEl2.src = BusMall.allPics[value2].filepath;
  imgEl2.id = BusMall.allPics[value2].name;

  imgEl3.src = BusMall.allPics[value3].filepath;
  imgEl3.id = BusMall.allPics[value3].name;

  BusMall.allPics[value1].timesDisplayed += 1;
  BusMall.allPics[value2].timesDisplayed += 1;
  BusMall.allPics[value3].timesDisplayed += 1;

  BusMall.lastDisplayed[0] = value1;
  BusMall.lastDisplayed[1] = value2;
  BusMall.lastDisplayed[2] = value3;
  BusMall.lastDisplayed.unshift(value1, value2, value3);
}

function handleClick(e) {
  if (event.target.id === 'pics') {
    return alert('click an image please!');
  }
  //track number of total clicks
  BusMall.clicks += 1;
  console.log(BusMall.clicks, 'clicks');
  //what do we do when we hit 25 clicks
  console.log('e.target', e.target);
  for(var i = 0; i < BusMall.allPics.length; i++) {
    if(e.target.id === BusMall.allPics[i].name) {
      BusMall.allPics[i].votes += 1;
      updateChart();
      console.log(BusMall.allPics[i].votes, ' votes');
    }
  }

  if(BusMall.clicks > 4) {
    BusMall.section.removeEventListener('click', handleClick);
    //display the results
    var dataStorage = JSON.stringify(dataAdd.data);
    localStorage.unfail = dataStorage;
    var retrievedFail = localStorage.unfail;
    drawChart();
    var parsedFail = JSON.parse(retrievedFail);
    votes += parsedFail;

  }
  //count votes for each image

  //call the randomProduct again
  randomProduct();
}

//show the results on the page as a list


BusMall.section.addEventListener('click', handleClick);
randomProduct();
