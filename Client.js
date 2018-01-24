const FileReader = require ('./FileReader,js');

let FR = new FileReader();
let list = FR.LoadFileIntoArrayByLine('electionSimplified.csv');

let parsedList = votingParser(list);


function findCountyAmount(list,array){
  let country = list.sort(function(a,b){
    let wordA = a.state.toLowerCase();
    let wordB = b.county.toLowerCase();
    if(county.length==67){
      return state;
    }
  });
}

function findStates(list){
  let state = [];
  for(let x=0; x<array.length; x++){
    if(list[x].fips == 0);
    state.push(list[x].state);
  }
}

function PercentLows(list){
  let percents = [];
  for(let x=0; x<array.length; x++){
    if(list[x].obamap<40);
    percents.push(list[x].obamap);
  }
  else if (list[x].romneyp<40){
    percents.push(list[x].romneyp);
  }
}

function countryHighs(list){
  let counties = list.sort(function(a,b){
    return (a.obama+a.romney)-(b.obama-b.romney);
  });
}

function countyWins(list){
  let wins = [];
  let number = list.obama-list.romney;
  for(let x=0; x<array.length; x++){
    if(number>0){
      wins.push([list[x].state,list[x].county,list[x].obamaP]);
    }
  }
}
{
function stateCountyPercentLongShot(list){
  let counties = list.sort(function(a){
    return (a.obama-a.romeny);
  });
  return
}
