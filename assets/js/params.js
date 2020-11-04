/*
Stealing code from stack overflow since 2016
https://stackoverflow.com/questions/22607150/getting-the-url-parameters-inside-the-html-page
*/

window.onload = checkGbm;

function getURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

function checkGbm() 
{
    var from = getURLParameter('from');
    if (from == "gbm") {
        changeContact("gbm");
    }
}