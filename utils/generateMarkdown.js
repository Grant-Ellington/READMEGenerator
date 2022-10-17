// TODO: Create a function that returns a license badge based on which license is passed in
//If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    var badge = '(https://img.shields.io/badge/License- MIT-yellow.svg)'
    return badge
} else if (license === 'GNU GLPv3'){
    var badge = '(https://img.shields.io/badge/License-GPLv3-blue.svg)'
    return badge
} else {
    var badge = "";
    return badge
}
}

// TODO: Create a function that returns the license link
//If there is no license, return an empty string
function renderLicenseLink(license) { 
  if(license === 'MIT'){
  var link = '(https://opensource.org/licenses/MIT)'
  return link
} else if (license === 'GNU GLPv3'){
  var link = '(https://www.gnu.org/licenses/gpl-3.0)'
  return link
} else {
  return ""}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'MIT'){
    var licSec = `[![License: MIT]${renderLicenseBadge(license)}]${renderLicenseLink(license)}`
    return licSec
} else if (license === 'GNU GLPv3'){
    var licSec = `[![License: GPL v3]${renderLicenseBadge(license)}]${renderLicenseLink(license)}`
    return licSec
} else {
    var licSec= "";
    return licSec
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data,licSec) {
    return `## Table of Contents
  * [License](#License)
  * [Title](#Title)
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contribution](#Contribution)
  * [Test](#Test)
  * [Technologies](#Technologies)
  * [Questions](#Questions)
  
  ## License
  
  ${licSec}

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
}

module.exports = {generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection  }
