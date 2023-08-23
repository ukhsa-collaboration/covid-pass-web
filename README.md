# Covid Pass Front End

The NHS COVID Pass lets you share your coronavirus (COVID-19) status records in a secure way.

It allows you to show others the details of your COVID-19 status when travelling abroad to some countries or territories. NHS Front End COVID Pass – is a Web Application run on JavaScript/[next.js](https://nextjs.org/) application that can be used to get COVID-19 tests/vaccination results and the NHS COVID-19 certificate

## Prerequisites

### **Install GIT**

GIT is used for version/source control.

GIT can be installed from here: [https://git-scm.com/](https://git-scm.com/)

You will be prompted to answer a series of questions when installing GIT on Windows. You should select the following two configuration options where possible (otherwise use the default selected):

- Checkout as-is, commit as-is.
- Git Credential Manager for Windows

You will also need to install: 
- [Node.js](https://nodejs.org) version 12.0 or greater on your system to run the code which also comes with npm.  
- A text editor (i.e. [Visual Studio Code](https://code.visualstudio.com/))

### **How to get started**

To clone the repository:

1. Open a new CMD instance (if installed use git bash) and navigate to the destination directory where you'd like the cloned repository to exist. If necessary, create this folder first.
2. Execute the command: git clone https://github.com/ukhsa-collaboration/covid-pass-web.git

## For More Information

If you have further questions about the NHS COVID Pass Letter or email service please email covidcertstatuspmo@nhsbsa.nhs.uk

**Link to the licence file**

https://github.com/ukhsa-collaboration/covid-pass-web/blob/main/LICENSE


### Gitleaks Setup
Gitleaks is implemented in this repo. Gitleaks will scan any commit against a list of regex rules to scan. Please follow these steps to setup Gitleaks:
- Install Pre-commit to enable the gitleaks hook

```
pip install pre-commit
or
py -m pip install pre-commit
```
- Enable Auto Updates for pre-commit/gitleaks
```
pre-commit autoupdate
```
- Install Gitleaks trough pre-commit
```
pre-commit install
```
A gitleaks scan will now run automatically on every commit.