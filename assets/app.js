$(document).ready(function(){

    const animals = ["Pandas", "Giraffes", "Dolphins"];

    function displayImage(){
        $("#imageContain").empty();
        var input = $(this).attr("data");
        var limit = 10;
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&limit=" + limit + "&api_key=fzRpP1tlDGeKQ5Lt6loKLb7r5PHEtaCX";

        $.ajax({            
            url: queryURL,
            method: "GET",
        }).done(function(response){
            for (var j = 0; j < limit;j++) {
                var display = $("<div>")
                display.addClass("holder")

                var image = $("<img>")
                image.attr("src", response.data[j].images.original_still.url);
                image.attr("data-still", response.data[j]).images.original_still.url);
                image.attr("data-animate", response.data[j].images.original_still.url);
                image.attr("data-state", "still");
                image.attr("class","gif");
                display.append(image);

                var rating = response.data[j].rating;
                console.log(response);
                var pRating = $("<p>").text("Rating: " + rating);
                display.append(pRating)

                $("#imageContain").append(display);
            }
        });
    }

    function makeBtn() {
        $("#buttonDiv").empty();

        for (var i = 0; i < displayedBtns.length; i++) {

            var newBtn = $("<button>")
            newBtn.attr("class", "btn btn-primary");
            newBtn.attr("id", "input");
            newBtn.attr("data-name", animals[i]);
            newBtn.text(animals[i]);
            $("#buttonDiv").append(newBtn);
        }
    }

    function imageStateChange() {
        var state = $(this).attr("data-state");
        var animImg = $(this).attr("data-animate");
        var stillImg = $(this).attr("data-still");

        if(state === "still") {
            $(this).attr("src", animImg);
            $(this).attr("data-state", "animate");
        } 

        else if(state === "animate") {
            $(this).attr("src", stillImg);
            $(this).attr("data-state", "still");
        }
        
    }

    $("#add").on("click", function(){

        const inputX = $("#search".val().trim();
        form.reset();
        displayedBtns.push(inputX);

        makeBtn();

        return false;
    })

    makeBtns();

    $(document).on("click", "#input", displayImage);
    $(document).on("click", ".gif", imageStateChange);
});