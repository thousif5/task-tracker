import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Appointment',
      day: 'Feb 5th',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting',
      day: 'Feb 6th',
      reminder: false
    }
  ])

  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
