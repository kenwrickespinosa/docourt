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
      <div>
        {caseList.map((item) => (
            <ul key={item.caseNumber}>
                <li>
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                  <em>{item.caseNumber}</em>
                  <p>{item.status}</p>
                </li>
            </ul>
        ))}
      </div>
    </div>
  );
}

export default CaseList;
