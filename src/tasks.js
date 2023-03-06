import React from 'react'
import styled from "styled-components";
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
margin-bottom: 8px;
padding: 8px;

border: 1px solid lightgrey;
border-radius: 2px;
`;

function Tasks(props58) {
    return (
        <Draggable draggableId={props58.task.id} index={props58.index}>
        {(provided,snapshot)=>(

            <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          

            >{props58.task.content}</Container>

        )}
        
        </Draggable>);
}

export default Tasks ;