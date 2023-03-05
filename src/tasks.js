import React from 'react'
import styled from "styled-components";

const Container = styled.div`
margin-bottom: 8px;
padding: 8px;

border: 1px solid lightgrey;
border-radius: 2px;
`;

function Tasks(props58) {
    return (<Container>
        {props58.task.content}
        </Container>);
}

export default Tasks ;