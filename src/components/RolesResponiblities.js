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
          "rgba(255, 99, 132, 0.55)",
          "rgba(54, 162, 235, 0.55)",
          "rgba(255, 206, 86, 0.55)",
          "rgba(75, 192, 192, 0.55)",
          "rgba(153, 102, 255, 0.55)",
          "rgba(255, 159, 64, 0.55)",
          "rgba(255, 99, 132, 0.55)",
          "rgba(54, 162, 235, 0.55)",
          "rgba(255, 206, 86, 0.55)",
        ],
        borderColor: "#ffffffcc",
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e3e4e6] via-[#d9dadc] to-[#f2f3f4] py-16 overflow-hidden">
      {/* Soft glow spots for depth */}
      <div className="absolute top-16 left-24 w-[25vw] h-[25vw] bg-[#ffffff33] rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-28 w-[22vw] h-[22vw] bg-[#b6b8bb33] rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl w-[92%] bg-[#ffffff40] backdrop-blur-2xl border border-[#e0e0e0]/40 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-10 transition-all duration-500 hover:shadow-[0_10px_60px_rgba(0,0,0,0.12)]">
        <h2 className="text-3xl font-bold text-center mb-10 tracking-tight text-gray-900">
          <span className="bg-gradient-to-r from-[#63a241] via-[#ffb800] to-[#ff7a66] bg-clip-text text-transparent">
            Skills & Responsibilities
          </span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          {["skills", "responsibilities"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative mx-4 px-6 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-300 rounded-full ${
                activeTab === tab
                  ? "text-[#ff7a66] bg-white/70 shadow-md"
                  : "text-gray-600 hover:text-[#63a241] hover:bg-white/50"
              }`}
            >
              {tab === "skills" ? "Skills" : "Responsibilities"}
            </button>
          ))}
        </div>

        {/* Chart Display */}
        <div className="transition-all duration-700 ease-in-out">
          {activeTab === "skills" ? (
            <div className="relative h-[400px]">
              <Bar
                data={skillsData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                      grid: { color: "rgba(0,0,0,0.05)" },
                    },
                    x: {
                      ticks: { color: "#333" },
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
            <div className="relative h-[400px] flex justify-center items-center">
              <Pie
                data={responsibilitiesData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: "right",
                      labels: {
                        color: "#444",
                        boxWidth: 12,
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
      </div>
    </section>
  );
};

export default RolesResponiblities;
