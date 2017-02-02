var ejs = require("can-ejs");
var ejsInstance = new ejs({
    text: "<h1><%= message %></h1>"
});
var string = ejsInstance.render({message: "Hello World"});
console.debug("output", string);
