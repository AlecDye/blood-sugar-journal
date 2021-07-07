const AddEntry = (props) => {
  return (
    <button className="card-outline add-entry" type="button">
      <div className="upper">
        <div className="glucose">
          <span className="glucose__number">?</span>
          <small className="glucose__unit">mg / dL</small>
        </div>
      </div>
      <div className="lower">
        <p className="add-entry-prompt">Add new entry</p>
      </div>
    </button>
  )
}

export default AddEntry
