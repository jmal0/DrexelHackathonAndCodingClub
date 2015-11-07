// Load news items from DHACC_files/news.json

NUM_ARTICLES = 5; // Load 5 most recent

$.getJSON( "http://jmal0.github.io/DrexelHackathonAndCodingClub/DHACC-files/news.json", function( data ) {
    console.log("pls");
    items = [];
    var news_list = $("ol").addClass("news-items");
    
    for(var i = 0; i < data["reports"].length && i < NUM_ARTICLES; i++){
        var item = "<li class=\"news-item\">" +
                   "<div class=\"news-content\">" + 
                   "<h4>" + data["reports"][i]["title"] + "</h4>" +
                   "<p>" + data["reports"][i]["text"] + "</p>" +
                   "<small>" + data["reports"][i]["date"] + "</small>" +
                   "</div>" + 
                   "</li>";
        $('#news-list').append(item);     
    }


});