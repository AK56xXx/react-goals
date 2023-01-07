import React, { Component } from 'react'
import "./GoalList.css";

export default function GoalList(props)  {
    const goals = props.list.map((item, index) => {
        return (
            <li
              className="goal-item"
              onClick={() => {
                props.onDelete(index);
              }}
              key={index}
            >
              {item}
            </li>
          );
        });

    return (
        <section id='goals'>
        <ul class="goal-list">
           {goals}
        </ul>
        </section>
    );
  
}

