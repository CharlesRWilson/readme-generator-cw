// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("rendering license badge...");
  const colors = ["blue", "green", "red"]
  if (license === "GPL" || license === "Apache" || license === "MIT") {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    console.log(randomColor);
    return `
        [img]: https://img.shields.io/badge/LICENSE-${license}-${randomColor}

    `
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log("rendering license link...");
  if (!license) {
    return '';
  }

  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GPL-3.0': 'https://www.gnu.org/licenses/gpl-3.0',
    'Apache-2.0': 'https://opensource.org/licenses/Apache-2.0',
  };

  return licenseLinks[license] || 'License not recognized';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log("rendering license section...");
  if (license === "GPL" || license === "Apache" || license === "MIT") {
    return `
        ## Section
    `
  }

  return `
      ## unknown license section
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

    ${renderLicenseBadge(data.license)}

    ## Description

    ${data.description}

    ## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    ${renderLicenseLink(data.license)}

    ## Installation

    ${data.installation}

    ## Usage

    ${data.usage}

    ## Contributing

    ${data.contributing}

    ## Tests

    ${data.tests}

    ## Questions

    If you have any questions about the project, you can contact me at [${data.email}](mailto:${data.email}). You can also find more of my work at [${data.github}](https://github.com/${data.github}).

    ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
