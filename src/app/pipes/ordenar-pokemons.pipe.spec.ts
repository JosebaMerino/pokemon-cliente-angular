import { OrdenarPokemonsPipe } from './ordenar-pokemons.pipe';

describe('OrdenarPokemonsPipe', () => {
  it('create an instance', () => {
    const pipe = new OrdenarPokemonsPipe();
    expect(pipe).toBeTruthy();
  });
});
