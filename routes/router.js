const { Router } = require("express");

const todoController = require("../controllers/todo-controller");

const router = Router();

router.get("/todos", todoController.getTodos);
router.post("/todo", todoController.insertTodo);
router.patch("/todo/:id", todoController.updateTodo);
router.delete("/todo", todoController.deleteTodo);

module.exports = router;
