$(document).ready(function(){

    const displayedBtns = ["Dolphins", "Pandas", "Giraffes"];

    function displayImage(){
        $("#imageContain").empty();
        const input = $(this).attr("data");
        const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=fzRpP1tlDGeKQ5Lt6loKLb7r5PHEtaCXlimit=10"
    }
})