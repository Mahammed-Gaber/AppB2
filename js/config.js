// const domain = {
//   local: "http://localhost/appbuilder/", // "https://app.rar-it.link/" or "http://localhost/appbuilder/"
// };


const environment = "local";

const domain = {
  local: "http://localhost/appbuilder/",
  // production: "https://app.rar-it.link/"
};

const currentDomain = domain[environment];

