fetch('https://dummyjson.com/users')
.then(data=>data.json())
.then(data=>{
    let tab="";
    data.users.forEach(function(user) {
      tab += `<tr>
      <td>${user.firstName}</td>
      <td>${user.age}</td>
      <td>${user.gender}</td>
      <td>${user.phone}</td>
      <td>${user.address}</td>
      </tr>`;
    });
    document.getElementById('tbody').innerHTML = tab;

    $('#userTable').DataTable({
      "data": data.users,
      "columns": [
        {data: null,
        render: data => data.firstName + ' ' + data.lastName + ' ' + data.maidenName,
      editField: ['firstName', 'lastName', 'maidenName']},
        {"data": 'age'},
        {"data": 'gender'},
        {"data": 'phone', orderable: false},
        {data: null,
        render: data => data.address.city + ', ' + data.address.address,
      editField: ['address.city', 'address.address']},
      ]
    })
  })
