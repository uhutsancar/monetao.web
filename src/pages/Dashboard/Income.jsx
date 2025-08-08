import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SEO from "~/components/Common/Seo";
import DeleteAlert from "~/components/DeleteAlert";
import AddIncomeForm from "~/components/Income/AddIncomeForm";
import IncomeList from "~/components/Income/IncomeList";
import IncomeOverview from "~/components/Income/IncomeOverview";
import DashboardLayout from "~/components/layouts/DashboardLayout";
import Modal from "~/components/Modal";
import { useUserAuth } from "~/hooks/useUserAuth";
import { API_PATHS } from "~/utils/apiPaths";
import axiosInstance from "~/utils/axiosInstance";

const Income = () => {
  useUserAuth();

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
      setLoading(false);
    }
  };

  //Handle Add Income
  const handleAddIncome = async (income) => {
    const { source, amount, date, icon } = income;

    //Validation Checks
    if (!source.trim()) {
      toast.error("Source is required.");
      return;
    }
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      toast.error("Amount should be a valid number greater thna 0.");
      return;
    }

    if (!date) {
      toast.error("Date is required.");
      return;
    }

    try {
      await axiosInstance.post(API_PATHS.INCOME.ADD_INCOME, {
        source,
        amount,
        date,
        icon,
      });
      setOpenAddIncomeModal(false);
      toast.success("Income added successfully");
      fetchIncomeDetails();
    } catch (error) {
      console.error(
        "Error adding income:",
        error.response?.data?.message || error.message
      );
    }
  };

  //Delete Income
  const deleteIncome = async (id) => {
    try {
      await axiosInstance.delete(API_PATHS.INCOME.DELETE_INCOME(id));
      setOpenDeleteAlert({ show: false, data: null });
      toast.success("Income details deleted successfully");
      fetchIncomeDetails();
    } catch (error) {
      console.error(
        "Error deleting income:",
        error.response?.data?.message || error.message
      );
    }
  };

  //Handle download income details
  const handleDownloadIncomeDetails = async () => {
       try {
    const response =  await axiosInstance.get(API_PATHS.INCOME.DOWNLOAD_INCOME ,  {
      responseType: "blob",
    })

    //Create a URL for the blob
  const url  = window.URL.createObjectURL(new Blob ([response.data]))
  const link = document.createElement("a");
   link.href = url;
   link.setAttribute("download", "income_details.xlsx")
   document.body.appendChild(link);
   link.click();
   link.parentNode.removeChild(link);
   window.URL.revokeObjectURL(url);
   } catch(error) {
 console.error("Error downloading income details:" , error);
 toast.error("Failed to download income details. Please try again.")
   }
  };

  useEffect(() => {
    fetchIncomeDetails();

    return () => {};

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DashboardLayout activeMenu="Income">
              <SEO
        title="Income | Monetao"
        description="Harcamalarını analiz et, gelir giderlerini kontrol et. Monetao income ekranı."
        url="https://monetao.com/income"
        image="https://monetao.com/assets/income-preview.jpg"
      />
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <div className="">
            <IncomeOverview
              transactions={incomeData}
              onAddIncome={() => setOpenAddIncomeModal(true)}
            />
          </div>

          <IncomeList
            transactions={incomeData}
            onDelete={(id) => {
              setOpenDeleteAlert({ show: true, data: id });
            }}
            onDownload={handleDownloadIncomeDetails}
          />
        </div>

        <Modal
          isOpen={openAddIncomeModal}
          onClose={() => setOpenAddIncomeModal(false)}
          title="Add Income"
        >
          <AddIncomeForm onAddIncome={handleAddIncome} />
        </Modal>

        <Modal
          isOpen={openDeleteAlert.show}
          onClose={() => setOpenDeleteAlert({ show: false, data: null })}
          title="Delete Income"
        >
          <DeleteAlert
            content="Are you sure you want to delete this income detail?"
            onDelete={() => deleteIncome(openDeleteAlert.data)}
          />
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default Income;
