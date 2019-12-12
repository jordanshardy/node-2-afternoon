//require express
const express = require("express");
//this gives index.js access to the messages_controllers file methods
const mc = require("./controllers/messages_controller");
//saving express to a variable
const app = express();
//setting up body parser to have access to req.body in our endpoints
app.use(express.json());

// creates a variable for the url so we dont have to write it out over and over
const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

//this sets the port the sever should listen on
const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
