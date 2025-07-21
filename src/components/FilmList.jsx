// Lista dei film filtrati
function FilmList({ filteredFilms, handleDeleteClick }) {
  return (
    <ul className="list-group mb-4">
      {filteredFilms.map((filmItem, index) => (
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
            onClick={() => handleDeleteClick(filmItem.id)}
          >
            <i className="bi bi-trash"></i>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default FilmList;
