import Header from './components/Header.tsx'
import goalImg from './assets/goals.jpg'
import { useState } from 'react'
import CourseGoalList from './components/CourseGoalList.tsx'

export type CourseGoal = {
  title: string
  description: string
  id: number
}

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([])

  const handleAddGoal = () => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title: 'Learn React + TS',
        description: 'Learn it in depth',
        id: Math.random(),
      }
      return [...prevGoals, newGoal]
    })

    // if your new state depends on the old state, you should use this special function form : ()=>{} for updating the state.
  }

  return (
    <main>
      <Header image={{ src: goalImg, alt: 'your goal image' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} />
    </main>
  )
}

export default App
