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
