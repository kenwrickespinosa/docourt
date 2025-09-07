import React, { useContext, useState } from "react";
import { UserContext } from "../../hooks/contexts/UserContext";

function CaseForm({ caseList, setCaseList }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    caseNumber: "",
    court: "",
    status: "",
  });
  const { token } = useContext(UserContext);

  const handleCreateCase = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8080/api/user-legalcases/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`Response Status: ${response.status}`);
      }

      const newCase = await response.json();
      setCaseList([...caseList, newCase]);

      setFormData({
        title: "",
        description: "",
        caseNumber: "",
        court: "",
        status: "",
      });

      console.log("Case created successfully!");

    } catch (error) {
      console.log("Error: " + error.message);
    }
  };

  return (
    <div className="">
      <form onSubmit={handleCreateCase} className="flex flex-col items-center border">
        <input
          type="text"
          name="title"
          value={formData.title}
          placeholder="Title"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="border"
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          placeholder="Description"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <input
          type="text"
          name="caseNumber"
          value={formData.caseNumber}
          placeholder="Case Number"
          onChange={(e) =>
            setFormData({ ...formData, caseNumber: e.target.value })
          }
          className="border"
        />
        <input
          type="text"
          name="court"
          value={formData.court}
          placeholder="Court"
          onChange={(e) => setFormData({ ...formData, court: e.target.value })}
        />
        <input
          type="text"
          name="status"
          value={formData.status}
          placeholder="Status"
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        />
        <button type="submit" className="cursor-pointer">
          Save
        </button>
      </form>
    </div>
  );
}

export default CaseForm;
