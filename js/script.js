document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("myVideo");
    var playButton = document.getElementById("playButton");
    var pauseButton = document.getElementById("pauseButton");
    var rotateButton = document.getElementById("rotateButton");
    var flipHorizontalButton = document.getElementById("flipHorizontalButton");
    var flipVerticalButton = document.getElementById("flipVerticalButton");
    var isFlippedHorizontal = false;
    var isFlippedVertical = false;
    var rotationAngle = 0;

    console.log(rotationAngle);
    console.log(isFlippedHorizontal);
    console.log(isFlippedVertical);

    flipHorizontalButton.addEventListener("click", function() {
        isFlippedHorizontal = !isFlippedHorizontal;
        applyTransformation();
        console.log(rotationAngle);
        console.log(isFlippedHorizontal);
        console.log(isFlippedVertical);
      });
    
      flipVerticalButton.addEventListener("click", function() {
        isFlippedVertical = !isFlippedVertical;
        applyTransformation();
        console.log(rotationAngle);
        console.log(isFlippedHorizontal);
        console.log(isFlippedVertical);
      });
    
      playButton.addEventListener("click", function() {
        video.play();
      });
    
      pauseButton.addEventListener("click", function() {
        video.pause();
      });
    
      rotateButton.addEventListener("click", function() {
        rotationAngle += 90;
        data = (rotationAngle) % 360;
        applyTransformation();
        console.log(rotationAngle, data);
        console.log(isFlippedHorizontal);
        console.log(isFlippedVertical);
      });
    
      function applyTransformation() {
        var flipTransform = "";
        if (isFlippedHorizontal) {
          flipTransform += "scaleX(-1) ";
        }
        if (isFlippedVertical) {
          flipTransform += "scaleY(-1) ";
        }
        video.style.transform = flipTransform + "rotate(" + rotationAngle + "deg)";
      }
    });