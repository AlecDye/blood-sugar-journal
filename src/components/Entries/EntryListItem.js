const EntryListItem = ({entry}) => {

  const rangeColorHelper = (glucoseNum) => {
    if (glucoseNum <= 69) return "low"
    if (glucoseNum >= 70 && glucoseNum <= 149) return "target"
    if (glucoseNum >= 150) return "high"
    return "error"
  }

  return (
    <li className="card">
      <div className="upper">
        <div className={`glucose ${rangeColorHelper(entry.glucose)}`}>
          <span className="glucose__number">{entry.glucose}</span>
          <small className="glucose__unit">mg / dL</small>
        </div>
        <div className="upper__content">
          <p>{entry.time} {entry.date}</p>
          <button className="btn btn-primary">Edit</button>
        </div>
      </div>
      <div className="lower">
        {entry.notes ? 
          (
            <>
              <p className="notes-label">Notes:</p>
              <p>{entry.notes}</p>
            </>
          )
        : 
          (
            <p className="no-notes">Notes not provided</p>
          )
        }
      </div>
    </li>
  )
}

export default EntryListItem
