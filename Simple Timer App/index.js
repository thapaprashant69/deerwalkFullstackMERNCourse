let intervalId, inputTime;

function Time() {
  this.hour = document.getElementById("hourInput").value;
  this.minute = document.getElementById("minuteInput").value;
  this.second = document.getElementById("secondInput").value;
  this.totalSecond = this.hour*60*60+this.minute*60+this.second*1;
}

const startTimer = () => {
  inputTime = new Time();
  if(intervalId){
      clearInterval(intervalId);
  }
  intervalId = setInterval(timerRunner, 1000);
};

const timerRunner = () => {
  if (inputTime.totalSecond <= 0) {
    console.log("Check condition");
    clearInterval(intervalId);
  }
  document.getElementById("hourInput").value = Math.floor(inputTime.totalSecond/(3600));
  document.getElementById("minuteInput").value = Math.floor((inputTime.totalSecond%3600)/60);
  document.getElementById("secondInput").value = inputTime.totalSecond%60;
  //document.getElementById("innerParagraph").innerHTML = `<h1>${Math.floor(inputTime.totalSecond/(3600))}</h1>h <h1>${Math.floor((inputTime.totalSecond%(3600))/60)}</h1>m <h1>${(inputTime.totalSecond%60)}</h1>s`;
  inputTime.totalSecond--;
};

const stopTimer = () =>{
    if(intervalId){
        clearInterval(intervalId);
    }
}

const resetTimer = () =>{
    console.log("Inside ResetTimer");
    if(intervalId){
        clearInterval(intervalId);
    }
    document.getElementById("hourInput").value = null;
    document.getElementById("minuteInput").value = null;
    document.getElementById("secondInput").value = null;
}

//Trying to display time inside canvas
// const timerBoxRunner = () =>{
//     timerRunBox("ff0000",330,400,140,160)
//     timerRunBox("ff0000",170,220,140,160)
//     timerRunBox("ff0000",10,40,140,160);
// }

// const timerRunBox = (fillColor,x,y,width,height) => {
//   let canvas = document.getElementById("timerMainCanvas");
//   if (canvas.getContext) {
//     console.log("Inside canvas draw");
//     let canvasToDraw = canvas.getContext("2d");
//     canvasToDraw.fillStyle = fillColor;
//     canvasToDraw.fillRect(x, y, width, height);
//   }
// };
