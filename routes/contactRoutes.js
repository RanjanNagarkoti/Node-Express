const express = require("express");
const router = express.Router();
const {
  getContacts,
  storeContacts,
  showContacts,
  updateContacts,
  deleteContacts,
} = require("../controllers/contactController");

router.route("/").get(getContacts).post(storeContacts);

router
  .route("/:id")
  .get(showContacts)
  .put(updateContacts)
  .delete(deleteContacts);

module.exports = router;
