const getUsers = async () => {
  const userURL = `http://10.8.1.20:83/api/mis200users`;
  const response = await fetch(userURL);
  const data = await response.json();
  populateFields(data);
  return data;
};

function populateFields(data) {
  for (let i = 0; i < data.Length; i++) {
    var id = document.getElementById("userId");
    var html = `${data[i].userId}`;
    id.innerHTML = html;
    console.log(data[i]);

    var name = document.getElementById("userFullName");
    var html = `${data[i].userName}`;
    name.innerHTML = html;

    var email = document.getElementById("userEmail");
    var html = `${data[i].userEmail}`;
    email.innerHTML = html;

    var role = document.getElementById("role");
    var html = `${data[i].role}`;
    role.innerHTML = html;
  }
  //   console.log(data);
  //   data[0].array.forEach((element) => {
  //     console.log(element);
  //     var id = document.getElementById("userId");
  //     var html = `${element[0].userId}`;
  //     id.innerHTML = html;

  //     var name = document.getElementById("userFullName");
  //     var html = `${data[element].userName}`;
  //     name.innerHTML = html;

  //     var email = document.getElementById("userEmail");
  //     var html = `${data[element].userEmail}`;
  //     email.innerHTML = html;

  //     var role = document.getElementById("role");
  //     var html = `${data[element].role}`;
  //     role.innerHTML = html;
  //   });
  // var id = document.getElementById("userId");
  // var html = `${data[0].userId}`;
  // id.innerHTML = html;

  // var name = document.getElementById("userFullName");
  // var html = `${data[0].userName}`;
  // name.innerHTML = html;

  // var email = document.getElementById("userEmail");
  // var html = `${data[0].userEmail}`;
  // email.innerHTML = html;

  // var role = document.getElementById("role");
  // var html = `${data[0].role}`;
  // role.innerHTML = html;
}
