import React from "react";
import TransactionsInfoCard from "../Cards/TransactionsInfoCard";
import moment from "moment";
import { LuArrowRight } from "react-icons/lu";

const RecentIncome = ({ transactions, onSeeMore }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h1 className="text-lg">Income</h1>
        <button className="card-btn" onClick={onSeeMore}>
          See All <LuArrowRight className="text-base" />
        </button>
      </div>

      <div className="mt-6">
        {transactions?.slice(0.5)?.map((item) => (
          <TransactionsInfoCard
            key={item._id}
            title={item.source}
            icon={item.icon}
            date={moment(item.date).format("Do MMM YYYY")}
            amount={item.amount}
            type="income"
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  );
};

export default RecentIncome;
