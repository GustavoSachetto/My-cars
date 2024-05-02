export default function Confirm() {
  return (
    <div className="modal fade" id="confirm" tabIndex="-1" aria-labelledby="confirmLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="confirmLabel">Realmente deseja excluir?</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Não</button>
            <button type="submit" className="btn btn-danger">Sim, excluir</button>
          </div>
        </div>
      </div>
    </div>
  )
}