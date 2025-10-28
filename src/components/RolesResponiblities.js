import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement
);

const RolesResponiblities = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const skillsData = {
    labels: [
      "HTML5",
      "CSS/CSS3",
      "JavaScript",
      "Bootstrap",
      "React.js",
      "Next.js",
      "Git",
      "UI Libraries",
    ],
    datasets: [
      {
        label: "Skill Level",
        data: [9.5, 9, 9.5, 8.5, 9, 5.6, 7, 9],
        backgroundColor: [
          "rgba(255, 99, 132, 0.25)",
          "rgba(54, 162, 235, 0.25)",
          "rgba(255, 206, 86, 0.25)",
          "rgba(75, 192, 192, 0.25)",
          "rgba(153, 102, 255, 0.25)",
          "rgba(255, 159, 64, 0.25)",
          "rgba(99, 255, 175, 0.25)",
          "rgba(54, 162, 235, 0.25)",
        ],
        borderColor: [
          "#ff6384",
          "#36a2eb",
          "#ffce56",
          "#4bc0c0",
          "#9966ff",
          "#ff9f40",
          "#63a241",
          "#36a2eb",
        ],
        borderWidth: 2,
        borderRadius: 6,
      },
    ],
  };

  const responsibilitiesData = {
    labels: [
      "Front-End Development",
      "React.js Development",
      "UI/UX Implementation",
      "Tailwind & Bootstrap",
      "Performance Optimization",
      "Version Control",
      "Cross-team Collaboration",
      "UI Frameworks & Photoshop",
      "Code Reviews & Mentorship",
    ],
    datasets: [
      {
        data: [8, 9, 9, 9.5, 8.6, 8, 9, 8, 8],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const tooltipCallbacks = {
    callbacks: {
      title: (tooltipItems) => tooltipItems[0].label,
      label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}/10`,
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#f8fafc] via-[#ffffff] to-[#eef2f3] overflow-hidden py-20">
      {/* Subtle glowing background accents */}
      <div className="absolute top-0 left-0 w-[35vw] h-[35vw] bg-[#ffb800]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] bg-[#63a241]/10 rounded-full blur-3xl"></div>

      {/* Title */}
      <h2 className="text-4xl md:text-4xl font-extrabold mb-10 tracking-tight text-center relative z-10">
        <span className="bg-gradient-to-r from-[#63a241] via-[#ffb800] to-[#ff7a66] bg-clip-text text-transparent">
          Skills & Responsibilities
        </span>
      </h2>

      {/* Tabs */}
      <div className="flex justify-center mb-10 z-10">
        {["skills", "responsibilities"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`mx-3 px-6 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-300 rounded-full ${
              activeTab === tab
                ? "text-white bg-gradient-to-r from-[#63a241] via-[#ffb800] to-[#ff7a66] shadow-lg scale-105"
                : "text-gray-700 bg-white/50 hover:bg-white/80"
            }`}
          >
            {tab === "skills" ? "Skills" : "Responsibilities"}
          </button>
        ))}
      </div>

      {/* Chart Section */}
      <div className="relative z-10 w-full px-4 md:px-10">
        {activeTab === "skills" ? (
          <div className="w-full h-[500px]">
            <Bar
              data={skillsData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: { color: "rgba(0,0,0,0.05)" },
                    ticks: { color: "#333" },
                  },
                  x: {
                    ticks: { color: "#333" },
                    grid: { color: "rgba(0,0,0,0.03)" },
                  },
                },
                plugins: {
                  legend: {
                    position: "top",
                    labels: { color: "#444", font: { size: 13 } },
                  },
                  tooltip: tooltipCallbacks,
                },
              }}
            />
          </div>
        ) : (
          <div className="w-full h-[500px] flex justify-center items-center">
            <Pie
              data={responsibilitiesData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                  padding: 10,
                },
                plugins: {
                  legend: {
                    position: "right",
                    labels: {
                      color: "#444",
                      boxWidth: 14,
                      font: { size: 13 },
                    },
                  },
                  tooltip: tooltipCallbacks,
                },
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default RolesResponiblities;
