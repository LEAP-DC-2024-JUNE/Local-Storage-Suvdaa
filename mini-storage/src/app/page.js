"use client";
import Image from "next/image";

export default function Home() {
  // const handleSave = () => {
  //   localStorage.setItem("name", "Suvd");
  const handleSave = () => {
    localStorage.setItem("formData", JSON.stringify({ name: "Suvd" }));
  };
  const getDataFromLocalStorage = () => {
    const result = localStorage.getItem("formData");
    if (result == null) {
      return;
    }
    const response = JSON.parse(result);
    console.log(response.name);
  };
  const deleteData = () => {
    localStorage.removeItem("name");
  };
  return (
    <div className="flex flex-col">
      <button onClick={handleSave}>Save data</button>
      <button onClick={getDataFromLocalStorage}>
        Get data from localStorage
      </button>
      <button onClick={deleteData}>Delete localStorage data</button>
    </div>
  );
}
