// array to keep track of all the messages
let messages = [];
// a variable to set initial id to 0
let id = 0;

//module.exports is exporting an object and importing the controller into index.js and setting up routes
module.exports = {
  create: (req, res) => {
    //create a new message object using text and time from the req.body (object destructuring)
    const { text, time } = req.body;
    // pushing the message object with id, text and time to the messages array
    messages.push({ id, text, time });
    //increasing id by 1 each time the code runs to push different messages on to the array
    id++;
    res.status(200).send(messages);
  },

  read: (req, res) => {
    // returning the messages array
    res.status(200).send(messages);
  },

  update: (req, res) => {
    //updating the text property of message using the text value from req.body
    const { text } = req.body;
    // chooses the message to update based on the message/object id from the request URL PARAMETERS
    const updateID = req.params.id;
    // set a variable that gets the index where the id's match the request
    const messageIndex = messages.findIndex(message => message.id == updateID);
    //set a new varible to equal the messages array index
    let message = messages[messageIndex];

    //get the message object using the index and update the object
    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };
    res.status(200).send(messages);
  },

  delete: (req, res) => {
    //setting a variable to the message id so we can delete it
    const deleteID = req.params.id;
    //finding the index of the message so we can delete it
    const messageIndex = messages.findIndex(message => message.id == deleteID);
    // splicing out the message we want to delete
    messages.splice(messageIndex, 1);
    //sending the update to the messages array
    res.status(200).send(messages);
  }
};
