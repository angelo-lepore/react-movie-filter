// Selettore per filtrare i film per genere
function FilterControls({ selectedGenre, setSelectedGenre }) {
  return (
    <div className="row mb-3">
      <div className="col-md-4">
        <select
          className="form-select"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="">Tutti i generi</option>
          <option value="Animazione">Animazione</option>
          <option value="Azione">Azione</option>
          <option value="Avventura">Avventura</option>
          <option value="Biografico">Biografico</option>
          <option value="Commedia">Commedia</option>
          <option value="Documentario">Documentario</option>
          <option value="Drammatico">Drammatico</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Horror">Horror</option>
          <option value="Musicale">Musicale</option>
          <option value="Romantico">Romantico</option>
          <option value="Storico">Storico</option>
          <option value="Thriller">Thriller</option>
        </select>
      </div>
    </div>
  );
}

export default FilterControls;
