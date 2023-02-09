const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.readFile(`${__dirname}/UserApi/userApi.json`, "utf-8", (err, data) => {
    if (err) {
      console.error(err.message);
      return;
    }
    try {
      const objData = JSON.parse(data);
      // console.log(objData.data.base);

      // stoaring values in array
          const myArray = [];

        // Adding values to the array
          myArray.push(objData.data.rates.XAU);
          myArray.push(objData.data.rates.XAG);
          myArray.push(objData.data.rates.XPT);
         
          console.log(myArray)


      // console.log(objData.data.rates.XAU);
      // console.log(objData.data.rates.XAG);
      // console.log(objData.data.rates.XPT);

      if (req.url == "/") {
        res.end("Hello from the home sides");
      } else if (req.url == "/about") {
        res.end("Hello from the AboutUS sides");
      } else if (req.url == "/userapi") {
        res.writeHead(200, { "content-type": "application/json" });
        // res.end(objData[0]);
        console.log(objData.data.base[0]);
      } else {
        // res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1> 404 error pages. Page doesn't exist </h1>");
      }

    } catch (err) {
      console.error(err.message);
    }
  });

  
  
  
  // fs.readFileSync(`${__dirname}/UserApi/userApi.json`, "utf-8");
  // const objData = JSON.parse(data);
  // console.log(`${__dirname}/UserApi/userApi.json`);

  // console.log(req.url);
 
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000");
});