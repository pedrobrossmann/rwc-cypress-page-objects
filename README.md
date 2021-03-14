# rwc-cypress-page-objects
# Desafio 02 - Agilizei

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

# Integração Azure Devops

* Você pode acessar a pipeline de testes [aqui](https://dev.azure.com/pedrobrossmann/Agilizei%20Bootcamp%20Nivel%202/_build)

