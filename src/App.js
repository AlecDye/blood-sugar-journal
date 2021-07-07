import { useState } from "react";

import Header from "./components/UI/Header"
import AddEntry from "./components/Entries/AddEntry";
import EntryList from "./components/Entries/EntryList";
import Footer from "./components/UI/Footer"
import EntryForm from "./components/Entries/EntryForm";

const ENTRY_DATA = [
  {
    id: 1,
    glucose: 125,
    time: '9:20 AM',
    date: '7/1/21',
    notes: ""
  },
  {
    id: 2,
    glucose: 63,
    time: '7:20 AM',
    date: '7/1/21',
    notes: "Gave myself too much insulin"
  },
  {
    id: 3,
    glucose: 223,
    time: '10:20 PM',
    date: '6/31/21',
    notes: "Ate more than I gave myself insulin"
  },
]

const App = () => {
  const [entries, setEnteries] = useState(ENTRY_DATA)

  return (
    <>
      <Header />
      <main className="container">
        <EntryForm />
        {/* <AddEntry /> */}
        <EntryList entries={entries}/>
      </main>
      <Footer />
    </>
  );
}

export default App;
