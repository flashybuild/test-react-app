import React, { useState } from 'react'
import './App.css'
import pokemons from './pokemons.json'

// function component
const PokemonRow = (props) => {
  const { pokemonProp, handleSelect } = props
  return (
    <tr>
      <td>{pokemonProp.name.english}</td>
      <td>{pokemonProp.name.japanese}</td>
      <td>{pokemonProp.type.join(' & ')}</td>
      <td>
        <button onClick={() => handleSelect(pokemonProp)}>Select</button>
      </td>
    </tr>
  )
}

function App() {
  // states
  const [keyfilter, keyfilterSet] = useState('')
  const [selectedPokemon, selectedPokemonSet] = useState(null)
  return (
    <div
      style={{
        margin: 'auto',
        padding: '0.75rem',
        border: '1px solid',
      }}>
      <h1 className='title'>Search a pokemon</h1>
      <input
        type='text'
        value={keyfilter}
        onChange={(event) => keyfilterSet(event.target.value)}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '70% 30%',
          gridColumnGap: '1rem',
        }}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>In japanese</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {pokemons
              .filter((pokemon) =>
                pokemon.name.english
                  .toLocaleLowerCase()
                  .includes(keyfilter.toLocaleLowerCase()),
              )
              .slice(0, 30)
              .map((pokemon) => (
                <PokemonRow
                  pokemonProp={pokemon}
                  handleSelect={(poPp) => selectedPokemonSet(poPp)}
                  key={pokemon.id}
                />
              ))}
          </tbody>
        </table>
        {selectedPokemon && (
          <div>
            <h1>{selectedPokemon.name.english}</h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
