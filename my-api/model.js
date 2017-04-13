const pg = require('pg-promise')();

const db = pg(process.env.DATABASE_URL || 'postgres://student_22@localhost:5432/todos');

const Todo = {};

Todo.Create = (my_todo) => {
       return db.one('INSERT INTO todo(my_todo) VALUES($1) returning*', [my_todo])
}

Todo.Get = () => {
  return db.any('SELECT * FROM todo')
}



module.exports = Todo;
