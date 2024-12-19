import ExpenseList from "./expense-tracker/components/ExpenseList";

const expenses = [
  { "id": 1, "description": "Groceries for the week", "category": "Food", "amount": 50.75 },
  { "id": 2, "description": "Gas for the car", "category": "Transportation", "amount": 40.00 },
  { "id": 3, "description": "Monthly phone bill", "category": "Utilities", "amount": 60.00 },
  { "id": 4, "description": "Dinner at restaurant", "category": "Food", "amount": 30.25 },
  { "id": 5, "description": "New office chair", "category": "Furniture", "amount": 120.50 },
  { "id": 6, "description": "Netflix subscription", "category": "Entertainment", "amount": 15.00 },
  { "id": 7, "description": "Electricity bill", "category": "Utilities", "amount": 100.00 },
  { "id": 8, "description": "New laptop purchase", "category": "Electronics", "amount": 950.00 },
  { "id": 9, "description": "Coffee at café", "category": "Food", "amount": 5.50 },
  { "id": 10, "description": "Gym membership fee", "category": "Health", "amount": 40.00 }
];


function App() {
  return (
    <div>
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
