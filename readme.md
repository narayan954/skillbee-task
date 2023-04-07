# Bored API Activity Generator

This is a simple web application that generates a random activity using the Bored API. The application is built using Node.js and Handlebars, and can be used to generate any number of static HTML pages.

Getting Started
To use this application, first clone the repository to your local machine:

bash command
```
git clone https://github.com/yourusername/bored-api-activity-generator.git
```
Then, install the required dependencies:
```
npm install
```
To generate static pages, run the following command:

```
npm run generate
```

This will fetch 10 random activities in sequence from the Bored API, compile a Handlebars template, and generate an HTML page using the data and template. The generated pages will be saved in real time in the pages folder.

To generate any required number of pages, modify the generatePages function parameter in index.js to as many pages as you need (defaults 10).

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Bored API for providing the activity data
Handlebars for the templating engine
axios for the HTTP client
Node.js for the JavaScript runtime
