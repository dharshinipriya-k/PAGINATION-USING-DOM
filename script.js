let pagenum = 1;
//------Creating title and description about the task
const title = document.createElement("h1");
title.setAttribute("id", "title");
title.innerText = "Pagination Task";
document.body.appendChild(title);

const desc = document.createElement("p");
desc.setAttribute("id", "description");
desc.innerText =
  "In this task, pagination is created to display data from json objects in a table format without bootstrap and all tags are created in a script file only";
document.body.appendChild(desc);

//Creating Table to display the data from JSON

const div = document.createElement("div");
document.body.append(div);
div.setAttribute("class", "table-responsive");

const table = document.createElement("table");
table.classList.add("table", "table-bordered");
table.setAttribute("id", "tab");
div.appendChild(table);

const thead = document.createElement("thead");
table.appendChild(thead);
thead.innerHTML = `
    <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>Email</th>
    </tr>`;

const tbody = document.createElement("tbody");
table.appendChild(tbody);

const sample = document.createElement("p");
document.body.appendChild(sample);

//----------Creating Pagination-------

const pagediv = document.createElement("div");
const page = document.createElement("div");
pagediv.append(page);
page.innerHTML = ` 

<a  id="first">1</a>

<a  id="two">2</a>
<a  id="three">3</a>
<a  id="four">4</a>
<a  id="five">5</a>

`;
// div.append(pagediv);
document.body.appendChild(pagediv);
pagediv.setAttribute("id", "pagediv");
page.setAttribute("id", "page");

//Paging Events

//Default display
for (let i = 0; i < 10; i++) {
  let row = document.createElement("tr");
  let data1 = document.createElement("td");
  let data2 = document.createElement("td");
  let data3 = document.createElement("td");

  data1.innerHTML = data[i].id;
  data2.innerHTML = data[i].name;
  data3.innerHTML = data[i].email;

  row.appendChild(data1);
  row.appendChild(data2);
  row.appendChild(data3);

  tbody.append(row);
  // document.getElementById("first").setAttribute("class","active")
  // tbody.insertRow(row);
}

const first = document.getElementById("first");
first.addEventListener("click", () => {
  // pagenum = 2;
  let empty = document.querySelector("tbody");
  empty.innerHTML = " ";

  for (let i = 0; i < 10; i++) {
    // table.value = "";
    let row = document.createElement("tr");
    let data1 = document.createElement("td");
    let data2 = document.createElement("td");
    let data3 = document.createElement("td");

    data1.innerHTML = data[i].id;
    data2.innerHTML = data[i].name;
    data3.innerHTML = data[i].email;

    row.appendChild(data1);
    row.appendChild(data2);
    row.appendChild(data3);

    tbody.append(row);
    // document.getElementById("first").setAttribute("class","active")
  }
});

// Second page
const sec = document.getElementById("two");
sec.addEventListener("click", () => {
  pagenum = 2;
  let empty = document.querySelector("tbody");
  empty.innerHTML = " ";
  for (let i = 10; i < 20; i++) {
    table.value = "";
    let row = document.createElement("tr");
    let data1 = document.createElement("td");
    let data2 = document.createElement("td");
    let data3 = document.createElement("td");

    data1.innerHTML = data[i].id;
    data2.innerHTML = data[i].name;
    data3.innerHTML = data[i].email;

    row.appendChild(data1);
    row.appendChild(data2);
    row.appendChild(data3);

    tbody.append(row);
    //  document.getElementById("two").setAttribute("class","active")
  }
});

// Third page
const three = document.getElementById("three");
three.addEventListener("click", () => {
  pagenum = 3;
  let empty = document.querySelector("tbody");
  empty.innerHTML = " ";
  for (let i = 20; i < 30; i++) {
    table.value = "";
    let row = document.createElement("tr");
    let data1 = document.createElement("td");
    let data2 = document.createElement("td");
    let data3 = document.createElement("td");

    data1.innerHTML = data[i].id;
    data2.innerHTML = data[i].name;
    data3.innerHTML = data[i].email;

    row.appendChild(data1);
    row.appendChild(data2);
    row.appendChild(data3);

    tbody.append(row);
  }
});

// Fourth page
const four = document.getElementById("four");
four.addEventListener("click", () => {
  pagenum = 4;
  let empty = document.querySelector("tbody");
  empty.innerHTML = " ";
  for (let i = 30; i < 40; i++) {
    table.value = "";
    let row = document.createElement("tr");
    let data1 = document.createElement("td");
    let data2 = document.createElement("td");
    let data3 = document.createElement("td");

    data1.innerHTML = data[i].id;
    data2.innerHTML = data[i].name;
    data3.innerHTML = data[i].email;

    row.appendChild(data1);
    row.appendChild(data2);
    row.appendChild(data3);

    tbody.append(row);
  }
});

// Fifth page
const five = document.getElementById("five");
five.addEventListener("click", () => {
  pagenum = 5;
  let empty = document.querySelector("tbody");
  empty.innerHTML = " ";
  for (let i = 40; i < 50; i++) {
    table.value = "";
    let row = document.createElement("tr");
    let data1 = document.createElement("td");
    let data2 = document.createElement("td");
    let data3 = document.createElement("td");

    data1.innerHTML = data[i].id;
    data2.innerHTML = data[i].name;
    data3.innerHTML = data[i].email;

    row.appendChild(data1);
    row.appendChild(data2);
    row.appendChild(data3);

    tbody.append(row);
  }
});
