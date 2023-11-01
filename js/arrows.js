var images = ["./resources/totalbadasses/totalbadass.jpeg", "./resources/totalbadasses/totalbadass2.jpeg", "./resources/totalbadasses/totalbadass3.jpeg", "./resources/totalbadasses/totalbadass4.jpeg"];
var currentIndex = 0;
var displayedImage = document.getElementById("displayed-image");
var upload = document.getElementById("upload-screen");
var imageViewer = document.getElementById("image-viewer");

// Changes the image to be displayed
function showImage() {
    displayedImage.src = images[currentIndex];
  }

// Goes back one image
function imageLeft() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage();
}

// Goes forward one image
function imageRight() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage();
}

// User wants to contribute their frog to our repo :)
function uploadFrog() {
    imageViewer.style.display = "none";
    upload.style.display = "flex";
}

// User decides they don't want to contribute to the frog repo :(
function uploadBack() {
    imageViewer.style.display = "flex";
    upload.style.display = "none";
}

// User uploads frog image! :D
function submitForm(event) {
    event.preventDefault();

    image = document.getElementById("img");
    frogName = document.getElementById("name");

    if (image.files.length === 0){
        alert("You must upload an image of a frog!");
    }
    else if (frogName.value === ''){
        alert("You must give the frog a name!");
    }
    else {
        alert("You submitted a frog image!");
        location.reload();
    }
    
}
