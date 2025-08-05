import React, { useEffect, useState } from "react";
import AddIncomeForm from "~/components/Income/AddIncomeForm";
import IncomeOverview from "~/components/Income/IncomeOverview";
import DashboardLayout from "~/components/layouts/DashboardLayout";
import Modal from "~/components/Modal";
import { API_PATHS } from "~/utils/apiPaths";
import axiosInstance from "~/utils/axiosInstance";

const Income = () => {
  const [incomeData, setIncomeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data: null,
  });
  const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);

  //Get All Income Details
  const fetchIncomeDetails = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axiosInstance.get(
        `${API_PATHS.INCOME.GET_ALL_INCOME}`
      );

      if (response.data) {
        setIncomeData(response.data);
      }
    } catch (error) {
      console.log("Something went wrong. Please try again", error);
    } finally {
      setLoading(true);
    }
  };

  //Handle Add Income
  const handleAddIncome = async (income) => {};

  //Delete Income
  const deleteIncome = async (id) => {};

  //Handle download income details
  const handleDownloadIncomeDetails = async () => {};

  useEffect(() => {
    fetchIncomeDetails();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DashboardLayout activeMenu="Income">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <div className="">
            <IncomeOverview
              transactions={incomeData}
              onAddIncome={() => setOpenAddIncomeModal(true)}
            />
          </div>
        </div>

        <Modal
          isOpen={openAddIncomeModal}
          onClose={() => setOpenAddIncomeModal(false)}
          title="Add Income"
        >
        <AddIncomeForm onAddIncome={handleAddIncome}/>
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default Income;
