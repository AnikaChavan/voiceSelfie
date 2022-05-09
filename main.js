var SpeechRecognition = window.webkitSpeechRecognition;
  
/*var a={x:10};
var b=a.x;*/
var recognition = new SpeechRecognition();

function start()
{
    console.log("hi"); 
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

    console.log(event); 

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content =="take my selfie")
    {
      console.log("taking selfie --- ");
      speak();
    }
}


function speak(){
  var speakData = "Taking your selfie in 5 seconds...";
  var synth = window.speechSynthesis;
  var utter = new SpeechSynthesisUtterance(speakData);
  synth.speak(utter);
  Webcam.attach(camera);
  takeSnap();
}


Webcam.set({
  width: 320,
  height: 250,
  image_format: 'png',
  jpeg_quality: 90
});
var camera = document.getElementById("webcam");

function takeSnap(){
  console.log("takeSnap")
  Webcam.snap(
    function(image_url){
      console.log(image_url)
      document.getElementById("result").innerHTML = "<img id = 'selfie' src='"+image_url + "'>";
    }
    
  )
}


