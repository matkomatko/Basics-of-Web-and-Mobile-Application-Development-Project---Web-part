
var url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=0f2a5abc1ac1464fafb1ba014d50e0ea';
var jsonText = [];

function SendJson(index) {
    localStorage.setItem("sentArticle", jsonText[index]);
}

async function getNews() {

    function ReturnArticle(i) {
        jsonText.push(JSON.stringify(data.articles[i]));
        return articleString = '<div class="col-md-6 p-3"><div class="p-3 border"><a class="ArticleLink" onclick="SendJson(' + i + ')" href="pages/DetailedView.html"><h2 class="overflow">' + data.articles[i].title + '</h2><img width="100%" height="400" src=' + data.articles[i].urlToImage + '></a></div></div>';
    }

    const response = await fetch(url);
    const data = await response.json();

    var text = '<br><br><div class="row">';
    for (var i = 0; i < 8; i++) {
        text += ReturnArticle(i);
    }
    text += '</div><br><br>';

    document.getElementById('Articles').innerHTML = text;
}

getNews();