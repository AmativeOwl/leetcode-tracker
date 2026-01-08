import Header from "./components/Header"
import Stats from "./components/Stats"
import SearchBar from "./components/SearchBar"
import AddEntry from "./components/AddEntry"
import Entry from "./components/Entry"
import { useState } from "react"

export default function App() {
  const title = "Leetcode Tracker"
  const addEntryText = "+ Add Entry"
  const [entries, setEntries] = useState([])
  const [openEntry, setOpenEntry] = useState(true)

  function handleAddEntry() {
    setEntries(prev => [...prev, {}])
    setOpenEntry(entries.length)
  }

  return (
    <>
      <Header title={title}/>
      <Stats />
      <SearchBar />
      <AddEntry addEntryText={addEntryText} handleAddEntry={handleAddEntry}/>
      {entries.map((entry, index) => 
          openEntry === index && <Entry key={index} onClose={() => setOpenEntry(null)}/>)}
    </>
  )
}