import React, { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

export default function ExpenseShow() {
  const expenses = [
    {
      id: 1,
      description: "Groceries for the week",
      category: "Food",
      amount: 50.75,
    },
    {
      id: 2,
      description: "Gas for the car",
      category: "Transportation",
      amount: 40.0,
    },
    {
      id: 3,
      description: "Monthly phone bill",
      category: "Utilities",
      amount: 60.0,
    },
    {
      id: 4,
      description: "Dinner at restaurant",
      category: "Food",
      amount: 30.25,
    },
    {
      id: 5,
      description: "New office chair",
      category: "Furniture",
      amount: 120.5,
    },
    {
      id: 6,
      description: "Netflix subscription",
      category: "Entertainment",
      amount: 15.0,
    },
    {
      id: 7,
      description: "Electricity bill",
      category: "Utilities",
      amount: 100.0,
    },
    {
      id: 8,
      description: "New laptop purchase",
      category: "Electronics",
      amount: 950.0,
    },
    { id: 9, description: "Coffee at café", category: "Food", amount: 5.5 },
    {
      id: 10,
      description: "Gym membership fee",
      category: "Health",
      amount: 40.0,
    },
  ];

  const [expenseList, setExpenseList] = useState(expenses);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleDelete = (id) => {
    const updatedExpenses = expenseList.filter((expense) => expense.id !== id);
    setExpenseList(updatedExpenses);
  };
  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const showFilter = selectedCategory
    ? expenseList.filter((e) => e.category === selectedCategory)
    : expenseList;

  const handleAdd = (data) => {
    setExpenseList([...expenseList, { ...data, id: expenseList.length + 1 }]);
  };

  console.log(expenseList);

  return (
    <div>
      <div className="m-5 border border-primary ">
        <ExpenseForm onSubmit={handleAdd} />
      </div>
      <div className="m-5">
        <ExpenseFilter filterFor={(category) => handleFilter(category)} />
      </div>
      <ExpenseList expenses={showFilter} onDelete={(id) => handleDelete(id)} />
    </div>
  );
}
