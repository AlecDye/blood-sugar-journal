const EntryForm = (props) => {
  return (
    <form className="entry-form card">
      <div className="form-upper">
        {/* glucose box */}
        {/* time & date stacked inputs */}
      </div>
      <div className="form-notes">
        <label htmlFor="notes">Notes:</label>
        <textarea name="notes" id="notes" placeholder="What did you eat?"></textarea>
        <small>errorMsg</small>
      </div>
      <div className="btn-row">
        <button className="btn btn-delete" type="button">Delete</button>
        <div>
          <button className="btn btn-outline" type="button">Cancel</button>
          <button className="btn btn-primary" type="submit">Save</button>
        </div>
      </div>
    </form>
  )
}

export default EntryForm
