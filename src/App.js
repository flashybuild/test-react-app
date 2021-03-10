import React, { useState } from 'react'
import './App.css'
import pokemons from './pokemons.json'

// function component
const PokemonRow = ({ pokemon }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.name.japanese}</td>
    <td>{pokemon.type.join(' & ')}</td>
  </tr>
)

function App() {
  // state
  const [filter, filterSet] = useState('')

  return (
    <div
      style={{
        margin: 'auto',
        marginLeft: '30px',
        padding: '0.75rem',
        paddingLeft: '1.2rem',
        border: '1px solid',
      }}>
      <h1 className='title'>Search a pokemon</h1>
      <input
        type='text'
        value={filter}
        onChange={(event) => filterSet(event.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>In japanese</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          { pokemons
            .filter((pokemon) => pokemon.name.english
            .toLocaleLowerCase()
            .includes(filter.toLocaleLowerCase()))
            .slice(0, 30)
            .map((pokemon) => (
              <PokemonRow pokemon={pokemon} key={pokemon.id} />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
