function createElement(data) {
  const para = document.createElement("p");
  para.innerText = data;
  document.body.append(para);0
}

function queryWikipedia(callback) {
  let req = new XMLHttpRequest();

    if (this.readyState === 4 && this.status === 200)
    {
      document.getElementById('body').innerHTML = this.responseText
    }

    req.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
    req.send();
    req.onload = function() {
        callback(req.response)
    }
}

queryWikipedia(createElement);