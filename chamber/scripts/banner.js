function isBannerDay() {
    const today = new Date().getDay();
    return [1, 2, 5].includes(today);
  }
  
  function closeButton() {
    const banner = document.getElementById("announcement");
    banner.style.display = "none";
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    if (isBannerDay()) {
      const banner = document.getElementById("announcement");
      banner.style.display = "flex";
    }
  });
  