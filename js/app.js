var searchTerm = $(this).attr('data-name');
var NumberRecords 
var startYear 
var endYear
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&fq=pub_year:(%22"+ startYear + "%22)&api-key=8tetUGeUgnAa4G0tymczZyLkjlNSUTDx";