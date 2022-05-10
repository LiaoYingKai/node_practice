const express = require("express");
const router = express.Router();
const controller = require("./controller");
const middleware = require("./middleware");

router.use(middleware.addLog);

router.get("/list", controller.list);

router.get("/:productId", middleware.checkId, controller.get);

router.post("/", middleware.checkBody, controller.post);

router.put(
  "/:productId",
  middleware.checkId,
  middleware.checkBody,
  controller.update
);

router.delete("/:productId", middleware.checkId, controller.remove);

module.exports = router;
