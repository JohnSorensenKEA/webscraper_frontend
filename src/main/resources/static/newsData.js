// const input = document.getElementById("parInput");
const button = document.getElementById("inputBtn");
button.onclick = function(){
  postFetch()
  getFetch()
}

const postUrl = "http://localhost:8080/request/new";
const postRequestOption = {
  headers: {
    "Content-type": 'application/json'
  },
  method: 'POST',
  redirect: 'follow',
  body: '{ "link": "https://news.ycombinator.com", "parameter": "a.storylink" }'
};


function postFetch() {
  fetch(postUrl, postRequestOption)
    .then(response => response.json())

}
const getUrl = "http://localhost:8080/request/all";
const getRequestOption = {
  headers: {
    "Content-type": 'application/json'
  },
  method: 'GET',
  redirect: 'follow',
};

function getFetch() {
fetch(getUrl, getRequestOption)
  .then(response => response.json())
  .then(data => gotData(data));
}

function gotData(data){
  data.forEach(addRow);
}

function addRow(data) {
  const table = document.querySelector(".newsDataTable");
  let rowCount = table.rows.length;
  let row = table.insertRow(rowCount);

  let cell1 = row.insertCell(0)
  cell1.innerHTML = rowCount +1;

  let cell2 = row.insertCell(1);
  cell2.innerHTML = data.content + "<br>"
}