var images = ["./resources/totalbadasses/totalbadass.jpeg", "./resources/totalbadasses/totalbadass2.jpeg", "./resources/totalbadasses/totalbadass3.jpeg", "./resources/totalbadasses/totalbadass4.jpeg"];
var currentIndex = 0;
var imageGallery = document.getElementById("image-gallery");

function showImage() {
    imageGallery.src = images[currentIndex];
  }


function imageLeft() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    console.log('left');
    showImage();
}

function imageRight() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    console.log('right');
    showImage();
}

