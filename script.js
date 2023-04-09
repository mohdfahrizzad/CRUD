var selectedRow = null;
function onFromSubmit(){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
        
    }
    resetForm();

}

function readFormData(){
    var formData = {};
    formData["nama"] = document.getElementById("nama").value;
    formData["username"] = document.getElementById("username").value;
    formData["noTelefon"] = document.getElementById("noTelefon").value;
    formData["email"] = document.getElementById("email").value;
    formData["alamat"] = document.getElementById("alamat").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("userList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.nama;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.username;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.noTelefon;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.email;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.alamat;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = '<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>'
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('nama').value = selectedRow.cells[0].innerHTML;
    document.getElementById('username').value = selectedRow.cells[1].innerHTML;
    document.getElementById('noTelefon').value = selectedRow.cells[2].innerHTML;
    document.getElementById('email').value = selectedRow.cells[3].innerHTML;
    document.getElementById('alamat').value = selectedRow.cells[4].innerHTML;

}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.nama;
    selectedRow.cells[1].innerHTML = formData.username;
    selectedRow.cells[2].innerHTML = formData.noTelefon;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.alamat;
}

function onDelete(td){
    if(confirm('Do you want to delete this record?')){
    row = td.parentElement.parentElement;
    document.getElementById('userList').deleteRow(row.rowIndex)
    }
    resetForm();
}

function resetForm(){
    document.getElementById('nama').value='';
    document.getElementById('username').value='';
    document.getElementById('noTelefon').value='';
    document.getElementById('email').value='';
    document.getElementById('alamat').value='';
}