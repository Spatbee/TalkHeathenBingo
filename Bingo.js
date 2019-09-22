window.onload = function(){
  createNewBoard();
}

function createNewBoard() {
  sourceList = spacesText;
  if(sourceList.length < 24) {
    document.getElementById('error').innerHTML = "Error: not enough spaces defined in spacesText.js";
  } else {
    shuffle(sourceList);
    for(let i = 1; i<=24; i++){
      document.getElementById('space-'+i).innerHTML = sourceList[i];
    }
    deselectAll();
  }
}

//    https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function toggleSelect(element) {
  if(element.classList.contains("selected")){
    element.classList.remove("selected");
  } else {
    element.classList.add("selected");
  }
}

function deselectAll(element) {
  let selected = document.getElementsByClassName("selected");
  //traversing backwards to avoid concurrent modfication issues
  for (let i = selected.length-1; i>=0; i--) {
    selected.item(i).classList.remove("selected");
  }
}
