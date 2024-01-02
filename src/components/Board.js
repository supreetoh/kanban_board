import React from 'react';
import Column from './Column';
import './Board.css';

// function Board({ tasks, groupBy }) {
//   // Logic to group tasks will go here
//   return (
//     <div className="board">
//       {/* Render columns here */}
//     </div>
//   );
// }

function groupTasks(tasks, groupBy) {
  // This function will group tasks based on the groupBy parameter
}

function sortTasks(tasks, sortBy) {
  // This function will sort tasks based on the sortBy parameter
}

function Board({ tasks, groupBy }) {
  const groupedTasks = groupTasks(tasks, groupBy);

  return (
    <div className="board">
      {Object.keys(groupedTasks).map((group) => (
        <Column key={group} title={group} tasks={groupedTasks[group]} />
      ))}
    </div>
  );
}

export default Board;
