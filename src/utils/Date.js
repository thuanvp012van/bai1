const dateFormat = require("dateformat");
module.exports = {
  convertBasicDate(date) {
    return dateFormat(date, "dd/mm/yyyy");
  },
};
