import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';
const TodoListBlock = styled.div`
    flex: 1;
    padding-bottom: 48px;
    padding-right: 32px;
    padding-left: 32px;
    padding-top: 20px;
    overflow-y : auto;
`;

const TodoList = () => {
    const todos = useTodoState();
    return <TodoListBlock>
        {todos.map(
            todo => <TodoItem 
                key={todo.id}
                id={todo.id}
                text={todo.text}
                done={todo.done}
            />
        )}
    </TodoListBlock>;
}

export default TodoList
