// const input = document.getElementById("parInput");
const button = document.getElementById("inputBtn");
button.onclick = function(){
  //postFetch()
  getFetch()
}

const postUrl = "http://3.238.97.159:9090/request/new";
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
const getUrl = "http://3.238.97.159:9090/request/all";
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
  console.log(data, "data");
  data.forEach(addRow);
}

function addRow(data) {
  console.log(data, "row");
  const table = document.querySelector(".newsDataTable");
  let rowCount = table.rows.length;
  let row = table.insertRow(rowCount);

  let cell1 = row.insertCell(0)
  cell1.innerHTML = rowCount +1;

  let cell2 = row.insertCell(1);
  cell2.innerHTML = data.content + "<br>"
}
