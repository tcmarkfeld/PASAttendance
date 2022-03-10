const getUsers = async () => {
  const userURL = `http://10.8.1.20:83/api/mis200users`;
  const response = await fetch(userURL);
  const data = await response.json();
  populateFields(data);
  return data;
};

const populateFields = async () => {
  const userURL = `http://10.8.1.20:83/api/misusers`;
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
    buttons: ["csv", "excel", "pdf", "print"],
  });
};

const populateParticipationFields = async () => {
  const userURL = `http://10.8.1.20:83/api/misparticipation`;
  const response = await fetch(userURL);
  const data = await response.json();
  console.log(data);
  $("#myTable").DataTable({
    data: data,
    columns: [
      { data: "userID" },
      { data: "userFullName" },
      { data: "eventID" },
      { data: "category" },
      { data: "scanTime" },
    ],
    buttons: ["csv", "excel", "pdf", "print"],
  });
};
