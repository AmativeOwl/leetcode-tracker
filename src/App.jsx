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
  const [isOpen, setIsOpen] = useState(false)

  function handleAddEntry() {
    setEntries(prev => [...prev, {}])
  }

  return (
    <>
      <Header title={title}/>
      <Stats />
      <SearchBar />
      <AddEntry addEntryText={addEntryText} handleAddEntry={handleAddEntry}/>
      {entries.map((entry, index) => <Entry key={index}/>)}
    </>
  )
}