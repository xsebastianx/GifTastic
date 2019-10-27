$(document).ready(function(){

    const displayedBtns = [];

    function displayImage(){
        $("#imageContain").empty();
        const input = $(this).attr("data");
        const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=fzRpP1tlDGeKQ5Lt6loKLb7r5PHEtaCXlimit=10";

        $.ajax({            
            url: queryURL,
            method: "GET",
        }).done(function(response){
            for (const i = 0; i < limit;i++) {
                const display = $("<div>")
                display.addClass("holder")

                const image = $("<img>")
                image.attr("src", response.data[i].images.original_still.url);
                image.attr("data-still", response.data[i]).images.original_still.url);
                image.attr("data-animate", response.data[i].images.original_still.url);
                image.attr("class","gif");
                display.append(image);

                const rating = response.data[i].rating;
                console.log(response);
                const pRating = $("<p>").text("Rating: " + rating);
                display.append(pRating)

                $("#imageContain").append(display);
            }
        });
    }

    function makeBtn() {
        $("#buttonDiv").empty();

        for (const i = 0; i < displayedBtns.length; i++) {

            const newBtn = $("<button>")
            newBtn.attr("class", "btn btn-primary");
            newBtn.attr("id", "input");
            newBtn.attr("data-name", displayedBtns[i]);
            newBtn.text(displayedBtns[i]);
            $("#buttonDiv").append(newBtn);
        }
    }

    function imageStateChange() {
        const state = $(this).attr("data-state");
        const animImg = $(this).attr("data-animate");
        const stillImg = $(this).attr("data-still");

        if(state === "still") {
            $(this).attr("src", animImg);
            $(this).attr("data-state", "still");
        } 

        else if(state === "animate") {
            $(this).attr("src", stillImg);
            $(this).attr("data-state", "still");
        }
        
    }

    $("#add").on("click", function(){

        const input = $("#search".val().trim();
        form.reset();
        displayedBtns.push(input);

        makeBtn();

        return false;
    })

    makeBtns();

    $(document).on("click", "#input", displayImage);
    $(document).on("click", ".gif", imageStateChange);
});