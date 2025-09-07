import React, { useState } from "react";
import CaseForm from "./CaseForm";
import CaseList from "./CaseList";

function Case() {
  const [caseList, setCaseList] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div>
      <div>
        <p className="text-blue-400">Cases Page</p>
      </div>
      <div>
        <button
          onClick={() => setIsFormOpen(!isFormOpen)}
          className="cursor-pointer"
        >
          Create Case
        </button>
      </div>
      {isFormOpen ? (
        <div>
          <CaseForm caseList={caseList} setCaseList={setCaseList} />
        </div>
      ) : (
        <div>
          <CaseList caseList={caseList} setCaseList={setCaseList} />
        </div>
      )}
    </div>
  );
}

export default Case;
