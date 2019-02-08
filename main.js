let topics= ["football", "gymnastics", "tennis", "basketball"];


$("#add-button").on("click", function(){
    event.preventDefault()
    let newCategory=($("#new-category").val());
    topics.push(newCategory);
    console.log(topics);
    addingButton();
});

function addingButton(){
    for(let i=topics.length-1; i<topics.length;i++){
    $("#buttons-here").append("<button class='btn btn-secondary' id='"+topics[i]+"'>"+topics[i]+"</button>");

            $("#"+topics[i]).on("click", function(){
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topics[i] + "&api_key=mTQOskT7b0hRTe8rrkPK89vLkCVvvK8Z&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            console.log(response);

            let results=response.data;

            let categoryHtml="";
            for(let j=0; j< results.length; j++){
                
                categoryHtml+="<div><p>Rating: "+ results[j].rating+ "</p><img src='"+results[j].images.fixed_height_still.url
                +"' data-animate='"+results[j].images.fixed_height.url+"' data-still='"+ results[j].images.fixed_height_still.url
                +"' data-state='still' class='giphy"
                + "'</img>";
                

            }
            $("#gifs-here").html(categoryHtml);
          
            $(".giphy").on("click",function(){
                var state= $(this).attr("data-state");
                if (state=="still"){
                    $(this).attr('src',$(this).attr("data-animate"));
                    $(this).attr('data-state', 'animate');
                  }
                    else{
                      $(this).attr('src',$(this).attr("data-still"));
                    $(this).attr('data-state', 'still');
                    }
            });
        }
          );
    });
}

}

for(let i=0; i<topics.length;i++){
    
    $("#buttons-here").append("<button class='btn btn-secondary' id='"+topics[i]+"'>"+topics[i]+"</button>");
    $("#"+topics[i]).on("click", function(){
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topics[i] + "&api_key=mTQOskT7b0hRTe8rrkPK89vLkCVvvK8Z&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            console.log(response);

            let results=response.data;

            let categoryHtml="";
            for(let j=0; j< results.length; j++){
                
                categoryHtml+="<div'><p>Rating: "+ results[j].rating+ "</p><img src='"+results[j].images.fixed_height_still.url
                +"' data-animate='"+results[j].images.fixed_height.url+"' data-still='"+ results[j].images.fixed_height_still.url
                +"' data-state='still' class='giphy"
                + "'</img>";
                

            }
            $("#gifs-here").html(categoryHtml);
          
            $(".giphy").on("click",function(){
                var state= $(this).attr("data-state");
                if (state=="still"){
                    $(this).attr('src',$(this).attr("data-animate"));
                    $(this).attr('data-state', 'animate');
                  }
                    else{
                      $(this).attr('src',$(this).attr("data-still"));
                    $(this).attr('data-state', 'still');
                    }
            });
        }
          );
    });
}

