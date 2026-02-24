const jobs = [
  {
    id: 1,
    companyName: "TechNova Ltd",
    position: "Frontend Developer",
    location: "Dhaka",
    type: "Full-time",
    salary: "60,000 BDT",
    description: "Develop responsive UI using modern JavaScript frameworks.",
    status: "all"
  },
  {
    id: 2,
    companyName: "DataSoft",
    position: "Backend Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "80,000 BDT",
    description: "Build scalable REST APIs and database architecture.",
    status: "all"
  },
  {
    id: 3,
    companyName: "Creative Solutions",
    position: "UI/UX Designer",
    location: "Chattogram",
    type: "Contract",
    salary: "50,000 BDT",
    description: "Design user-centered interfaces for web applications.",
    status: "all"
  },
  {
    id: 4,
    companyName: "CloudSync",
    position: "DevOps Engineer",
    location: "Dhaka",
    type: "Full-time",
    salary: "90,000 BDT",
    description: "Maintain CI/CD pipelines and cloud infrastructure.",
    status: "all"
  },
  {
    id: 5,
    companyName: "FinEdge",
    position: "QA Engineer",
    location: "Sylhet",
    type: "Part-time",
    salary: "40,000 BDT",
    description: "Perform automated and manual testing.",
    status: "all"
  },
  {
    id: 6,
    companyName: "SmartApps",
    position: "Mobile App Developer",
    location: "Remote",
    type: "Full-time",
    salary: "70,000 BDT",
    description: "Develop Android and iOS applications.",
    status: "all"
  },
  {
    id: 7,
    companyName: "CyberSecure",
    position: "Security Analyst",
    location: "Dhaka",
    type: "Full-time",
    salary: "85,000 BDT",
    description: "Monitor and secure company systems.",
    status: "all"
  },
  {
    id: 8,
    companyName: "AI Labs",
    position: "Machine Learning Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "100,000 BDT",
    description: "Develop ML models for business solutions.",
    status: "all"
  }
];

let currentTab = "all";

const jobContainer = document.getElementById("jobContainer");
const emptyState = document.getElementById("emptyState");

function updateCounts() {
  const all = jobs.length;
  const interview = jobs.filter(j => j.status === "interview").length;
  const rejected = jobs.filter(j => j.status === "rejected").length;

  document.getElementById("allCount").innerText = all;
  document.getElementById("interviewCount").innerText = interview;
  document.getElementById("rejectedCount").innerText = rejected;

  const visibleCount = currentTab === "all"
    ? all
    : jobs.filter(j => j.status === currentTab).length;

  document.getElementById("sectionCount").innerText = visibleCount + " Jobs";
}

function renderJobs() {
  jobContainer.innerHTML = "";

  let filtered = currentTab === "all"
    ? jobs
    : jobs.filter(job => job.status === currentTab);

  if (filtered.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  filtered.forEach(job => {
    const card = document.createElement("div");
    card.className = "bg-white p-5 rounded-xl shadow relative";

    card.innerHTML = `
      <h3 class="text-lg font-bold">${job.position}</h3>
      <p class="font-semibold">${job.companyName}</p>
      <p class="text-sm text-gray-600">${job.location} • ${job.type}</p>
      <p class="mt-2 font-medium">Salary: ${job.salary}</p>
      <p class="text-sm mt-2">${job.description}</p>
      <div class="flex gap-2 mt-4">
        <button class="interviewBtn px-3 py-1 bg-green-500 text-white rounded" data-id="${job.id}">Interview</button>
        <button class="rejectBtn px-3 py-1 bg-red-500 text-white rounded" data-id="${job.id}">Rejected</button>
        <button class="deleteBtn px-3 py-1 bg-gray-500 text-white rounded" data-id="${job.id}">Delete</button>
      </div>
    `;

    jobContainer.appendChild(card);
  });

  updateCounts();
}

document.addEventListener("click", function (e) {
  const id = parseInt(e.target.dataset.id);

  if (e.target.classList.contains("interviewBtn")) {
    const job = jobs.find(j => j.id === id);
    job.status = job.status === "interview" ? "all" : "interview";
  }

  if (e.target.classList.contains("rejectBtn")) {
    const job = jobs.find(j => j.id === id);
    job.status = job.status === "rejected" ? "all" : "rejected";
  }

  if (e.target.classList.contains("deleteBtn")) {
    const index = jobs.findIndex(j => j.id === id);
    jobs.splice(index, 1);
  }

  renderJobs();
});

document.querySelectorAll(".tabBtn").forEach(btn => {
  btn.addEventListener("click", function () {
    currentTab = this.dataset.tab;
    document.querySelectorAll(".tabBtn").forEach(b => b.classList.remove("bg-blue-500","text-white"));
    this.classList.add("bg-blue-500","text-white");
    renderJobs();
  });
});

renderJobs();