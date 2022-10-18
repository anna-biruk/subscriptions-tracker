const {Router} = require("express");
const subscriptionController = require("../controllers/subscriptionsController")
const userController = require("../controllers/userController")
const sellersController = require("../controllers/sellersController")
const authMiddleware = require("../middlewares/authMiddleware");


const router = Router();

router.get("/list-items", authMiddleware, subscriptionController.getAllItems)
router.post("/list-items", authMiddleware, subscriptionController.createItem)
router.put("/list-items/:id", authMiddleware, subscriptionController.updateItem)
router.delete("/list-items/:id", authMiddleware, subscriptionController.deleteItem)

router.get("/sellers",authMiddleware,sellersController.getAllSellers)

router.post("/users", userController.createUser)
router.post("/session", userController.signIn)

module.exports = router