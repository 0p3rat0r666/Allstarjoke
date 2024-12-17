var i = 0;
const printMe = ["Somebody", "once", "told", "me",
"The", "world", "is", "gonna", "roll", "me", "I", "ain't", "the", "sharpest", "tool", "in", "the", "shed", "she", "was", "looking", "kind", "of", "dumb", "With", "her", "finger", "and", "her", "thumb", "In", "the", "shape", "of", "an", '"L"', "on", "her", "forehead"];
function play(){
  If(i === printMe.length){
     console.log(":3");
     clearInterval(playing);
  }else{
     console.log(printMe[I]);
     i = i + 1;
  }
}
const playing = setInterval(play, 500);
