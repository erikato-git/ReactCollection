import React, { useCallback, useRef } from "react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { todoApi, Todo } from "./store"

// Server-elements is to be found in server/src/modules/todos/todo.controller.ts

function TodoApp(){
  const { data: todos } = todoApi.useGetAllQuery();   // call getAll in todoApi
  const [updateTodo] = todoApi.useUpdateTodoMutation();   // call updateTodo
  const [deleteTodo] = todoApi.useDeleteTodoMutation();   // call deleteTodo
  const [addTodo] = todoApi.useAddTodoMutation();

  const textRef = useRef<HTMLInputElement>(null);   // creating new DOM element for the add-functionality
  const onAdd = useCallback(() => {
    addTodo(textRef.current!.value ?? "");  // ! has to be there for some reason
    textRef.current!.value = ""   // resets DOM after adding text
  }, [addTodo]);

  const onToggle = useCallback(
    (todo: Todo) => updateTodo({ ...todo, done: !todo.done }),
    [updateTodo]
  );


  return <div className="App">
    {/* {JSON.stringify(todos)} */}
    <div className="todos">
      {todos?.map((todo) => (
        <React.Fragment key={todo.id}>
          <div>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => onToggle(todo)}
            />
            <span>{todo.text}</span>
          </div>
          <button onClick={() => deleteTodo(todo)}>Delete</button>
        </React.Fragment>
      ))}
      </div>
      <div className="add">
        <input type="text" ref={textRef} />
        <button onClick={onAdd}>Add</button>
      </div>
  </div>
}

function App() {
  return (
    <ApiProvider api={todoApi}>
      <TodoApp />
    </ApiProvider>
  )
}

export default App;