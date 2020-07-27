function addRow() {
          
    var myName = document.getElementById("name");
    var mylocality = document.getElementById("locality");

    var myemail = document.getElementById("email");

    var mycontact = document.getElementById("contactus");

    var mydate = document.getElementById("date");

    var myNumber = document.getElementById("number");

    var Event = document.getElementById("event");
    var Info = document.getElementById("info");

    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= myName.value;
    row.insertCell(2).innerHTML= mylocality.value;
    row.insertCell(3).innerHTML= myemail.value;
    row.insertCell(4).innerHTML= mycontact.value;
    row.insertCell(5).innerHTML= mydate.value;
    row.insertCell(6).innerHTML= myNumber.value;
    row.insertCell(7).innerHTML= Event.value;
    row.insertCell(8).innerHTML= Info.value;
 
}
function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
} 
function load() {
    
    console.log("Page load finished");
 
}
