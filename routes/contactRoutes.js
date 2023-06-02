const express= require("express")
const router = express.Router();
const controllers = require("../controllers/contactControllers")

router.post("/newcontact",controllers.postContact)
router.get("/",controllers.getcontacts)
router.get("/:id",controllers.getContactByID)
router.delete("/:id",controllers.deletecontactById)
router.put("/:id",controllers.updateContact)


module.exports = router