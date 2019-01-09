// add solution here

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    for (var i = 0; i < instruments.length; i++) {

      var musician = musicians[i];
      var instrument = instruments[i];
     
     var newSentence = musician + " plays " + instrument; 
      array.push(newSentence); 
    }
  }
  return array; 
}

function johnLennonFacts(array) {
  var newArray = [];
  var i = 0; 

  while (i < array.length) {
    var fact = array[i];
    var newSentence = fact + "!!!"; 
    newArray.push(newSentence); 

    i++; 
  }
  return newArray; 
}

