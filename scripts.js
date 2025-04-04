//Using the onsubmit event Listener

// 1 select the form and output div
const form = document.getElementById("registration-form");
const output = document.getElementById("formDataOutput");

// 2 Create the function to display the form data in the output
function showFormData(event) {
  event.preventDefault(); // Prevents page refresh

  // Get values from inputs

  // First Name, last name, email, password, bday, language
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const language = document.querySelector(
    'input[name="language"]:checked'
  )?.value;

  output.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>password:</strong> ${password}</p>
        <p><strong>Language:</strong> ${language}</p>
    `;
}

// 3 Add the event listener for form submission
form.addEventListener("submit", showFormData);
