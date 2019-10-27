$(document).ready(function(){

    const displayedBtns = ["Dolphins", "Pandas", "Giraffes"];

    function displayImage(){
        $("#imageContain").empty();
        const input = $(this).attr("data");
        const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=fzRpP1tlDGeKQ5Lt6loKLb7r5PHEtaCXlimit=10";

        $ajax({            
            url: queryURL,
            method: "GET",
        }).done(function(response){
            for (const i = 0; i < limit;i++) {
                const display = $("<div>")
                display.addClass("holder")

                const image = $("<img>")
                image.attr("src", response.data[i].images.original_still.url);
                image.attr("data-still", response.data[i]).images.original_still.url);
                image.attr("data-animate", response.data[i].images)
            }

        })
    }
})