const axios = require("axios");
const handlebars = require("handlebars");
const fs = require("fs");

// fetch data from API
const fetchData = async () => {
  const response = await axios.get("https://www.boredapi.com/api/activity");
  return response.data;
};

// compile Handlebars template
const compileTemplate = async () => {
  const templateSource = fs.readFileSync("template.hbs", "utf-8");
  return handlebars.compile(templateSource);
};

// generate static pages using data and template
const generatePages = async () => {
  const data = await fetchData();
  const template = await compileTemplate();
  const html = template({
    activity: data.activity,
    type: data.type,
    participants: data.participants,
    price: data.price,
  });
  fs.writeFileSync(`page.html`, html);
};

generatePages();
