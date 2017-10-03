'use strict';
BusMall.clicks = 0;
var totals = [];
BusMall.allPics = [];
BusMall.lastDisplayed = [];

BusMall.resultsList = getElementById('pics')
function BusMall(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.timesDisplayed = 0;

  BusMall.allPics.push(this);
}

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

function randomProduct() {
  var imgEl = document.getElementById('pic1');
  var imgEl2 = document.getElementById('pic2');
  var imgEl3 = document.getElementById('pic3');

  var value1 = Math.floor(Math.random() * BusMall.allPics.length);
  var value2 = Math.floor(Math.random() * BusMall.allPics.length);
  var value3 = Math.floor(Math.random() * BusMall.allPics.length);

  //check the last displayed for duplicates
  // while(BusMall.lastDisplayed.includes(value1) || BusMall.lastDisplayed.includes(value2) || BusMall.lastDisplayed.includes(value3) ||
  // value1 === value2 ||
  // value1 === value3 ||
  // value2 === value3){
  //
  // }

  while(value1 === value2 || value1 === value3 || value2 === value3) {
    value1 = Math.floor(Math.random() * BusMall.allPics.length);
    value2 = Math.floor(Math.random() * BusMall.allPics.length);
    value3 = Math.floor(Math.random() * BusMall.allPics.length);
  }

  console.log('clicks is ', clicks);
  console.log(value1);
  imgEl.src = BusMall.allPics[value1].filepath;
  console.log('pic # // value1 ',value1);
  //pic2
  imgEl2.src = BusMall.allPics[value2].filepath;
  console.log('pic # // value2 ',value2);
  //pic3
  imgEl3.src = BusMall.allPics[value3].filepath;
  console.log('pic # // value3 ',value3);

  //inc
  BusMall.allPics[value1].timesDisplayed += 1;
  BusMall.allPics[value2].timesDisplayed += 1;
  BusMall.allPics[value3].timesDisplayed += 1;

  BusMall.lastDisplayed[0] = value1;
  BusMall.lastDisplayed[1] = value2;
  BusMall.lastDisplayed[2] = value3;
  //keep track
  BusMall.lastDisplayed.unshift(value1, value2, value3);



  // function productClicked1() {
  //   totals.push(value1);
  // }
  // imgEl.addEventListener('click', productClicked1);
  //
  // function productClicked2() {
  //   totals.push(value2);
  // }
  // imgEl2.addEventListener('click', productClicked2);
  //
  // function productClicked3() {
  //   totals.push(value3);
  // }
  // imgEl3.addEventListener('click', productClicked3);
  console.log(totals);
  console.log('value1 is ',value1);
  console.log('====================');
}

function handleClick(e) {
  //track of number of total clicks
  BusMall.clicks += 1;
  //what to do when we hit 25 clicks
  if(BusMall.clicks > 24) {
    BusMall.section.removeEventListener('click',handleClick);

    for (var i = 0; i < BusMall.allPics.length; i++) {
      if(event.target.id === BusMall.allPics[i].name) {
        BusMall.allPics[i].votes += 1;
      }
    }
    //display the results
    showResults();
  }
  //count votes for each image
  // console.log('e.target', e.target);
  //call randomProduct function again
  //call randomProduct function again
  randomProduct();
}

function showResults(); {
  for(var i = 0; i < BusMall.allPics.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = BusMall.allPics[i].name + ' has ' + BusMall.allPics[i].votes + ' votes in ' + BusMall.allPics[i]timesDisplayed + ' times shown '
    Busmall.allPics
  }
}
BusMall.section.addEventListener('click', handleClick);
randomProduct();
