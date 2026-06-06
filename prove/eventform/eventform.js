const form = document.querySelector("#eventForm");
const loginType = document.querySelector("#type");
const studentIDContainer = document.querySelector("#studentIDContainer");
const studentID = document.querySelector("#studentID");
const output = document.querySelector("#output");

function updateStudentIDField()
{
    const value = loginType.value;

    if (value == "student")
    {
        studentIDContainer.hidden = false
        studentID.required = true
    }
    else 
    {
        studentIDContainer.hidden = true
        studentID.required = false
    }
     
}

