const getUsers = async () => {
  const userURL = `http://10.8.1.20:83/api/mis200users`;
  const response = await fetch(userURL);
  const data = await response.json();
  populateFields(data);
  return data;
};

const populateFields = async () => {
  const userURL = `http://10.8.1.20:83/api/mis200users`;
  const response = await fetch(userURL);
  const data = await response.json();

  $("#myTable").DataTable({
    data: data,
    columns: [
      { data: "userId" },
      { data: "userFullName" },
      { data: "userEmail" },
      { data: "role" },
    ],
  });

  //   var html = `<tbody>`;
  //   for (const user of data) {
  //     html += '<tr id="tableRow">';
  //     html += `<td>${user.userId}</td>`;

  //     html += `<td>${user.userFullName}</td>`;

  //     html += `<td>${user.userEmail}</td>`;

  //     html += `<td>${user.role}</td>`;
  //     html += "</tr>";
  //   }
  //   html += `</tbody>`;
  //   document.getElementById("tableBody").innerHTML = html;

  //console.log(html);
  //   var id = document.getElementById("userId");
  //   var html = `${data[0].userId}`;
  //   id.innerHTML = html;

  //   console.log(data[0]);
  //   var name = document.getElementById("userName");
  //   var html = `${data[0].userFullName}`;
  //   name.innerHTML = html;

  //   var email = document.getElementById("userEmail");
  //   var html = `${data[0].userEmail}`;
  //   email.innerHTML = html;

  //   var role = document.getElementById("userRole");
  //   var html = `${data[0].role}`;
  //   role.innerHTML = html;
};
