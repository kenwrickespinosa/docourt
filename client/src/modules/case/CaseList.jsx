import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../hooks/contexts/UserContext";

function CaseList({caseList, setCaseList}) {
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
      <div className="flex justify-center">
        <table>
          <thead>
            <tr>
              <th className="font-inter">Title</th>
              <th className="font-inter">Description</th>
              <th className="font-inter">Case Number</th>
              <th className="font-inter">Court</th>
              <th className="font-inter">Status</th>
            </tr>
          </thead>
          <tbody>
            {caseList.map((c) => (
              <tr key={c.caseNumber}>
                <td className="font-inter">{c.title}</td>
                <td className="font-inter">{c.description}</td>
                <td className="font-inter">{c.caseNumber}</td>
                <td className="font-inter">{c.court}</td>
                <td className="font-inter text-yellow-400">{c.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CaseList;
