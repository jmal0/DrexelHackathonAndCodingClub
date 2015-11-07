// Load news items from DHACC_files/news.json

NUM_ARTICLES = 5; // Load 5 most recent

$.getJSON( "DHACC_files/news.json", function( data ) {
    console.log("pls");
    for(var i = 0; i < NUM_ARTICLES; i++){
        var news_item = "<li class=\"news-item\">" +
                        "<div class=\"news-content\">" + 
                        "<h4>" + data["reports"][i]["title"] + "</h4>" +
                        "<p>" + data["reports"][i]["text"] + "</p>" +
                        "<small>" + data["reports"][i]["date"] + "</small>" +
                        "</div>" + 
                        "</li>";
        document.getElementById("news-list").appendChild(news_item);
    }
});