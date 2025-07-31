import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoCard from "~/components/layouts/Cards/InfoCard";
import DashboardLayout from "~/components/layouts/DashboardLayout";
import { useUserAuth } from "~/hooks/useUserAuth";
import { API_PATHS } from "~/utils/apiPaths";
import axiosInstance from "~/utils/axiosInstance";
import { LuHandCoins, LuWalletMinimal } from "react-icons/lu";
import { IoMdCard } from "react-icons/io";
import { addThousandsSeparator } from "~/utils/helper";

const Home = () => {
  useUserAuth();

  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState();
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await axiosInstance.get(
        `${API_PATHS.DASHBOARD.GET_DATA}`
      );
            console.log(response)
      if (response.data) {
        setDashboardData(response.data);
      }
    } catch (error) {
      console.log("Something went wrong. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
    return () => {};
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard
            icon={<IoMdCard />}
            label="Total Balance"
            value={addThousandsSeparator(dashboardData?.totalBalance || 0)}
            color="bg-primary"
          />

          <InfoCard
            icon={<IoMdCard />}
            label="Total Income"
            value={addThousandsSeparator(dashboardData?.totalIncome || 0)}
            color="bg-primary"
          />

          <InfoCard
            icon={<IoMdCard />}
            label="Total Expense"
            value={addThousandsSeparator(dashboardData?.totalExpense || 0)}
            color="bg-primary"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;
