$("#search-field").ghostHunter({
    results   : "#results",
    onKeyUp  : true,
    zeroResultsInfo : false,
    result_template : "<a id='gh-{{ref}}' class='gh-search-item' href='{{link}}'><p><h2>{{title}}</h2><h4>{{pubDate}}</h4></p></a>",
    info_template : "<p>Número de posts encontrados: {{amount}}</p>",
});
