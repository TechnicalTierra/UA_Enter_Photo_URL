/* 
Project: When a URL link is typed or copy and pasted into the input box and the user clicks the "Click to Display Image Below" button or presses "Enter" then the image will display in the box below.
*/

// Step 1: Get and store the URL input in a variable: DONE
// *Only works inside the function

// Step 2: Create a function to get the urlInput value : DONE
// Step 2.a) Update image: DONE
// Step 3: On mouse click of "Display button" run function: DONE
// Step a) Update image on mouse click: DONE

// Step 4: On "Enter" press run function: DONE
function showImage() {
  let urlInput = document.getElementById("urlInput").value;
  document.getElementById("dynamicImage").src = urlInput;
  document.getElementById("urlInput").value = "";
}

urlInput.addEventListener("keyup", function(event) {
  if(event.keyCode === 13) {
    let urlInput = document.getElementById("urlInput").value;
    document.getElementById("dynamicImage").src = urlInput;
    document.getElementById("urlInput").value = "";
  }
})

// Project: COMPLETE
