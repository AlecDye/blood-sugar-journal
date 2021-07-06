import EntryListItem from "./EntryListItem"

const EntryList = (props) => {
  return (
    <>
      <header className="entry-list__header">
        <h2>Entries</h2>
      </header>
      <ul className="entry-list flow">
        {props.entries.map(entry => (
          <EntryListItem key={entry.id} entry={entry}/>
        ))}
      </ul>
    </>
  )
}

export default EntryList
