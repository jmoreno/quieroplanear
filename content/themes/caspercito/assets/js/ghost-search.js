$("#search-field").ghostHunter({
    results   : "#results",
    onKeyUp  : true,
    zeroResultsInfo : false,
    result_template : "<a id='gh-{{ref}}' class='gh-search-item' href='{{link}}'><p><h2>{{title}}</h2><h4>{{pubDate format='D de MMMM de YYYY'}}</h4></p></a>"
});
