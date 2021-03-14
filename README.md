# Desafio 02 - Agilizei-rwc-cypress-page-objects

### Tecnologias Utilizadas:
* Framework para crição dos testes [cypress](https://www.cypress.io/)
* Gera relatorio com resultado dos testes [Azure Devops](https://azure.microsoft.com/pt-br/services/devops/)
* Biblioteca para gerar informações fakes [faker-br](https://www.npmjs.com/package/faker-br)
#### 1. Clone o projeto

```
git clone https://github.com/pedrobrossmann/rwc-cypress-page-objects.git
cd rwc-cypress-page-objects
```

#### 2. Atualize as dependencias

```
npm install
```
#### 3. Execute o cypress com interface gráfica
```
npm run cy:open 
```
#### 4. Execute o cypress via linha de comando
```
npm run cy:run
```
#### 5. Execute os testes em navegadores especificos
```
npm run cy:run:electron
npm run cy:run:chrome
npm run cy:run:firefox
```

### Integração Azure Devops

* Você pode acessar a pipeline de testes [aqui](https://dev.azure.com/pedrobrossmann/Agilizei%20Bootcamp%20Nivel%202/_build)

* Exemplo do resultado da execuçaõ dos testes:
![image](https://user-images.githubusercontent.com/46963955/111083539-e12e7a80-84ec-11eb-8685-3526e92a1855.png)

### Execução de testes pelo Cypress
* Login - Assista [aqui](https://user-images.githubusercontent.com/46963955/111083590-0e7b2880-84ed-11eb-8f7c-c02667c261ce.mp4)
* Cadastro de usuário - Assista [aqui](https://user-images.githubusercontent.com/46963955/111083597-1b981780-84ed-11eb-9d51-bba68268243c.mp4)
* Cadastro de publicações - Assista [aqui](https://user-images.githubusercontent.com/46963955/111083623-29e63380-84ed-11eb-9cc2-25c2d2385376.mp4)
