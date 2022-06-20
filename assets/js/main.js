document.addEventListener("DOMContentLoaded", () => {
  console.log(`The trip begins...`);

  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    if (scroll !== 0) {
      document.querySelector("header").classList.add("bordered");
    } else {
      document.querySelector("header").classList.remove("bordered");
    }
  });

  document.querySelector(".log-in").addEventListener("click", () => {
    document.querySelector(".modal").classList.remove("hidden");
  });

  document.querySelector("#mark").addEventListener("click", () => {
    document.querySelector(".modal").classList.add("hidden");
  });

  document
    .getElementById("contactForm")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      const response = await axios.post(
        "https://tpk-formulaire-back-end.herokuapp.com/form",
        {
          firstname: document.querySelector("#firstname").value,
          lastname: document.querySelector("#lastname").value,
          email: document.querySelector("#email").value,
          subject: document.querySelector("#subject").value,
          message: document.querySelector("#message").value,
        }
      );
    });
});
