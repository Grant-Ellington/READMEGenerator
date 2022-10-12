// TODO: Create a function that returns a license badge based on which license is passed in
//If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
} else if (license === 'GNU GLPv3'){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
} else {
    return ""
}
}

// TODO: Create a function that returns the license link
//If there is no license, return an empty string
function renderLicenseLink(license) { if(license === 'MIT'){
  return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
} else if (license === 'GNU GLPv3'){
  return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
} else {
  return ""}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `## Table of Contents
    * [License](*License)
    * [Title](*Title)
    * [Description](*Description)
    * [Installation](*Installation)
    * [Usage](*Usage)
    * [Contribution](*Contribution)
    * [Test](*Test)
    * [Technologies](*Technologies)
    * [Questions](*Questions)
    
    ## License
    
    
    # ${data.title} 
    ### ${data.name}
    ## Description
    
    ${data.synopsis}
    
    ## Installation
    
    ${data.installation}
    
    ## Usage Information
    
    ${data.usage}
    
    ## Contribution Guidlines
    
    ${data.contGuide}
    
    ## Test
    
    ${data.test}
    
    
    ## Techonologies
    Project is created with:
    * ${data.tech1}
    * ${data.tech2}
    * ${data.tech3}
    ## Set-up
    
    
    ## Questions
    ${data.gitUser}
    [${data.email}](${data.email})`









    

;
console.log(html)
}

module.exports = {generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection  }
