const quickIconContainer = document.querySelector(".quick-icons");

const home = document.querySelector(".home");
const homeOptions = {
  threshold: 0.8,
};

const handleHome = (entries) => {
    if (entries[0].isIntersecting) {
      quickIconContainer.classList.add("show-off");
    } else {
      quickIconContainer.classList.remove("show-off");
    }
  };