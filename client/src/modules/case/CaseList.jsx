import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../hooks/contexts/UserContext";

function CaseList({ caseList, setCaseList }) {
  const { token } = useContext(UserContext);

  useEffect(() => {
    if (!token) {
      return;
    }
    const fetchCaseList = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/legalcase", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setCaseList(data);
      } catch (error) {
        console.log("Error:", error.message);
      }
    };

    fetchCaseList();
  }, [token]);
  return (
    <div>
      <div>
        <p>List of cases</p>
      </div>
      {/* Grid */}
      <div className="border rounded p-2 mx-20">
        {/* Grid header */}
        <div className="grid grid-cols-[1fr_300px] gap-4 p-2 font-inter text-sm font-semibold border-b">
          <div>Title</div>
          <div className="grid grid-cols-4 gap-2">
            <div>Case Number</div>
            <div>Start</div>
            <div>Due</div>
            <div>Status</div>
          </div>
        </div>
        {/* Grid body */}
        <div className="grid grid-rows-[auto]">
          {caseList.map((c) => (
            <div
              key={c.caseNumber}
              className="grid grid-cols-[1fr_300px] gap-4 p-2 border-b hover:bg-gray-50 font-inter text-sm"
            >
              <div>{c.title}</div>
              <div className="grid grid-cols-4 gap-2">
                <div>{c.caseNumber}</div>
                <div>{c.startDate}</div>
                <div>{c.dueDate}</div>
                <div>{c.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CaseList;
