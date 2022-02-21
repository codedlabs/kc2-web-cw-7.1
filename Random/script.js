const project = {
  type: "tech",
  users: 1000000,
  biography() {
    return "Our company serves the blind who like to use tech products.";
  },
};

function randomProperty(x) {
  // Object of Keys
  // {0: "type", 1: "users", 2: "biography"}
  const keysObject = Object.keys(x);
  // Random Number between 0 and Object.length -1
  const randomNumber = Math.floor(Math.random() * Object.keys(x).length);
  // Print Random Object Property
  //   Key
  console.log(keysObject[`${randomNumber}`]);
  //   Value
  console.log(x[`${keysObject[`${randomNumber}`]}`]);
}

randomProperty(project);
