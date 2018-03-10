

var topics = ["cat", "dog", "panda", "grizzly", "dinosaur"];





function displayAnimals() {
    var animalInput = $(".animalButton").attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Yl7xbLfBMtpnEtLj8K9Jej4jKYk0JUQx&q="+animalInput+"&limit=10&offset=0&rating=G&lang=en";
    console.log(animalInput);
    /*var giphCount = $(".counter").val().trim();
    queryURL += "&limit=" + giphCount;*/
    $.ajax({
        url: queryURL,
        method: "GET",
        crossDomain: false,
        dataType: "JSON"
    }).done(function (response) {
        console.log(response);
        // Creating a div to hold the movie
        var results = response.data;
        
        for (var j = 0; j < results.length; j++) {
            if (results[j].rating !== "r" && results[j].rating !== "pg-13") {

                var gifDiv = $("<div class='item'>");

                var rating = results[j].rating;

                var p = $("<p>").text("Rating: " + rating);

                var animalImage = $("<img>");

                animalImage.attr("src", results[j].images.downsized.url);

                gifDiv.append(p);
                gifDiv.append(animalImage);

                $(".giphy-well").prepend(gifDiv);
            }
        }

        
        


    })
}

function buildUrl() {
    var queryURL = ""
}

function addButtons() {
    $('.buttonArea').empty();
    for (i = 0; i < topics.length; i++) {
        var btn = $('<button>')

        // Adding a class of movie-btn to our button
        btn.addClass("animalButton");
        // Adding a data-attribute
        btn.attr("data-name", topics[i]);
        // Providing the initial button text
        btn.text(topics[i]);
        // Adding the button to the buttons-view div
        $(".buttonArea").append(btn);
    }


};

addButtons();


$(document).on("click", ".animalButton", displayAnimals);





