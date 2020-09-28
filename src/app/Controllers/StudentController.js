const Student = require("../Models/Student");
const {
  convertMultiMongooseToObject,
  convertMongooseToObject,
} = require("../../utils/mongoose");
const { convertBasicDate } = require("../../utils/Date");
const { asset } = require("../../utils/Http");
const jwt = require("jsonwebtoken");

//[GET] /student
class StudentController {
  index(req, res, next) {
    Student.find({})
      .then((students) => {
        students = convertMultiMongooseToObject(students);
        students.forEach((student) => {
          student.birthday = convertBasicDate(student.birthday);
          student.image = asset(req, `img/${student.image}`);
        });
        res.render("student/view_all", { students: students });
      })
      .catch(next);
  }

  //[GET] /student/:id
  show(req, res) {
    Student.findById(req.params.id)
      .then((student) => {
        student = convertMongooseToObject(student);
        student.birthday = convertBasicDate(student.birthday);
        res.send(student);
      })
      .catch(res.json("lỗi server"));
  }

  //[GET] /student/create
  create(req, res, next) {
    res.render("student/create");
  }

  //[POST] /student/create
  store(req, res, next) {
    Student.create(req.body).then(res.send("thành công")).catch(next);
  }

  jwt(req, res, next) {
    // let token = jwt.sign({
    //   exp:Math.floor(Date.now() / 1000) + 2,
    //   name:'Nguyễn Hoàng Thắng Thuận',
    //   email:'thuanvp012van@gmail.com',
    //   address:'Hà Nội'
    // }, 'thuanvp012');
    // setTimeout(function(){
    //   res.send(token);
    // },6000);
    const str =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDEyOTI4MDcsIm5hbWUiOiJOZ3V54buFbiBIb8OgbmcgVGjhuq9uZyBUaHXhuq1uIiwiZW1haWwiOiJ0aHVhbnZwMDEydmFuQGdtYWlsLmNvbSIsImFkZHJlc3MiOiJIw6AgTuG7mWkiLCJpYXQiOjE2MDEyOTI4MDV9.hIquodrr7RirYKTTiznIuQB3s6LGRraJDcYqRyhAj-8";
    jwt.verify(str, "thuanvp012", function (err, decoded) {
      if (err) {
        return res.send("lỗi");
      }
      return res.send("thành công");
    });
  }
}

module.exports = new StudentController();
