const request = require("request");

const options = {
  url: "https://ourAppHere/api/startAuth",
  method: "GET",
  headers: {
    clientKey: "1234567890---123456789--asdfghjk367"
  }
};

request(options, function(err, response, body) {
  console.log("error:", err);
  console.log("statusCode:", response && response.statusCode);
  let json = JSON.parse(body);
  console.log(json);
});
