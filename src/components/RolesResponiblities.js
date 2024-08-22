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
        label: "Skills",
        data: [9.5, 9, 9.5, 8.5, 9, 5.6, 7, 9],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const responsibilitiesData = {
    labels: [
      "Front-End Development",
      "React.js Development",
      "UI/UX Implementation",
      "Tailwind CSS & Bootstrap",
      "Performance Optimization",
      "Version Control",
      "Cross-functional Collaboration",
      "UI Frameworks & Photoshop",
      "Code Reviews & Mentorship",
    ],
    datasets: [
      {
        label: "Responsibilities",
        data: [8, 9, 9, 9.5, 8.6, 8, 9, 8, 8],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const tooltipCallbacks = {
    callbacks: {
      title: (tooltipItems) => {
        return tooltipItems[0].label;
      },
      label: (tooltipItem) => {
        return `${tooltipItem.label}: ${tooltipItem.raw}/10`;
      },
      afterLabel: (tooltipItem) => {
        const skillsDescriptions = {
          HTML5:
            "Developed and maintained responsive and visually appealing web applications using HTML5.",
          "CSS/CSS3":
            "Skilled in designing responsive and visually appealing layouts with CSS/CSS3.",
          JavaScript:
            "Proficient in adding interactivity and dynamic content using JavaScript.",
          Bootstrap:
            "Experienced with using Bootstrap for fast and responsive design.",
          "React.js":
            "Specialized in building dynamic and complex web applications using React.js.",
          "Next.js":
            "Experienced in server-side rendering and static site generation with Next.js.",
          Git: "Adept at version control and managing code changes using Git.",
          "UI Libraries":
            "Experienced with various UI libraries and frameworks.",
        };

        const responsibilitiesDescriptions = {
          "Front-End Development":
            "Developed and maintained responsive and visually appealing web applications using HTML5, CSS/CSS3, JavaScript, and various UI libraries.",
          "React.js Development":
            "Created reusable React components and managed state efficiently using tools like React Context and Redux. Integrated APIs and managed asynchronous data fetching.",
          "UI/UX Implementation":
            "Collaborated with design teams to translate UI/UX designs into functional web applications. Conducted user research and testing.",
          "Tailwind CSS & Bootstrap":
            "Applied Tailwind CSS and Bootstrap for efficient styling and layout, ensuring a consistent and polished design.",
          "Performance Optimization":
            "Analyzed and optimized front-end performance using tools such as Lighthouse and WebPageTest. Implemented code splitting and lazy loading.",
          "Version Control":
            "Managed codebase and version control using Git. Collaborated through code reviews and pull requests.",
          "Cross-functional Collaboration":
            "Worked with back-end developers, designers, and product managers to deliver high-quality features. Participated in agile development processes.",
          "UI Frameworks & Photoshop":
            "Utilized various UI frameworks and libraries. Designed and implemented custom UI elements using Photoshop.",
          "Code Reviews & Mentorship":
            "Conducted code reviews and mentored junior developers, providing guidance in coding practices and professional growth.",
        };

        if (activeTab === "skills") {
          return skillsDescriptions[tooltipItem.label] || "";
        } else if (activeTab === "responsibilities") {
          return responsibilitiesDescriptions[tooltipItem.label] || "";
        }
        return "";
      },
    },
  };

  return (
    <div className="p-6 text-gray-800 sunshade-animation min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Skills and Responsibilities</h2>
      <div className="flex space-x-6 mb-6">
        <button
          className={`py-2 px-6 text-sm ${
            activeTab === "skills"
              ? "border-b border-orange-500 text-orange-500"
              : "text-gray-600 hover:text-orange-500"
          }`}
          onClick={() => setActiveTab("skills")}>
          Skills
        </button>
        <button
          className={`py-2 px-6 text-sm ${
            activeTab === "responsibilities"
              ? "border-b border-orange-500 text-orange-500"
              : "text-gray-600 hover:text-orange-500"
          }`}
          onClick={() => setActiveTab("responsibilities")}>
          Responsibilities
        </button>
      </div>

      <div className="p-6">
        {activeTab === "skills" && (
          <div className="relative h-64">
            <Bar
              data={skillsData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { position: "top" },
                  tooltip: tooltipCallbacks,
                },
              }}
              className="w-full h-full"
            />
          </div>
        )}

        {activeTab === "responsibilities" && (
          <div className="relative h-80 mt-8">
            <Pie
              data={responsibilitiesData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                  padding: {
                    top: 20, // Adjust top padding
                    right: 20,
                    bottom: 20,
                    left: 20,
                  },
                },
                plugins: {
                  legend: {
                    position: "top",
                    padding: 20, // Add padding for legend
                  },
                  tooltip: tooltipCallbacks,
                },
              }}
              className="w-full h-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RolesResponiblities;
