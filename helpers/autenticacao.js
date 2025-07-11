const request = require('supertest');

const obterToken = async (usuario, senha ) => {
    const response = await request(process.env.BASE_URL)
        .post("/login")
        .set("Content-Type", "application/json")
        .send({
          'username': usuario,
          'senha': senha
        });

    return response.body.token
}
      
module.exports = {
    obterToken
}
