const request = require("supertest");
const { expect } = require("chai");
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao')

describe("Transferências", () => {
  describe("POST /transferencias", () => {
    let token = null
    beforeEach (async ()=> {
      token = await obterToken('julio.lima', '123456')
    })

    it("Deve retornar 201 para transferencia com valores igual ou maior que R$ 10.00", async () => {    
      const response = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`)
        .send({
          contaOrigem: 1,
          contaDestino: 2,
          valor: 11,
          token: "in in",
        });

      expect(response.status).to.equal(201);
    });

    it("Deve retornar 422 para transferências com valores abaixo de R$ 10.00", async () => {
      const response = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`)
        .send({
          contaOrigem: 1,
          contaDestino: 2,
          valor: 9,
          token: "in in",
        });

      expect(response.status).to.equal(422);
    });
  });
});
