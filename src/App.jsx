import { useState } from "react";

// Importa gli stili di Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// Importa l'array
import film from "./db/film";

// Funzione principale dell'app
function App() {
  // Variabile che contiene la lista dei film
  const [FilmArray, setFilmArray] = useState(film);
  // Variabile che contiene il testo scritto dall'utente
  const [newTitle, setNewTitle] = useState("");
  const [newGenre, setNewGenre] = useState("");

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
  function handleDeleteClick(index) {
    const updatedArray = FilmArray.filter((_, i) => i !== index);
    setFilmArray(updatedArray); // Aggiorna la lista togliendo il film cliccato
  }

  return (
    <>
      <div>
        <h1 className="text-center my-4">Film List</h1>
      </div>
      <div className="container">
        {/* Lista dei film */}
        <ul className="list-group mb-4">
          {FilmArray.map((filmItem, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{filmItem.title}</strong> <br />
                <small className="text-muted">{filmItem.genre}</small>
              </div>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => handleDeleteClick(index)}
              >
                <i className="bi bi-trash"></i>
              </button>
            </li>
          ))}
        </ul>

        {/* Form per aggiungere un nuovo film */}
        <form onSubmit={handleSubmit}>
          <div className="row g-2">
            <div className="col-md-5">
              <input
                className="form-control"
                placeholder="Titolo del film"
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </div>
            <div className="col-md-5">
              <input
                className="form-control"
                placeholder="Genere"
                type="text"
                value={newGenre}
                onChange={(e) => setNewGenre(e.target.value)}
              />
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-primary w-100">
                <i className="bi bi-save2"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

// Esporta il componente App
export default App;
