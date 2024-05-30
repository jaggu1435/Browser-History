
document.addEventListener("DOMContentLoaded", () => {
    var row = 1;
  
    var add = document.getElementById("add");
    add.addEventListener("click", displayDetails);
  
    function displayDetails() {
      var firstName = document.getElementById("firstName").value;
      var lastName = document.getElementById("lastName").value;
      var age = document.getElementById("age").value;
  
      if (!firstName || !lastName || !age) {
        alert("Please fill all the fields");
        return;
      }
  
      var display = document.getElementById("display").getElementsByTagName("tbody")[0];
      if (!display) {
        display = document.createElement("tbody");
        document.getElementById("display").appendChild(display);
      }
  
      var newRow = display.insertRow(display.rows.length);
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      var cell3 = newRow.insertCell(2);
      var cell4 = newRow.insertCell(3);
  
      cell1.innerHTML = firstName;
      cell2.innerHTML = lastName;
      cell3.innerHTML = age;
      cell4.innerHTML = `<button onclick="onEdit(this)">Edit</button>
                         <button onclick="onDelete(this)">Delete</button>`;
  
      row++;
    }
  
    window.onEdit = function(td) {
      selectedRow = td.parentElement.parentElement;
      document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
      document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
      document.getElementById("age").value = selectedRow.cells[2].innerHTML;
    }
  
    window.onDelete = function(td) {
      if (confirm("Are you sure you want to delete this row?")) {
        var row = td.parentElement.parentElement;
        document.getElementById("display").deleteRow(row.rowIndex);
        resetForm();
      }
    }
  
    function resetForm() {
      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
      document.getElementById("age").value = "";
      selectedRow = null;
    }
  });
  