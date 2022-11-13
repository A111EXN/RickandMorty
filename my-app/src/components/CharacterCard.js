import React,{useContext} from 'react'
import '../styles/character.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

function CharacterCard({character}) {
  const {darkMode,setDarkMode}=useContext(ThemeContext)
  return (
    <div className={darkMode ? "character-card character-dark ":"character-card"}>
        <img src={character.image}/>
        <p>{character.name}</p>
        <Link to={`/details/${character.id}`}><button>See Details</button></Link>
    </div>
  )
}

export default CharacterCard