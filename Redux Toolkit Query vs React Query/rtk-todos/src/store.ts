import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Todo {
  id: number;
  text: string;
  active: boolean;
  done: boolean;
}

export const todoApi = createApi({
  reducerPath: "todoApi",   // "reducer-id"
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/"}),  // server-url (folder: "server")
  tagTypes: ["Todos"],   // entity-types in the system
  // builder is pointer for the FetchBaseQueryMeta
  endpoints: (builder) => ({
    getAll: builder.query<Todo[], void> ({
      query: () => 'todos', // what comes after the base-url
      providesTags: [{ type: "Todos", id: "LIST"}]  // Make sure that id match exactly for invalidatesTags
    }),

    // update is a mutation not a query, take: TODO, return: TODO
    updateTodo: builder.mutation<Todo, Todo>({
      query(todo) {
        return {
          url: `todos/${todo.id}`,
          method: "PUT",
          body: todo,
        };
      },
      // when succeeded it's going to re-render getAll
      invalidatesTags: [{ type: "Todos", id: "LIST" }] 
    }),

    deleteTodo: builder.mutation<Todo, Todo>({
      query(todo) {
        return {
          url: `todos/${todo.id}`,
          method: "DELETE",
          body: todo,
        };
      },
      // when succeeded it's going to re-render getAll
      invalidatesTags: [{ type: "Todos", id: "LIST" }] 
    }),

    addTodo: builder.mutation<string, string>({
      query(text) {
        return {
          url: `todos/`,
          method: "POST",
          body: {
            text    // make sure body-element match argument-element for query()
          },
        };
      },
      // when succeeded it's going to re-render getAll
      invalidatesTags: [{ type: "Todos", id: "LIST" }] 
    }),


  }),

})
