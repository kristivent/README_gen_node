// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ''
  if (license === 'mit') {
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'apache') {
    badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'gpl') {
    badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (!license || license === 'none') {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'none') {
    return '';
  } else if (license === 'mit') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'apache') {
    return 'https://opensource.org/license/apache-2-0';
  } else if (license === 'gpl') {
    return 'https://opensource.org/license/gpl-3-0';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'none') {
    return '';
  } else return `##License 
  This project is licensed under the [${license.toUpperCase()} license](${renderLicenseLink(license)}).`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ${renderLicenseSection(data.license)}

  ## Questions
  For any questions, please reach out via GitHub [${data.username}](https://github.com/${data.username}) or email at ${data.email}.
  `;
}

export default generateMarkdown;
