const { Pokemon, conn } = require('../../src/db.js');
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

const expect = chai.expect;

describe('Pokemon models', () => {

  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('Modelo Pokemon', () => {

      it("debe tener una propiedad name", async () => {
        const pokemon = await Pokemon.create({ name: "Messi" });
        expect(pokemon).to.have.property("name");
      });
      it("debe tener una propiedad hp", async () => {
        const pokemon = await Pokemon.create({ name: "Messi" , hp: 10 });
        expect(pokemon).to.have.property("hp"); 
      });
      it("debe tener una propiedad attack", async () => {
        const pokemon = await Pokemon.create({ name: "Messi" , attack: 10 });
        expect(pokemon).to.have.property("attack");
      });
      it("debe tener una propiedad defense", async () => {
        const pokemon = await Pokemon.create({ name: "Messi" , defense: 10 });
        expect(pokemon).to.have.property("defense");
      });
      it("debe tener una propiedad speed", async () => {
        const pokemon = await Pokemon.create({ name: "Messi" , speed: 10 });
        expect(pokemon).to.have.property("speed");
      });
      it("debe tener una propiedad height", async () => {
        const pokemon = await Pokemon.create({ name: "Messi" , height: 10 });
        expect(pokemon).to.have.property("height");
      });
      it("debe tener una propiedad weight", async () => {
        const pokemon = await Pokemon.create({ name: "Messi" , weight: 10 });
        expect(pokemon).to.have.property("weight");
      });



      it('debe devolver un error si no tiene name', async () => {
        var poke = async () => await Pokemon.create({})
        expect(poke()).to.be.rejected
      });

      it('debe devolver un error si image no es un string', async () => {
        const poke = async () => await Pokemon.create({ name: 'Messi', Image:10})
        const poke2 = await Pokemon.create({ name: 'Messi', image: "imagenDeMessi.png"})
        expect(poke()).to.be.rejected
        expect(poke2.image).to.eql("imagenDeMessi.png")
      });

      it('debe devolver un error si hp no es un número', async () => {
        const poke = async () => await Pokemon.create({ name: 'Messi', hp:"buena vida"})
        const poke2 = await Pokemon.create({ name: 'Messi', hp:10})
        expect(poke()).to.be.rejected
        expect(poke2.hp).to.eql(10)
      });

      it('debe devolver un error si attack no es un número', async () => {
        const poke = async () => await Pokemon.create({ name: 'Messi', attack:"buen ataque"})
        const poke2 = await Pokemon.create({ name: 'Messi', attack:10})
        expect(poke()).to.be.rejected
        expect(poke2.attack).to.eql(10)
      });

      it('debe devolver un error si defense no es un número', async () => {
        const poke = async () => await Pokemon.create({ name: 'Messi', defense:"buena defensa"})
        const poke2 = await Pokemon.create({ name: 'Messi', defense:10})
        expect(poke()).to.be.rejected
        expect(poke2.defense).to.eql(10)
      });

      it('debe devolver un error si speed no es un número', async () => {
        const poke = async () => await Pokemon.create({ name: 'Messi', speed:"buena velocidad"})
        const poke2 = await Pokemon.create({ name: 'Messi', speed:10})
        expect(poke()).to.be.rejected
        expect(poke2.speed).to.eql(10)
      });

      it('debe devolver un error si height no es un número', async () => {
        const poke = async () => await Pokemon.create({ name: 'Messi', height:"buena altura"})
        const poke2 = await Pokemon.create({ name: 'Messi', height:10})
        expect(poke()).to.be.rejected
        expect(poke2.height).to.eql(10)
      });

      it('debe devolver un error si weight no es un número', async () => {
        const poke = async () => await Pokemon.create({ name: 'Messi', weight:"buen peso"})
        const poke2 = await Pokemon.create({ name: 'Messi', weight:10})
        expect(poke()).to.be.rejected
        expect(poke2.weight).to.eql(10)
      });
      
    });
  });
});