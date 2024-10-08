const { contact } = require("./../model");

module.exports.createContact = (req, res) => {
  const { body } = req;

  const createdContact = contact.createContact(body);

  res.status(201).send(createdContact);
};

module.exports.getContacts = (req, res) => {
  const { page, results } = req.query;
  const foundContacts = contact.getContacts(page, results);
  res.status(200).send(foundContacts);
};

module.exports.getContactById = (req, res) => {
  const { id } = req.params;
  const foundContacts = contact.getContactById(id);

  if (!foundContacts) {
    return res.status(404).send("Contact not found");
  }

  res.status(200).send(foundContacts);
};

module.exports.updateContactById = (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const updatedContact = contact.updateContact(id, body);

  if (!updatedContact) {
    return res.status(404).send("Contact Not Found");
  }

  res.status(200).send(updatedContact);
};

module.exports.deleteContactById = (req, res) => {
  const { id } = req.params;

  const deletedContact = contact.deleteContact(id);

  if (!deletedContact) {
    return res.status(404).send("Contact Not Found");
  }

  res.status(204).send();
};
