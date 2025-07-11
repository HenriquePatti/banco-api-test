const request = require('supertest');
const { postLogin } = require('../fixtures/postLogin.json')

const bodyLogin = { ...postLogin }

const obterToken = async (bodyLogin) => {
    const response = await request(process.env.BASE_URL)
        .post("/login")
        .set("Content-Type", "application/json")
        .send(bodyLogin);

    return response.body.token
}
      
module.exports = {
    obterToken
}
