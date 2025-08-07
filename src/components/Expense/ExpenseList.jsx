import moment from "moment";
import React from "react";
import { LuDownload } from "react-icons/lu";
import TransactionsInfoCard from "../Cards/TransactionsInfoCard";

const ExpenseList = ({ transactions, onDelete, onDownload }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between ">
        <h1 className="text-lg">All Expenses</h1>

        <button
          className="card-btn"
          onClick={onDownload}
          aria-label="Download Button"
        >
          <LuDownload className="text-base" /> Download
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {transactions?.map((expense) => (
          <TransactionsInfoCard
            key={expense._id}
            title={expense.category}
            icon={expense.icon}
            date={moment(expense.date).format("Do MMM YYYY")}
            amount={expense.amount}
            type="expense"
            onDelete={() => onDelete(expense._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
