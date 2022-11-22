// goal: when the user copies and pastes a URL into the input field, upon the button being clicked (or ENTER/RETURN key is pressed) the image will be displayed below  

// step 1: get image url 
// step 2: when button is clicked or pressed
// step 3: img src is updated 

// store variables 
var urlInput = document.getElementById("urlInput");
var displayButton = document.getElementById("displayButton");
var image = document.getElementById("image");
var clearButton = document.getElementById("clearButton")

// functions 
function displayImage(){
  // console.log('button clicked');
  // console.log(urlInput.value);
  image.src = urlInput.value;
  // urlInput.value = "";
}

//clear button 
function clearInput(){
  urlInput.value = "";
}
function displayImageOnEnter(event){
  if (event.keyCode === 13){
    image.src = urlInput.value;
  }
}; 

// D.R.Y. 
displayButton.addEventListener("click", displayImage); 

addEventListener("keypress", displayImageOnEnter);
