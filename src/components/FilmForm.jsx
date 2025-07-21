// Form per aggiungere un nuovo film
function FilmForm({
  newTitle,
  setNewTitle,
  newGenre,
  setNewGenre,
  handleSubmit,
}) {
  return (
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
  );
}

export default FilmForm;
