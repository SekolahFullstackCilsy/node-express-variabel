const data = require("../databases/data");

exports.getTodos = (req, res, next) => {
  res.status(200).json({
    message: "Success get todos",
    data: data,
  });
};

exports.insertTodo = (req, res, next) => {
  const length = data.length;

  const endOfData = data[length - 1];

  const id = endOfData.id + 1;

  const dataToInsert = {
    id: id,
    todo: req.body.todo,
  };

  data.push(dataToInsert);

  res.status(201).json({
    message: "Success create todo",
    data: data,
  });
};

exports.updateTodo = (req, res, next) => {
  const indexData = data.findIndex((val) => val.id === parseInt(req.params.id));

  if (indexData === -1) {
    return res.status(404).json({
      message: "Todo not found",
    });
  }

  data[indexData].todo = req.body.todo;

  res.status(201).json({
    message: "Success update todo",
    data: data,
  });
};

exports.deleteTodo = (req, res, next) => {
  const indexData = data.findIndex((val) => val.id === parseInt(req.query.id));

  data.splice(indexData, 1);

  res.status(201).json({
    message: "Success delete todo",
    data: data,
  });
};
