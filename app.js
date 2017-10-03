'use strict';
var clicks = 0;
var totals = [];
BusMall.allPics = [];


function BusMall(name, filepath) {
  this.name = name;
  this.filepath = filepath;
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
  var value1 = 0;
  var value2 = 0;
  var value3 = 0;
  //pic1
  function testing() {
    for (var i = 0; i < 1; i++) {
      var randomIndex1 = Math.floor(Math.random() * BusMall.allPics.length);
      value1 += randomIndex1;
      var randomIndex2 = Math.floor(Math.random() * BusMall.allPics.length);
      value2 += randomIndex2;
      var randomIndex3 = Math.floor(Math.random() * BusMall.allPics.length);
      value3 += randomIndex3;
    }
  }
  if (value1 === value2 || value1 === value3 || value2 === value3) {
    testing();
  }
  clicks += 1;

  console.log('clicks is ', clicks);
  console.log(value1);
  var imgEl = document.getElementById('pic1');
  imgEl.addEventListener('click', randomProduct);
  imgEl.src = BusMall.allPics[value1].filepath;
  console.log('pic # // value1 ',value1);
  //pic2
  var imgEl2 = document.getElementById('pic2');
  imgEl2.addEventListener('click', randomProduct);
  imgEl2.src = BusMall.allPics[value2].filepath;
  console.log('pic # // value2 ',value2);
  //pic3
  var imgEl3 = document.getElementById('pic3');
  imgEl3.addEventListener('click', randomProduct);
  imgEl3.src = BusMall.allPics[value3].filepath;
  console.log('pic # // value3 ',value3);

  function productClicked1() {
    totals.push(value1);
  }
  imgEl.addEventListener('click', productClicked1);

  function productClicked2() {
    totals.push(value2);
  }
  imgEl2.addEventListener('click', productClicked2);

  function productClicked3() {
    totals.push(value3);
  }
  imgEl3.addEventListener('click', productClicked3);
  console.log(totals);
}
randomProduct();
