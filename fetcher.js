const request = require("request");
const fs = require("fs");
const commandLine = process.argv.slice(2);

request(commandLine[0], (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile(commandLine[1], ("body:", body), (error) => {
    /* handle error */
  });
});
