// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.
let imageDisplay = document.querySelector(".column display-image");
let songNameDisplay = document.querySelector("column display-song");
let artistDisplay = document.querySelector("column display-artist");
let songLinkDisplay = document.querySelector("column display-link");

// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
/* All Arrays:
const imageUrls = ["https://i.ytimg.com/vi/goqqohUitmw/maxresdefault.jpg", "https://assets.teenvogue.com/photos/618de539a6fc4c30472f6c10/16:9/w_4095,h_2303,c_limit/Gracie%20(39)%20-%20by%20Vince%20Aung.jpg", "https://i.ytimg.com/vi/eg2KWIpZW-U/maxresdefault.jpg", "https://i.ytimg.com/vi/gWdjDwYuejI/maxresdefault.jpg", "https://images.genius.com/3b2a66301e2d8cc545278f52affe41bd.1000x1000x1.jpg", "https://i.ytimg.com/vi/odWKEfp2QMY/maxresdefault.jpg"]
const songNames = ["People Watching", "Feels Like", "Only a Matter of Time", "Till Forever Falls Apart", "Traitor", "THE LONELIEST"]
const artistNames = ["Conan Gray", "Gracie Abrams", "Joshua Bassett", "Ashe & FINNEAS", "Olivia Rodrigo", "Maneskin"]
const songLinks = ["https://youtu.be/noJ4I3RBoEY", "https://youtu.be/ptznWGs4GKg", "https://youtu.be/eg2KWIpZW-U", "https://youtu.be/gWdjDwYuejI", "https://youtu.be/CRrf3h9vhp8", "https://youtu.be/odWKEfp2QMY"]
*/

//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
const PeopleWatching = { songName: "People Watching", imageUrl: "https://i.ytimg.com/vi/goqqohUitmw/maxresdefault.jpg", artist: "Conan Gray", songLink: "https://youtu.be/noJ4I3RBoEY" }
const FeelsLike = {songName: "Feels Like", imageUrl: "https://assets.teenvogue.com/photos/618de539a6fc4c30472f6c10/16:9/w_4095,h_2303,c_limit/Gracie%20(39)%20-%20by%20Vince%20Aung.jpg", artist: "Gracie Abrams", songLink: "https://youtu.be/ptznWGs4GKg"}
const OAMOT = {songName: "Only A Matter of Time", imageUrl: "https://i.ytimg.com/vi/eg2KWIpZW-U/maxresdefault.jpg", artist: "Joshua Bassett", songLink: "https://youtu.be/eg2KWIpZW-U"}
const TFFA = {songName: "Till Forever Falls Apart", imageUrl: "https://i.ytimg.com/vi/gWdjDwYuejI/maxresdefault.jpg", artist: "Ashe & FINNEAS", songLink: "https://youtu.be/gWdjDwYuejI"}
const Traitor = {songName: "Traitor", imageUrl: "https://images.genius.com/3b2a66301e2d8cc545278f52affe41bd.1000x1000x1.jpg", artist: "Olivia Rodrigo", songLink: "https://youtu.be/CRrf3h9vhp8"}
const TheLoneliest = {songName: "THE LONELIEST", imageUrl: "https://i.ytimg.com/vi/odWKEfp2QMY/maxresdefault.jpg", arist: "Maneskin", songLink: "https://youtu.be/odWKEfp2QMY"}
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.


  // task 10: use `.push()` to add each input value to the correct array.

}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

  // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.



}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
