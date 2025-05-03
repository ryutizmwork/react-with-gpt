"use client"; // クライアントコンポーネント宣言！

import { useState } from "react";

type Todo = {
  text: string;
  completed: boolean;
};

export default function ToDoAppPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAdd = () => {
    setTodos([...todos, { text: inputText, completed: false }]);
    setInputText("");
  };

  const handleDelete = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleCheck = (index: number) => {
    setTodos((prev) =>
      prev.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  return (
    <div className="text-center mt-8">
      <h1 className="text-2xl mb-4">Todo app</h1>
      <div className="flex items-center justify-center gap-2">
        <input
          type="text"
          value={inputText}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded"
          placeholder="ここにタスクを入力してね"
        />
        <button onClick={handleAdd}>追加</button>
      </div>
      <ul className="max-w-md mx-auto mt-7">
        {todos.map((todo, index) => (
          <li key={index}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" checked={todo.completed} onChange={() => handleCheck(index)} />
                <p className={`text-xl ${todo.completed ? "line-through text-gray-400" : ""} pl-3 `}>
                  {index + 1}. {todo.text}
                </p>
              </div>
              <button onClick={() => handleDelete(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
