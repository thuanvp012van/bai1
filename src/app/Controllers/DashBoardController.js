class DashBoardController {
  index(req, res) {
    res.render("DashBoard");
  }
}

module.exports = new DashBoardController();
