import React, { useState } from "react";

export default function ExpenseList({ expenses, onDelete }) {
  const [expenseList, setExpenseList] = useState(expenses);

  const handleDelete = (id) => {
    console.log("handleDelete-" + id);
    const updatedExpenses = expenseList.filter((expense) => expense.id !== id);
    setExpenseList(updatedExpenses);
  };
  return (
    <div className="m-5">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenseList.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount.toFixed(2)}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  onClick={() => handleDelete(expense.id)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>total</td>
            <td>
              ${expenseList.reduce((acc, expense) => acc + expense.amount, 0)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
