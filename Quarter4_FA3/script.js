// Task 1
function askNumber() {
    let num;
    do {
      num = prompt("Enter a number:");
    } while (isNaN(num) || num === "");
    
    num = parseInt(num);
    let output = `Number inputted: ${num}<br>`;
    
    if (num % 2 === 1) {
      for (let i = num; i >= 1; i--) {
        for (let j = 0; j < num; j++) {
          output += i + " ";
        }
        output += "<br>";
      }
    } else {
      for (let i = num; i >= 1; i--) {
        for (let j = 0; j < i; j++) {
          output += i + " ";
        }
        output += "<br>";
      }
    }
  
    document.getElementById("output").innerHTML = output;
  }
  
  // Task 2
  let contacts = [];
  
  function addContact() {
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value.trim();
    if (name === "") return;
  
    if (contacts.length === 7) {
      contacts.shift(); // remove first
    }
    contacts.push(name);
    nameInput.value = "";
    updateContacts();
  }
  
  function removeContact() {
    contacts.pop(); // remove last
    updateContacts();
  }
  
  function updateContacts() {
    document.getElementById("contacts").innerHTML = contacts.join(" ");
  }