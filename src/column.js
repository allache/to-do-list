import React from "react";
import styled from "styled-components";
import Tasks from "./tasks";
import {Droppable} from 'react-beautiful-dnd';


function Column(props10) {


    const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
  `;
  const Title = styled.h3`
    padding: 8px;
  `;
  const TaskList = styled.div`
    padding: 8px;
  `;
  
  return (
    <Container>
      <Title>{props10.column.title}</Title>

      <Droppable droppableId={props10.column.id}>
      {(provided,snapshot)=>(
          
          <TaskList   
          ref={provided.innerRef} {...provided.droppableProps} >
          {props10.tasks.map((task,index)=><Tasks key={task.id} task={task} index={index}/>)}
          {provided.placeholder}
          </TaskList>

      )}
      </Droppable>
    </Container>
  );
}
export default Column;
