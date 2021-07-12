import Modal from "../UI/Modal"

const EntryForm = (props) => {
  return (
    <Modal onCancel={props.onCancel}>
      <form className="entry-form card">
        <div className="form-upper">
          <div className="glucose flow">
            <label htmlFor="glucose" className="glucose-label">
              <span>Blood</span>
              <span>Sugar:</span>
            </label>
            <input type="tel" placeholder="0" className="glucose-input" min="0" max="700"/>
            <small className="glucose-error">errorMsg</small>
            <small className="glucose_unit">mg / dL</small>
          </div>
          <div className="form-info">
            <label htmlFor="time">Time:</label>
            <input type="time" step="min" defaultValue="00:00"/>
            {/* <small>errorMsg</small> */}
            <label htmlFor="date">Date:</label>
            <input type="date" min="2021-01-01" defaultValue="2021-01-01"/>
            {/* <small>errorMsg</small> */}
          </div>
        </div>
        <div className="form-notes">
          <label htmlFor="notes">Notes:</label>
          <textarea name="notes" id="notes" placeholder="What did you eat?"></textarea>
          {/* <small>errorMsg</small> */}
        </div>
        <div className="btn-row">
          <button className="btn btn-delete" type="button">Delete</button>
          <div>
            <button className="btn btn-outline" type="button" onClick={props.onCancel}>Cancel</button>
            <button className="btn btn-primary" type="submit">Save</button>
          </div>
        </div>
      </form>
    </Modal>
  )
}

export default EntryForm
