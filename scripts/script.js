// set a DOM node for the congress-container in HTML
var congressContainer = document.querySelector('.congress-container'),
    //set a DOM node for the input div in HTML
    inputNode = document.querySelector('input')



    var handleRetrievedData = function(apiResponse) {
    //create an empty string that you will eventually populate with your search results
    var htmlString = ''
    //create a variable for searching the api response for better usability
    // the array of movies is stored under a key called "Search" in the apiResponse. we could only
    // learn this by visually studying the JSON returned by the API.
    var congressArray = apiResponse.Search
   	console.log(congressArray)
    //at every index in the movies array for the length of the array
    // for (var i = 0; i < congressArray.length; i ++) {
    //     // the element at each index is an object representing a movie
    //     var movieObject = congressArray[i]
    //     //imgURL by default will hold the poster link that is included in the movie object
    //     var imgURL = movieObject.Poster
    //     //is the poster link listed as "N/A"?
    //     if (imgURL === "N/A") {
    //         //well, then replace "N/A" with the image below
    //         imgURL = 'https://designgutter.files.wordpress.com/2011/01/screen-shot-2011-01-27-at-4-26-32-pm.png'
    //     }
    //     //create opening tag of a container that will contain the html for a particular movie
    //     htmlString += '<div class="movie">'
    //     //add a poster image
    //     htmlString += '<img src="' + imgURL + '">'
    //     //include the title of the movie... movieObject.Title indicates the 'title' property of the
    //     //movie object
    //     htmlString += '<h1 class="title">' + movieObject.Title + '</h1>'
    //     //add the year the movie was released
    //     htmlString += '<p class="year">' + movieObject.Year + '</p>'
    //     //close the div that was opened on line 48
    //     htmlString += '</div>'
    // }
    // put htmlString in congressContainer
    congressContainer.innerHTML = htmlString
} 

//this function will take a search term as input and use it to initiate a request to the API
var serachCongressRep = function(searchTerm) {
    //create variable that combines your search term with the database return URL
    var apiKey = ''
    var congressApiUrl = 'https://congress.api.sunlightfoundation.com/legislators?explain=true&apikey='+apiKey+'&query=' + searchTerm
    ''
    // initiates a request to the server. the promise object will manage the progress of the request.
    var promise = $.getJSON(congressApiUrl)
    //tell the promise to use our function to process the data once that data becomes available
    promise.then(handleRetrievedData)
}

// create a function for an event listener 
var handleKeyPress = function(eventObject) {
    //we need to know whether enter was pressed| to do this we need to grab the keyboard code for enter
    if (eventObject.keyCode === 13) {
        // get what the user inputted 
        var inputNode = eventObject.target,
        //assigns a value to searchTerm which === the string we type into the input box
            searchTerm = inputNode.value
        //invoke serachCongressRep function with our new searchTerm
        serachCongressRep(searchTerm)
    }
}

inputNode.addEventListener('keydown', handleKeyPress)

