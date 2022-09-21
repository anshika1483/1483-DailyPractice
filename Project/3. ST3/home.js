function sunWeight() {
  var x = document.getElementById("weight1").value;
  if (!x) {
    x = 0;
  }
  let w = x * 27.01;
  document.getElementById("sun").innerHTML = "Your weight on Earth is " + x + " kg and your weight will be " + w.toFixed(2) + " kg on Sun.";
}

function moonWeight() {
  var x = document.getElementById("weight2").value;
  if (!x) {
    x = 0;
  }
  let w = x * 0.166;
  document.getElementById("moon").innerHTML = "Your weight on Earth is " + x + " kg and your weight will be " + w.toFixed(2) + " kg on Moon.";
}

function mercuryWeight() {
  var x = document.getElementById("weight3").value;
  if (!x) {
    x = 0;
  }
  let w = x * 0.38;
  document.getElementById("mercury").innerHTML = "Your weight on Earth is " + x + " kg and your weight will be " + w.toFixed(2) + " kg on Mercury.";
}

function venusWeight() {
  var x = document.getElementById("weight4").value;
  if (!x) {
    x = 0;
  }
  let w = x * 0.91;
  document.getElementById("venus").innerHTML = "Your weight on Earth is " + x + " kg and your weight will be " + w.toFixed(2) + " kg on Venus.";
}

function earthWeight() {
  var x = document.getElementById("weight5").value;
  if (!x) {
    x = 0;
  }
  document.getElementById("earth").innerHTML = "Your weight on Earth is the one that has been provide by you, i.e, " + x + " kg.";
}

function marsWeight() {
  var x = document.getElementById("weight6").value;
  if (!x) {
    x = 0;
  }
  let w = x * 0.38;
  document.getElementById("mars").innerHTML = "Your weight on Earth is " + x + " kg and your weight will be " + w.toFixed(2) + " kg on Mars.";
}

function jupiterWeight() {
  var x = document.getElementById("weight7").value;
  if (!x) {
    x = 0;
  }
  let w = x * 2.34;
  document.getElementById("jupiter").innerHTML = "Your weight on Earth is " + x + " kg and your weight will be " + w.toFixed(2) + " kg on Jupiter.";
}

function saturnWeight() {
  var x = document.getElementById("weight8").value;
  if (!x) {
    x = 0;
  }
  let w = x * 1.06;
  document.getElementById("saturn").innerHTML = "Your weight on Earth is " + x + " kg and your weight will be " + w.toFixed(2) + " kg on Saturn.";
}

function uranusWeight() {
  var x = document.getElementById("weight9").value;
  if (!x) {
    x = 0;
  }
  let w = x * 0.92;
  document.getElementById("uranus").innerHTML = "Your weight on Earth is " + x + " kg and your weight will be " + w.toFixed(2) + " kg on Uranus.";
}

function neptuneWeight() {
  var x = document.getElementById("weight10").value;
  if (!x) {
    x = 0;
  }
  let w = x * 1.19;
  document.getElementById("neptune").innerHTML = "Your weight on Earth is " + x + " kg and your weight wll be " + w.toFixed(2) + " kg on Neptune.";
}

function plutoWeight() {
  var x = document.getElementById("weight11").value;
  if (!x) {
    x = 0;
  }
  let w = x * 0.06;
  document.getElementById("pluto").innerHTML = "Your weight on Earth is " + x + " kg and your weight will be " + w.toFixed(2) + " kg on Pluto.";
}
