// Code your orbitCircumference function here:

function orbitCircumference(altitude) {
  return 2*Math.PI * altitude
}

// Code your missionDuration function here:

function missionDuration(numOrbits, orbitRad = 2000, orbitSpeed = 28000) {
  return (orbitCircumference(orbitRad) / orbitSpeed) * numOrbits;
}


// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];

}

function getCrew(arr) {
    let crew = [];
    
    while (crew.length < 3) {
      let candidate = selectRandomEntry(arr);
      if (!crew.includes(candidate)) {
        crew.push(candidate)
      }
    }
    return crew
}




// Code your oxygenExpended function here:

function oxygenExpended(obj, hrs) {
  let missionDuration = missionDuration(hrs)
  let o2Used = obj.o2Used(hrs)
  
}



// Candidate data & crew array.
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};


let allCrew = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
let myCrew = getCrew(allCrew) 
console.log(myCrew)

