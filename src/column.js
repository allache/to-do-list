import React from "react";
import styled from "styled-components";
import Tasks from "./tasks";

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
      <TaskList>
      {props10.tasks.map(task=><Tasks key={task.id} task={task}/>)}
      </TaskList>
    </Container>
  );
}
export default Column;
