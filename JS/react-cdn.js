const parent = document.getElementById("root");
const element = React.createElement(
  "h1",
  { style: { color: "red" } },
  "Hello World"
);
const element2 = React.createElement(
  "h2",
  { style: { color: "red" } },
  "Shopping cart"
);

const listElem1 = React.createElement(
  "li",
  { style: { color: "red" } },
  "Laptop"
);

const listElem2 = React.createElement(
  "li",
  { style: { color: "red" } },
  "Mobile"
);

const ul = React.createElement(
  "ul",
  { style: { color: "red" } },
  listElem1,
  listElem2
);

let elem = <p>This is a paragraph</p>;

const root = ReactDOM.createRoot(parent);
root.render([element, element2, ul, elem]);
