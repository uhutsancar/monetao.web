import React from "react";

const TransactionsChart = () => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">
            All Transactions
          </h2>
          <p className="text-gray-500">2nd Jan to 21th Dec</p>
        </div>
        <button className="bg-violet-100 text-violet-600 px-4 py-2 rounded-xl font-medium hover:bg-violet-200 transition-colors">
          View More
        </button>
      </div>

      {/* Chart Area */}
      <div className="relative">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-80 flex flex-col justify-between text-sm text-gray-500 py-4">
          <span>400</span>
          <span>230</span>
          <span>160</span>
          <span>120</span>
          <span>50</span>
          <span>0</span>
        </div>

        {/* Chart bars container */}
        <div className="ml-12 flex items-end justify-between h-80 px-4 relative">
          {/* January */}
          <div className="flex flex-col items-center">
            <div className="w-12 bg-violet-300 rounded-t-lg h-5"></div>
            <div className="w-12 bg-violet-600 rounded-b-lg h-24"></div>
            <span className="text-sm text-gray-700 mt-3 font-medium">Jan</span>
          </div>

          {/* February */}
          <div className="flex flex-col items-center">
            <div className="w-12 bg-violet-300 rounded-t-lg h-8"></div>
            <div className="w-12 bg-violet-600 rounded-b-lg h-32"></div>
            <span className="text-sm text-gray-700 mt-3 font-medium">Feb</span>
          </div>

          {/* March */}
          <div className="flex flex-col items-center">
            <div className="w-12 bg-violet-300 rounded-t-lg h-16"></div>
            <div className="w-12 bg-violet-600 rounded-b-lg h-40"></div>
            <span className="text-sm text-gray-700 mt-3 font-medium">Mar</span>
          </div>

          {/* April - with popup */}
          <div className="flex flex-col items-center relative">
            {/* Popup */}
            <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-lg p-3 shadow-lg z-10 min-w-max">
              <div className="text-sm font-semibold text-gray-900 mb-2">
                April
              </div>
              <div className="text-xs text-green-600 mb-1">Income $5400</div>
              <div className="text-xs text-red-600">Expense $5400</div>
              {/* Arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
            </div>
            <div className="w-12 bg-violet-300 rounded-t-lg h-12"></div>
            <div className="w-12 bg-violet-600 rounded-b-lg h-36"></div>
            <span className="text-sm text-gray-700 mt-3 font-medium">Apr</span>
          </div>

          {/* May */}
          <div className="flex flex-col items-center">
            <div className="w-12 bg-violet-300 rounded-t-lg h-4"></div>
            <div className="w-12 bg-violet-600 rounded-b-lg h-16"></div>
            <span className="text-sm text-gray-700 mt-3 font-medium">May</span>
          </div>

          {/* June */}
          <div className="flex flex-col items-center">
            <div className="w-12 bg-violet-300 rounded-t-lg h-8"></div>
            <div className="w-12 bg-violet-600 rounded-b-lg h-48"></div>
            <span className="text-sm text-gray-700 mt-3 font-medium">Jun</span>
          </div>

          {/* July */}
          <div className="flex flex-col items-center">
            <div className="w-12 bg-violet-300 rounded-t-lg h-16"></div>
            <div className="w-12 bg-violet-600 rounded-b-lg h-48"></div>
            <span className="text-sm text-gray-700 mt-3 font-medium">Jul</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsChart;
