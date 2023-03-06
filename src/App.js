import logo from './logo.svg';
import './App.css';
import '@atlaskit/css-reset'
import initialData from './initial-data';
import { DragDropContext } from 'react-beautiful-dnd';
import { useState } from 'react';
import Column from './column'

const App = () => {
  const [state, setState] = useState(initialData);

const onDragEnd=result =>{
////////////////////////////////////////////////

}



  console.log('vasvdsvsdv',state.columns['ddddd'])
    return(
    <DragDropContext onDrageEnd >
   {state.columnOrder.map(columnId => {
console.log('columnId',columnId)


      const column1 = state.columns[columnId];
      const tasks1 = column1.taskIds.map(taskId =>state.tasks[taskId]);
      return <Column key={column1.id} column={column1} tasks={tasks1} />;
    })};

    </DragDropContext>
    )
  }

export default App;
