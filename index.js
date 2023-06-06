const express = require("express");
const request = require("request");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const apiKey = req.headers.apikey;
  // check if API key is valid
  var options = {
    url: "https://aihorde.net/api/v2/find_user",
    method: "GET",
    headers: { apikey: apiKey },
    json: true,
  };
  request(options, (error, response, body) => {
    // Printing the error if occurred
    if (error) console.log(error);

    if ((response.statusCode == 200 && body.flagged) || response.statusCode != 200) {
      res.status(401).json({ message: "Unauthenticated" })
    } else {
      console.log("URL requested: " + req.query.url)

      // get url and pipe back to the requesting client
      request.get(req.query.url).pipe(res);
    }
  });
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
