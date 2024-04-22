const { staticFile } = require("../appModules/http-utils");
async function mainRouteController(res, publicUrl, extname) {
  res.statusCode = 200;
  staticFile(res, publicUrl, extname);
}
module.exports = mainRouteController;
