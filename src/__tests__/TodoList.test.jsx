import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/Add a new todo/i);
  const addButton = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: "Test Todo" } });
  fireEvent.click(addButton);

  expect(screen.getByText(/Test Todo/i)).toBeInTheDocument();
});

test("toggles a todo completed state", () => {
  render(<TodoList />);
  const todo = screen.getByText(/Learn React/i);
  fireEvent.click(todo);
  expect(todo).toHaveClass("completed");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const todoLi = screen.getByText(/Learn React/i).closest("li");
  const deleteButton = within(todoLi).getByText("Delete");
  fireEvent.click(deleteButton);
  expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
});
