*****Node js***
NODE js --> is a runtime evnironment for Javascript.

NOde js is built on Chrome's V8 JS Engine.

Node js is Non-blocking Asynchronous function (This means while a process is being executed the program doesn't have to wait unitl teh process finished...)

you can run JS outside of the browser.
Js can talk to native machine because of C++.
you can create webservers in JS language.


*****Installation**
1. Go to nodejs.org
2. Download the LTS version (lts is a stable release fro production, where the lts means long term support)

3. After complete installation open the terminal and write node and enter to open nodejs interactive terminal

4. to check the version *****node --version**

*****Node Package Manager || NPM** 
A set of tools deal with modules & packages containig dependencies.
Dependencies are the code in the form of a libraby.

*****Two-functions of NPM***
1. Provide common line Interface CLI to publish and download pkg.

2. Behave as an online repository of JS Pkg.

*****Package-Manageer Responsibilities****
1. Automate: - finding, installing, upgrading, configuring, maintaining, Removing,

2. Pkg Manager: - Maintain a database of dependencies and versioning ||  - Ensures software have correct dependencies.

*****Package.Json file***
file is located in Project's root directory
NPM use pkg.json file to determine dependencies
Contain key value pairs that identify Project

   {
        "Project_name" : "clone_app",
        "version" : "18.0.1"
    }