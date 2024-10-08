const express = require("express");
const { contactsController } = require("./controllers");

const app = express();

app.use(express.json());

app.get("/contacts", contactsController.getContacts);

app.post("/contacts", contactsController.createContact);

app.get("/contacts/:id", contactsController.getContactById);

app.patch("/contacts/:id", contactsController.updateContactById);

app.delete("/contacts/:id", contactsController.deleteContactById);

module.exports = app;
