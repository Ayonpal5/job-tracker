
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
