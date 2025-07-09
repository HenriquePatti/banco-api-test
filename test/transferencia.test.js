const request = require("supertest");
const { expect } = require("chai");
require('dotenv').config();

describe("Transferências", () => {
  describe("POST /transferencias", () => {
    it("Deve retornar 201 para transferencia com valores igual ou maior que R$ 10.00", async () => {
      const responseLogin = await request(process.env.BASE_URL)
        .post("/login")
        .set("Content-Type", "application/json")
        .send({
          username: "julio.lima",
          senha: "123456",
        });

      const token = responseLogin.body.token;

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
      const responseLogin = await request(process.env.BASE_URL)
        .post("/login")
        .set("Content-Type", "application/json")
        .send({
          username: "julio.lima",
          senha: "123456",
        });

      const token = responseLogin.body.token;

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
