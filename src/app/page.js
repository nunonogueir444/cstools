"use client";
import { useState } from "react";

export default function Home() {
  const [dateTime, setDateTime] = useState("");
  const [epoch, setEpoch] = useState("");

  const handleDateTimeChange = (e) => {
    const inputTime = e.target.value;
    setDateTime(inputTime);
    const convertedEpoch = Math.floor(new Date(inputTime).getTime() / 1000);
    setEpoch(convertedEpoch);
  };

  const handleEpochChange = (e) => {
    const inputEpoch = e.target.value;
    setEpoch(inputEpoch);
    const convertedDate = new Date(Number(inputEpoch) * 1000)
      .toISOString()

      .slice(0, 19)
      .replace("T", " ");
    setDateTime(convertedDate);
  };

  const handleSystemDate = () => {
    const now = new Date();

    const localDateTime = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 19);

    const formattedLocal = localDateTime.replace("T", "T");
    setDateTime(formattedLocal);
    setEpoch(Math.floor(now.getTime() / 1000));
  };

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <h1 className="text-xl font-bold mb-4">CSTools</h1>
      <div className="mb-4">
        <label className="mr-2">Date/Time:</label>
        <input
          type="datetime-local"
          step="1"
          value={dateTime}
          onChange={handleDateTimeChange}
          className="text-black"
        />
        <button onClick={handleSystemDate} className="ml-2 px-2 py-1 bg-gray-700">
          Use System Date
        </button>
      </div>
      <div>
        <label className="mr-2">Epoch:</label>
        <input
          type="number"
          value={epoch}
          onChange={handleEpochChange}
          className="text-black"
        />
      </div>
    </div>
  );
}