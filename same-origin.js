console.log(
  "JS fetched from Same Origin during parsing of index.html document"
);

fetch("./css-in-js-same-origin.css")
  .then((response) => response.text())
  .then((data) => {
    console.log(`css-in-js-same-origin.css => \n ${data}`);
  });

fetch("./js-in-js-same-origin.js")
  .then((response) => response.text())
  .then((data) => {
    console.log(`js-in-js-same-origin.js => \n ${data}`);
  });

fetch("./img-in-js-same-origin.jpeg").then((data) => {
  console.log(`img-in-js-same-origin.jpeg`);
});
