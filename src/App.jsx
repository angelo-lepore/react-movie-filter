import { useState, useEffect } from "react";

// Importa gli stili di Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// Importa l'array
import film from "./db/film";

// Importa i componenti
import AppHeader from "./components/AppHeader";
import FilterControls from "./components/FilterControls";
import FilmList from "./components/FilmList";
import FilmForm from "./components/FilmForm";

// Funzione principale dell'app
function App() {
  // Variabile che contiene la lista dei film
  const [FilmArray, setFilmArray] = useState(film);
  // Variabili che contengono il testo scritto dall'utente
  const [newTitle, setNewTitle] = useState("");
  const [newGenre, setNewGenre] = useState("");
  // Variabile che contiene il genere selezionato per il filtro
  const [selectedGenre, setSelectedGenre] = useState("");
  // Variabile che contiene la lista dei film filtrati
  const [filteredFilms, setFilteredFilms] = useState(film);

  // Effetto che aggiorna la lista dei film filtrati in base al genere selezionato
  useEffect(() => {
    if (!selectedGenre) {
      setFilteredFilms(FilmArray); // Mostra tutti i film
    } else {
      const filtered = FilmArray.filter((film) => film.genre === selectedGenre);
      setFilteredFilms(filtered); // Mostra solo i film del genere selezionato
    }
  }, [selectedGenre, FilmArray]);

  // Funzione che gestisce l'invio del form
  function handleSubmit(e) {
    e.preventDefault();
    if (!newTitle.trim() || !newGenre.trim()) return;

    const newFilm = {
      title: newTitle.trim(),
      genre: newGenre.trim(),
    };

    setFilmArray([...FilmArray, newFilm]); // Aggiunge un nuovo film alla lista
    setNewTitle(""); // Pulisce il campo del titolo
    setNewGenre(""); // Pulisce il campo del genere
  }

  // Funzione per eliminare un prodotto dall'elenco
  function handleDeleteClick(id) {
    const updatedArray = FilmArray.filter((_, i) => _.id !== id);
    setFilmArray(updatedArray); // Aggiorna la lista togliendo il film cliccato
  }

  return (
    <>
      <AppHeader />

      <div className="container">
        <FilterControls
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />

        <FilmList
          filteredFilms={filteredFilms}
          handleDeleteClick={handleDeleteClick}
        />

        <FilmForm
          newTitle={newTitle}
          setNewTitle={setNewTitle}
          newGenre={newGenre}
          setNewGenre={setNewGenre}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}

// Esporta il componente App
export default App;
