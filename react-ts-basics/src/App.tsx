import CourseGoal from './components/CourseGoal.tsx'
import Header from './components/Header.tsx'
import goalImg from './assets/goals.jpg'

function App() {
  return (
    <main>
      <Header image={{ src: goalImg, alt: 'your goal image' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title='Ts+React'>
        <p>TS REACT course</p>
      </CourseGoal>
    </main>
  )
}

export default App
