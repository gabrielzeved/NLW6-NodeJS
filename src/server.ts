import express from 'express';

const app = express();

app.get("/products", (request, response) => {

    return response.send("oi bb");

});

app.listen(3000, () => {console.log("Server Running...")})