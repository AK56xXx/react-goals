import './App.css';
import { useState } from 'react';
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";
function App() {

  const items = [];
  const [goals, setgoals] = useState(items);

  const addGoal = (goal) => {
    setgoals([...goals, goal]);
  };

  const deleteGoal = (index) => {
    console.log(goals[index]);
    const filteredGoals = goals.filter((item, i) => {
      console.log(i);
      return i != index;
    });
    setgoals(filteredGoals);
  };



  return (
    <div className="App">
    <GoalForm onAdd={addGoal}/>
    <GoalList list={goals} onDelete={deleteGoal}/>
    </div>
  );
}

export default App;
