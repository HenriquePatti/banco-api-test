# 🏦 Banco API - Test Automation Portfolio

## 📌 Sobre o Projeto 🚧 (Em Construção)
Este repositório contém **testes automatizados de API REST** para a aplicação **Banco API**. Os testes são escritos em **Mocha**, **Chai** e **Supertest**; os relatórios são gerados com **Mochawesome**. O objetivo principal é praticar automação de testes, boas práticas de qualidade de software e integração contínua.

## 🚀 Tecnologias Utilizadas
- **Mocha** – Framework de testes
- **Chai** – Biblioteca de asserções
- **Supertest** – Requisições HTTP
- **Mochawesome** – Relatórios de testes (HTML/JUnit)
- **Dotenv** – Gerenciamento de variáveis de ambiente

## 📁 Estrutura do Projeto
```
📂 fixtures
 ┣ 📜 postTransferencias.json
 ┗ 📜 postLogin.json         # ➜ .gitignore
📂 helpers
 ┗ 📜 autenticacao.js
📂 test
 ┣ 📜 login.test.js
 ┗ 📜 transferencia.test.js
📜 .env                      # ➜ .gitignore
📜 package.json
📜 .gitignore
```

## ✅ Cenários de Teste Implementados
- **Login com credenciais válidas** (`login.test.js`)
- **Transferência entre contas** (`transferencia.test.js`)
- **(Em desenvolvimento) Login com credenciais inválidas**
- **(Em desenvolvimento) Validações de limites de valor**

## 🎯 Como Executar os Testes Localmente

### 📌 Pré‑requisitos
- Node.js **18+**
- npm

### 🔹 Instalação
```bash
git clone https://github.com/HenriquePatti/banco-api-test.git
cd banco-api-test
npm install
```

### 🔹 Configuração
1. Crie **`.env`** com a URL da API:
   ```env
   BASE_URL=http://localhost:3000
   ```
2. Crie **`fixtures/postLogin.json`** com credenciais válidas:
   ```json
   {
     "postLogin": {
       "username": "seu_usuario",
       "senha": "sua_senha"
     }
   }
   ```

### 🔹 Executar os testes (headless)
```bash
npm test
```

## 📊 Relatórios de Teste
Após a execução, o **Mochawesome** gera:
```
mochawesome-report/
 ┣ mochawesome.html
 ┗ mochawesome.json
```
Abra **`mochawesome-report/mochawesome.html`** no navegador para visualizar o relatório interativo.

## 📄 Licença
Este projeto está licenciado sob **ISC**. Use livremente para estudo e portfólio 🚀

---
