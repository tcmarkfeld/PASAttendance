$(document).ready(function () {
  $("#myTable").DataTable();
});

async function loadUsers() {
  const userDataAPI = "";
  var response = await fetch(userDataAPI);
  const json = await response.json();
  for (const data of json) {
    var html = `<td>${data.userID}</td><td>${data.userFullName}</td><td>${data.userEmail}</td><td>${data.role}</td>`;
  }
  document.getElementById("tableRow").innerHTML = html;
}

async function loadParticipation() {
  const userDataAPI = "";
  var response = await fetch(userDataAPI);
  const json = await response.json();
  for (const data of json) {
    var html = `<td>${data.userID}</td><td>${data.userFullName}</td><td>${data.userEmail}</td><td>${data.role}</td>`;
  }
  document.getElementById("tableRow").innerHTML = html;
}
