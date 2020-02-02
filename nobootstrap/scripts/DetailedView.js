
var jsonObject = JSON.parse(localStorage.getItem("sentArticle"));

var text = '<br><br><div class=""';
if (jsonObject.author == null || jsonObject.author == '') text += '<p>Written by: Unknown</p>';
else text += '<p>Written by: ' + jsonObject.author + '</p>';
text += '<p>Published at: ' + (jsonObject.publishedAt.replace("T", " ")).replace("Z", " ") + '</p>';
text += '<h1>' + jsonObject.title + '</h1>';
text += '<div class=""><img class="" src=' + jsonObject.urlToImage + '></div>';
text += '<h4>' + jsonObject.description + '</h4>';
text += '<br>';
text += '<p>For more information click <a href="' + jsonObject.url + '">here</a></p>';
text += '</div><br><br>';

document.getElementById("Article").innerHTML = text;