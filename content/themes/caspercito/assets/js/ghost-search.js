$("#search-field").ghostHunter({
    results   : "#results",
    onKeyUp  : true,
    zeroResultsInfo : false,
    result_template : "<div id='gh-{{ref}}' class='post-card-content gh-search-item'><a class='post-card-content-link' href='{{link}}'><header class='post-card-header'><span class='post-card-tags'>{{pubDate}}</span><h2 class='post-card-title'>{{title}}</h2></header></a></div>"

});
