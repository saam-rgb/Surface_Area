// Cube functions
function cubeTSA() {
  let givenSide = document.getElementById("side").value;
  console.log(givenSide);
  let TSA = 6 * givenSide * givenSide;

  console.log(TSA);
  document.getElementById("cubeSol").innerHTML = TSA;
}
const cubeCSA = () => {
  let givenSide = document.getElementById("side").value;
  let CSA = 4 * givenSide * givenSide;
  document.getElementById("cubeSol").innerHTML = CSA;
};
const cubeVol = () => {
  let givenSide = document.getElementById("side").value;
  let Vol = givenSide * givenSide * givenSide;
  document.getElementById("cubeSol").innerHTML = Vol;
};

//Cone functions
const coneTSA = () => {
  let baseRadius = document.getElementById("baseRadius").value;
  let coneHeight = document.getElementById("coneHeight").value;
  console.log(`Base radius : ${baseRadius} and Height ${coneHeight}`);
  let TSA = 3.14 * baseRadius * (baseRadius + coneHeight);
  document.getElementById("coneSol").innerHTML = TSA;
};

const coneCSA = () => {
  let baseRadius = document.getElementById("baseRadius").value;
  let coneHeight = document.getElementById("coneHeight").value;
  console.log(`Base radius : ${baseRadius} and Height ${coneHeight}`);
  let CSA = 3.14 * baseRadius * coneHeight;
  document.getElementById("coneSol").innerHTML = CSA;
};

const coneVol = () => {
  let baseRadius = document.getElementById("baseRadius").value;
  let coneHeight = document.getElementById("coneHeight").value;
  console.log(`Base radius : ${baseRadius} and Height ${coneHeight}`);
  let Vol = (3.14 * baseRadius * baseRadius * coneHeight) / 3;
  document.getElementById("coneSol").innerHTML = Vol;
};

// Cylinder functions

const cylinderTSA = () => {
  let baseRadius = document.getElementById("radius").value;
  let cylinderHeight = document.getElementById("cylinderHeight").value;
  console.log(`Base radius : ${baseRadius} and Height ${cylinderHeight}`);
  let TSA = 3.14 * baseRadius * (baseRadius + cylinderHeight);
  document.getElementById("cylinderSol").innerHTML = TSA;
};

const cylinderCSA = () => {
  let baseRadius = document.getElementById("radius").value;
  let cylinderHeight = document.getElementById("cylinderHeight").value;
  console.log(`Base radius : ${baseRadius} and Height ${cylinderHeight}`);
  let CSA = 3.14 * baseRadius * cylinderHeight;
  document.getElementById("cylinderSol").innerHTML = CSA;
};

const cylinderVol = () => {
  let baseRadius = document.getElementById("radius").value;
  let cylinderHeight = document.getElementById("cylinderHeight").value;
  console.log(`Base radius : ${baseRadius} and Height ${cylinderHeight}`);
  let Vol = 3.14 * baseRadius * baseRadius * cylinderHeight;
  document.getElementById("cylinderSol").innerHTML = Vol;
};

// tsa = document.getElementById("tsa");

// function cube() {
//   var btnVal = document.getElementById("tsa").addEventListener("click",function funtsa(){

//   });
//   var btnVal = document.getElementById("csa").addEventListener("click",function funcsa(){

//   });
//   var btnVal = document.getElementById("vol").addEventListener("click",function funvol(){

//   });
//   var givenSide = document.getElementById("side").value;
//   console.log(givenSide);
//   if (btnVal == tsa) {
//     let tsa = 6 * givenSide * givenSide;
//     document.getElementById("solution").innerHTML = tsa;
//   } else if (btnVal == csa) {
//     let csa = 4 * givenSide * givenSide;
//     document.getElementById("solution").innerHTML = csa;
//   } else {
//     let vol = givenSide * givenSide * givenSide;
//     document.getElementById("solution").innerHTML = vol;
//   }
// }
