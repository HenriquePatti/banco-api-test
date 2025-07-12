const request = require("supertest");
const { expect } = require("chai");
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao')
const { postTransferencias } = require('../fixtures/postTransferencias.json')
const { postLogin } = require('../fixtures/postLogin.json')

describe("Transferências", () => {
  let token = null
    beforeEach (async ()=> {
      const bodyLogin = { ...postLogin }
      token = await obterToken(bodyLogin)
    })

  describe("POST /transferencias", () => {
    it("Deve retornar 201 para transferencia com valores igual ou maior que R$ 10.00", async () => {
      const bodyTranferencia = { ...postTransferencias }

      const response = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`)
        .send(bodyTranferencia);

      expect(response.status).to.equal(201);
    });

    it("Deve retornar 422 para transferências com valores abaixo de R$ 10.00", async () => {
      const bodyTranferencia = { ...postTransferencias }
      bodyTranferencia.valor = 9.99

      const response = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${token}`)
        .send(bodyTranferencia);

      expect(response.status).to.equal(422);
    });
  });

  describe('GET /transferencias/{id}', ()=>{
    it('Deve retornar sucesso com 200 e dados iguais ao cadastrado no banco de dados', async ()=> {
     const response = await request(process.env.BASE_URL)
      .get("/transferencias/102")
      .set('Authorization', `Bearer ${token}`)

      expect(response.status).to.equal(200)
      expect(response.body.id).to.equal(102)
      expect(response.body.conta_origem_id).to.equal(1)
      expect(response.body.conta_destino_id).to.equal(2)
      expect(response.body.valor).to.equal(11.00)
      expect(response.body.data_hora).to.equal('2025-07-11T22:52:22.000Z')
      expect(response.body.autenticada).to.equal(0)
    })
  })

  describe('GET /transferencias', ()=> {
    it('Deve retornar status 200 e páginação 10, quando informado limit 10', async ()=> {
      const response = await request(process.env.BASE_URL)
        .get("/transferencias?page=1&limit=10")
        .set('Authorization', `Bearer ${token}`)

        expect(response.status).to.equal(200)
        expect(response.body.page).to.equal(1)
        expect(response.body.limit).to.equal(10)
        expect(response.body.transferencias).to.lengthOf(10)
        
    })
        

        
  })
  
  
});
