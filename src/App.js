import React from 'react'
import './App.css'
import pokemons from './pokemons.json'

const PokemonRow = ({pokemon}) => (
  <tr>
  <td>{pokemon.name.english}</td>
  <td>{pokemon.name.japanese}</td>
  <td>{pokemon.type.join(' & ')}</td>
</tr>
)


function App() {
  return (
    <div
      style={{
        margin: 'auto',
        marginLeft: '30px',
        padding: '0.75rem',
        paddingLeft: '1.2rem',
        border: '1px solid',
      }}>
      <h1 className='title'>Hello</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>In japanese</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.slice(12, 20).map((pokemon) => (
            <PokemonRow pokemon={pokemon} key={pokemon.id} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
