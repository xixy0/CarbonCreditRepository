import React, { useEffect, useState } from "react";
import initialCreditData from "../credits.json";
import jsPDF from "jspdf";
import "../index.css"




function Dashboard() {
  const [creditData, setCreditData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [filteredData, setFilteredData] = useState([]);


  useEffect(() => {
    setCreditData(initialCreditData);
    setFilteredData(initialCreditData);
  }, []);

  const filterData = () => {
    const newData = creditData.filter(
      (credit) =>
        credit.project_name
          .toLowerCase()
          .includes(searchData.toLocaleLowerCase()) ||
        credit.vintage.toString().includes(searchData)
    );
    setFilteredData(newData);
  };

  const handleDownload = (credit) => {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 60;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  doc.text("Carbon Credit Retirement Certificate", pageWidth / 2, 80, { align: "center" });

 
  doc.setFont("helvetica", "normal");
  doc.setFontSize(14);
  doc.text(
    "This is to certify that the following carbon credit has been officially retired and recorded in our system:",
    pageWidth / 2,
    120,
    { align: "center", maxWidth: pageWidth - margin * 2 }
  );

 
  doc.setFontSize(16);
  let y = 160;
  doc.text(`UNIC ID: ${credit.unic_id}`, margin, y); y += 30;
  doc.text(`Project Name: ${credit.project_name}`, margin, y); y += 30;
  doc.text(`Vintage: ${credit.vintage}`, margin, y); y += 30;
  doc.text(`Status: ${credit.status}`, margin, y); y += 30;
  doc.text(`Issued at: ${new Date().toLocaleDateString()}`, margin, y); y += 50;

  
  doc.line(margin, y, 200, y);
  doc.text("Authorized Signature", margin, y + 20);

 
  doc.setFontSize(10);
  doc.text(
    "This certificate is digitally generated and does not require a physical signature.",
    pageWidth / 2,
    doc.internal.pageSize.getHeight() - 40,
    { align: "center" }
  );

  doc.save(`${credit.unic_id}-certificate.pdf`);
};

      
  

  return (
    <div className="min-h-screen bg-amber-50">
     
     <div className="p-8 max-w-5xl mx-auto ">
     

     
      <div className="flex text-black gap-3 mb-6">
        <input
          type="text"
          value={searchData}
          name="search"
          placeholder="Search by project name or vintage..."
          onChange={(e) => setSearchData(e.target.value)}
          className="flex-1 bg-white p-3 border rounded-lg shadow-sm focus:ring-1 focus:ring-black-700 focus:outline-none"
          
        />
        <button
          onClick={filterData}
          className="px-5 py-3 bg-green-700 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition !important"
        >
          Search
        </button>
      </div>

      
      <div className="overflow-x-auto bg-teal-100 rounded-lg shadow-lg">
        {filteredData.length > 0 ? (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="p-3 text-left">UNIC ID</th>
                <th className="p-3 text-left">Project Name</th>
                <th className="p-3 text-left">Vintage</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((credit) => (
                <tr
                  key={credit.unic_id}
                  className="border-b hover:bg-gray-50 transition text-black"
                >
                  <td className="p-3">{credit.unic_id}</td>
                  <td className="p-3">{credit.project_name}</td>
                  <td className="p-3">{credit.vintage}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm ${
                        credit.status === "Active"
                          ? "bg-green-500"
                          : "bg-gray-500"
                      }`}
                    >
                      {credit.status}
                    </span>
                  </td>
                  <td className="p-3">
                    {credit.status === "Retired"  && (
                      <button
                        onClick={() => handleDownload(credit)}
                        className="px-4 py-1 bg-cyan-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                      >
                        Download Retirement Certificate
                      </button>)}
                    

                    <div
                      id={`certificate-${credit.unic_id}`}
                      className ="hidden"
                    >
                      <h2 className="text-xl font-bold mb-4">
                        Carbon Credit Retirement Certificate
                      </h2>
                      <p>
                        <strong>UNIC ID:</strong> {credit.unic_id}
                      </p>
                      <p>
                        <strong>Project Name:</strong> {credit.project_name}
                      </p>
                      <p>
                        <strong>Vintage:</strong> {credit.vintage}
                      </p>
                      <p>
                        <strong>Status:</strong> {credit.status}
                      </p>

                      <p className="mt-4">
                        Issued at: {new Date().toLocaleDateString()}
                      </p>

                      <div className="mt-8">
                        <p>Signed By: ____________</p>
                        <p>Authorized Signature</p>
                      </div>
                    </div>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="p-6 text-center text-gray-500">No items to display</p>
        )}
      </div>
     </div>
    </div>
  );
}

export default Dashboard;