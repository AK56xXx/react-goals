import React, { useState } from 'react'
import "./GoalForm.css";


export default function GoalForm(props) {
        const [goal, setGoal] = useState("");
  return (
      <div>
          <section id="goal-form">
              <form>
                  <div class="form-control">
                      <label>Course Goal</label>
                      <input type="text" value={goal} onChange={(event) =>{setGoal(event.target.value);}}/>
                  </div>
                  <button className="button" onClick={(event)=>{
                      event.preventDefault();
                      props.onAdd(goal);
                      console.log(goal);
                      }}>Add Goal</button>
              </form>
          </section>

      </div>
  )
}
