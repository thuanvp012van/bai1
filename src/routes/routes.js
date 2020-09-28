const dashboard=require('./dashboard/index');
const student=require('./student/student');

function routes(app) {
  app.use("/", dashboard);

  app.use('/student',student);
}

module.exports = routes;
