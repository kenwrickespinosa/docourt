import React, { useState } from "react";
import CaseForm from "./CaseForm";
import CaseList from "./CaseList";

function Case() {
  const [caseList, setCaseList] = useState([]);
  return (
    <div>
      <div>
        <p>Cases Page</p>
      </div>
      <div>
        <CaseForm caseList={caseList} setCaseList={setCaseList} />
      </div>
      <div>
        <CaseList caseList={caseList} setCaseList={setCaseList} />
      </div>
    </div>
  );
}

export default Case;
