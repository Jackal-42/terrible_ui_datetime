let output = document.getElementById("output");
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

let seeds = [];
for(let i = 0; i < 36500; i++){
  seeds.push(i);
}
shuffle(seeds);

let string = "";
for(let j = 0, jl = seeds.length; j < jl; j++){
  string += "<button>";
  let seed = seeds[j];
  let daySeed = (seed % 365) + 1;
  for(let i = 0, l = dayCount.length - 1; i < l; i++){
    if(daySeed <= dayCount[i + 1]){
      string += months[i] + " " + (daySeed - dayCount[i]);
      break;
    }
  }
  string += ", " + (1923 + (Math.floor(seed/365)%100));
  // string += " " + (Math.floor(seed/36500)%24) + ":" + (Math.floor(seed/876000)%60);
  string += "</button>";
  if(j % 125 == 124){
    string += "<br>";
  }
}
output.innerHTML = "Please select a date from January 1, 1923 to December 31, 2022.<br>" + string;

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
