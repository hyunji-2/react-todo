const { Todo } = require('../../model');

/* todo 모두 조회 */
exports.find = (req, res) => {
  Todo.find({}).exec((err, data) => {
    if (err) throw new Error(err);
    res.send(data);
  });
}

/* todo 1개 조회 */
exports.findOne = (req, res) => {
  const _id = req.params.id;

  Todo.findOne({ _id }).exec((err, data) => {
    if (err) throw new Error(err);
    res.send(data);
  });
}

/* todo 추가 */
exports.create = (req, res) => {
  const data = req.body;
  const todo = new Todo(data);

  todo.save((err, data) => {
    if (err) throw new Error(err);
    res.send(data);
  });
}

/* todo 수정 */
exports.update = (req, res) => {
  const data = req.body;
  const _id = req.params.id;

  Todo.update({ _id }, data).exec((err, data) => {
    if (err) throw new Error(err);
    res.send(data);
  });
}

/* todo 삭제 */
exports.remove = (req, res) => {
  const _id = req.params.id;

  Todo.remove({ _id }).exec((err, data) => {
    if (err) throw new Error(err);
    res.send(data);
  });
}