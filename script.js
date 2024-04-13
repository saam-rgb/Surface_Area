function cubeTSA() {
  var givenSide = document.getElementById("side").value;
  console.log(givenSide);
  var TSA = 6 * givenSide * givenSide;

  console.log(TSA);
  document.getElementById("solution").innerHTML = TSA;
}
const cubeCSA = () => {
  var givenSide = document.getElementById("side").value;
  var CSA = 4 * givenSide * givenSide;
  document.getElementById("solution").innerHTML = CSA;
};
const cubeVol = () => {
  var givenSide = document.getElementById("side").value;
  var CSA = givenSide * givenSide * givenSide;
  document.getElementById("solution").innerHTML = CSA;
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
