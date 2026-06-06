const form = document.querySelector("#eventForm");
const loginType = document.querySelector("#type");
const userIDContainer = document.querySelector("#userIDContainer");
const userID = document.querySelector("#userID");
const output = document.querySelector("#output");

function updateUserIDField()
{
    const value = loginType.value;
    

    if (value == "student" || value == "guest")
    {
        userIDContainer.hidden = false
        userID.required = true
    }
    else
    {
        userIDContainer.hidden = true
        userID.required = false
    }
    
    if (value == "guest") {
        document.getElementById("userIDContainer").children[0].innerText = "Guest ID" ;
    }
    else if (value == "student") {
        document.getElementById("userIDContainer").children[0].innerText = "Student I#" 
    }
     
}

loginType.addEventListener("change", updateUserIDField);
updateUserIDField();

function isPastDate(value) {
    const today = new Date();
    const chosenDate = new Date(value);
    return chosenDate < today;
}

form.addEventListener("submit", function (value) {
      event.preventDefault();
    output.textContent = "";
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const loginValue = form.type.value.trim();
    const eventDate = form.eventDate.value.trim();
    const idValue = form.userID.value.trim();

    if (loginValue == "student" && idValue.length != 9) {
        output.textContent = "Student I# must be 9 digits.";
        return;
    }
    
    else if (loginValue == "guest" && idValue != "EVENT131") {
        output.textContent = "Incorrect ID code";
        return;
    }
    if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }
     
    output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>Name: ${firstName} ${lastName}</p>
  <p>Preference Level: ${loginValue}</p>
  <p>Event Date: ${eventDate}</p>
  `;

  form.reset();
  updateUserIDField();
    
});