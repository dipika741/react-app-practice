import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import categories from "../categories.ts";
// Zod schema definition
const schema = z.object({
  description: z.string().min(1, "Description is required"),
  amount: z.number().min(0.01, "Amount must be greater than 0"),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

const ExpenseForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  // const onSubmit = (data: any) => {
  //   console.log(data); // Log the form data
  //   reset(); // Reset the form after submission
  // };

  const mySubmit = (data: any) => {
    console.log(data);
    onSubmit(data); // Log the form data
    reset(); // Reset the form after submission
  };

  return (
    <div className="form-container p-4">
      <h1>Expense Form</h1>
      {/* <form onSubmit={handleSubmit(onSubmit)} noValidate> */}
      <form onSubmit={handleSubmit(mySubmit)}>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            className="form-control"
            id="description"
            type="text"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            className="form-control"
            id="amount"
            type="number"
            {...register("amount", { valueAsNumber: true })}
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="category">Category:</label>
          <select
            className="form-control mb-4"
            id="category"
            {...register("category")}
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>

        <button className="btn btn-primary mt-4" type="submit">
          Submit
        </button>

        <button
          disabled={!isValid}
          className="btn btn-warning d-block mt-3"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
