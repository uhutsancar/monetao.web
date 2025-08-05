import React from "react";
import { LuDownload } from "react-icons/lu";
import TransactionsInfoCard from "../Cards/TransactionsInfoCard";
import moment from "moment";

const IncomeList = ({ transactions, onDelete, onDownload }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between ">
        <h1 className="text-lg">Income Sources</h1>

        <button className="card-btn" onClick={onDownload} aria-label="Download Button" >
          <LuDownload className="text-base" /> Download
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {transactions?.map((income) => (
          <TransactionsInfoCard
            key={income._id}
            title={income.source}
            icon={income.icon}
            date={moment(income.date).format("Do MMM YYYY")}
            amount={income.amount}
            type="income"
            onDelete={() => onDelete(income._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default IncomeList;
