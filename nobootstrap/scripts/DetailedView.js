
var jsonObject = JSON.parse(localStorage.getItem("sentArticle"));

var text = '<br><br><br>';
if (jsonObject.author == null || jsonObject.author == '') text += '<p>Written by: Unknown</p>';
else text += '<p>Written by: ' + jsonObject.author + '</p>';
text += '<p>Published at: ' + (jsonObject.publishedAt.replace("T", " ")).replace("Z", " ") + '</p>';
text += '<h1>' + jsonObject.title + '</h1>';
text += '<img class="imgcenter" src=' + jsonObject.urlToImage + '>';
text += '<h4>' + jsonObject.description + '</h4>';
text += '<p>For more information click <a href="' + jsonObject.url + '">here</a></p>';
text += '<br><br>';

document.getElementById("Article").innerHTML = text;