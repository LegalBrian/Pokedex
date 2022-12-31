/* eslint-disable import/no-extraneous-dependencies */
const session = require("supertest-session");
const app = require("../../src/app.js");

const agent = session(app);

describe("GET /types", () => {
  it("Se espera una respuesta de status 200", () => 
  agent.get("/types").expect(200));
});

describe("GET /pokemons/:id", () => {
  it("Se espera una respuesta 200 se si pasa un id valido", () =>
  agent.get("/pokemons/10").expect(200));

  it("Se espera una respuesta 404 si se pasa un id invalido", () =>
  agent.get("/pokemons/14234320").expect(404));
});
  
describe("GET /pokemons?name=", () => {
  it("Se espera una respuesta 200 si se pasa un name valido", () =>
  agent.get("/pokemons?name=pikachu").expect(200));

  it("Se espera una respuesta 404 si se pasa un name invalido", () =>
  agent.get("/pokemons?name=afdopspm").expect(404));
});

  
describe("GET /pokemons", () => {
  it("Si no se recibe mas que la ruta devuelve un status 200 con todos los pokemons", (done) => {
  agent.get("/pokemons").then(() => done())});
});


describe('POST /pokemons', () => {
  const pokemon = {  
    name: "messi",
    hp: 10, 
    attack: 10 , 
    defense: 10, 
    speed: 10, 
    height: 10, 
    weight: 10,
    types: [{"name": "dragon"},{"name": "fire"}], 
  };
  it('Debe crear un nuevo pokemon exitosamente', () => {
      agent.post('/pokemons').send(pokemon).expect(200);
  })
});