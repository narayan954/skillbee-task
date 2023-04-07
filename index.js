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
const generatePages = async (numPages) => {
  const template = await compileTemplate();
  for (let i = 1; i <= numPages; i++) {
    const data = await fetchData();
    const html = template({
      activity: data.activity,
      type: data.type,
      participants: data.participants,
      price: data.price,
      link: data.link,
      key: data.key,
      accessibility: data.accessibility,
    });
    fs.writeFileSync(`pages/page${i}.html`, html);
  }
};

generatePages(10);
