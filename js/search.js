/**
 * search.js
 * User type the name of the photo in the search box to filter the respective photo
 * search has to ignore letter case
 * set variables for the searchBox, gallery and img from the document (index.html)
 * function to detect the string in the input value
 * convert the input value to uppercase
 * set a loop with a if condition that match the input string value with the img 'alt' inside the anchor
 * the loop run according with the number of img tags in the html and stops running when scan all the img
 *  if is true put a display = '' in hte img parrent;
 *  else put a display = none in hte img parrent;
 * this way it will hide all anchors that doesn't match
 */


function searchBox() {
    let searchBox = document.getElementById('searchBox');
    let search = searchBox.value.toUpperCase();
    let gallery = document.getElementById('gallery');
    let imgList = gallery.getElementsByTagName('img');
    let img;

    for (let i = 0; i < imgList.length; i++) {
        img = imgList[i].alt;
        if (img.toUpperCase().indexOf(search) > -1 ) {
            imgList[i].parentElement.style.display = "";
        } else {
            imgList[i].parentElement.style.display = "none";
            console.log(img.toUpperCase());
            console.log(search);
        }
    }
}

document.getElementById('searchBox').addEventListener('input', () => {
    searchBox();
})

/**
 * I used this code https://www.w3schools.com/howto/howto_js_filter_lists.asp
 * as base for the search filter.
 * I was strugling to understand the indexOf, but i found the description on the MDN and finally understood why it was used there
 * When i finished the js code and did a test, i was getting an empty photo gallery everytime and realize that the script was running 1 time only when the page loaded
 * I looked on how to run the code everytime that the value in the input changed and found the addEventListener function
 * I searched for it in the MDN and other places on how to utilize the function with no luck understanding
 * I found this video that was really helpful https://www.youtube.com/watch?v=830_oZQIabM
 * First i put the whole code inside the addEventListener, later i realize that i could just make the code as a function and call it inside the addEventListener
 */
