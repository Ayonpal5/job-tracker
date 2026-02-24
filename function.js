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
