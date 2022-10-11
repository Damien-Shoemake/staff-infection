//HTML and CSS (for the most part) taken from bootstrap snippets in the docs of getbootstrap.com


 
  // Loops through the answers array, creates HTML, then combines the entirety of the HTML together
  const employeesHtml = arr => {
    let employeeHtml = ''
  
    for ( i = 0; i < arr.length; i++ ) {
      if (arr[i].getRole() === "Manager"){
        employeeHtml = employeeHtml + managerHtml(arr[i])
      }
      if (arr[i].getRole() === "Engineer"){
        employeeHtml = employeeHtml + engineerHtml(arr[i])
      }
      if (arr[i].getRole() === "Intern"){
        employeeHtml = employeeHtml + internHtml(arr[i])
      }
    } return employeeHtml
  }
  
  // html page template
  const generateTemplate = data => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Domine:wght@400;700&family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
      <link rel="stylesheet" href="./style.css">
      <title>Team Generator</title>
      </head>
      <body>
        <header class= "container">
          <div class= "flex box justify-center my-team">
            <h1>Generated Team</h1>
          </div>
        </header>
        <main class= "container">
        ${employeesHtml(data)}
        </main>
      </body>
    </html>
  `
  }

//manager
const managerHtml = managerData => {

  return `
     <div class="card">
     <h5 class="card-header">${managerData.getName()}, Employee ID: ${managerData.getId()}</h5>
     <div class="card-body">
       <h5 class="card-title">${managerData.getRole()} located in office ${managerData.getOfficeNumber()}</h5>
       <a href="mailto:${managerData.getEmail()}" class="btn btn-primary">Email</a>
     </div>
   </div>`
}


//engineer
const engineerHtml = engineerData => {
  return `
   <div id="engineers" class="card text-bg-primary mb-3" style="max-width: 18rem;">
     <div class="card-header">${engineerData.getName()}, Employee ID: ${engineerData.getId()}</div>
     <div class="card-body">
       <h5 class="card-title">${engineerData.getRole()} </h5>
       <p class="card-text">Probably debugging code as you're reading this.</p>
       <a href="github.com/${engineerData.getGithub()}" target="_blank" class="btn btn-secondary">Github Page</a>
     </div>
   </div>`
}


//interns
const internHtml = internData => {
  return `
  <div class="card text-bg-info mb-3" style="max-width: 18rem;">
  <div class="card-header">${internData.getName()}, Employee ID: ${internData.getId()}</div>
  <div class="card-body">
  <h5 class="card-title">${internData.getRole()} from ${internData.getSchool()}</h5>
  <p class="card-text">Working hard to become a full stack enginner some day!</p>
  </div>
  </div> `
}


module.exports = generateTemplate;