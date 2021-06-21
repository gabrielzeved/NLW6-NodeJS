import express from 'express';

const app = express();

app.get("/products", (request, response) => {

    return response.send("oi bb");

});


app.post("/products", (request, response) => {
    return response.send("oi post");
});

app.listen(3000, () => {console.log("Server Running...")})