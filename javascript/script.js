//define stopwatch
var seconds = 0;
var minutes = 0;
var showseconds = 0;
var showminutes = 0;
//stopwatch function
function stopwatch() {
  seconds++;
  if (seconds / 60 === 1) {
    minutes++;
    seconds = 0;
  }
  if (minutes / 60 === 1) {
    minutes = 0;
    seconds = 0;
  }
  if (seconds < 10) {
    showseconds = "0" + seconds.toString();
  }
  else {
    showseconds = seconds;
  }
  if (minutes < 10) {
    showminutes = "0" + minutes.toString();
  }
  else {
    showminutes = minutes;
  }
  document.getElementById("time").innerHTML = showminutes + ":" + showseconds;
}
var intervalID = setInterval(stopwatch, 1000);
//define score
var score = 1;
//define array to hold 2 images 
var arr = [];
var i = 0;
//get array with all images we want to check
var arr2 = document.getElementsByClassName("img_front");
arr2 = Array.from(arr2);
//start map to loop on all array images
arr2.map(function (element, index) {
  element.addEventListener("click", function () {
    element.style.display = "none";
    arr[i] = element;
    i++;
    if (arr.length == 2) {
      if (arr[0].parentElement.lastElementChild.getAttribute("name") !== arr[1].parentElement.lastElementChild.getAttribute("name")) {
        setTimeout(function () {
          arr[0].style.display = "block";
          arr[1].style.display = "block";
          i = 0;
          window.arr = [];
        }, 500);
      }
      else {
        setTimeout(function () {
          arr[0].parentElement.lastElementChild.style.display = 'none';
          arr[1].parentElement.lastElementChild.style.display = 'none';
          i = 0;
          window.arr = [];
          document.getElementById("score").innerHTML = "score : " + score++;
        }, 500);
        if (score === 3) {
          clearInterval(intervalID);
          setTimeout(function(){
            document.getElementById("win").innerHTML = "You Win";
            document.getElementById("time").innerHTML = "00:00";
          },500);
        }
      }
    }
  });
});