//rotate.js
//Handles the image rotation seen on the website's home page

//Put all of today's information into a JavaScript Date object
var today = new Date();

//Use that prefix to put the proper sequence of image filenames into an array
var imageArray = new Array(6);
for (let i=0; i<imageArray.length; i++)
    imageArray[i] = "black" + (i+1).toString() + ".jpg";

//Perform a "cicular rotation" of the images in the array
var imageCounter = 0;
function rotate()
{
    var imageObject = document.getElementById('placeholder');
    imageObject.src = imageArray[imageCounter];
    ++imageCounter;
    if (imageCounter == 6) imageCounter = 0;
}

//Called as soon as home page has loaded, to start image rotation
function startRotation()
{
    document.getElementById('placeholder').src=imageArray[5];
    setInterval('rotate()', 2000);
}

