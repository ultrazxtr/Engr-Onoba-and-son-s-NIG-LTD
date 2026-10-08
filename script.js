const menu = document.querySelector(".menu");
const nav = document.querySelector(".navlinks");


// Mobile navigation

if (menu && nav) {

  menu.addEventListener("click", function () {

    nav.classList.toggle("open");

  });


  nav.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

      nav.classList.remove("open");

    });

  });

}


// Highlight current page

const currentPage =
  document.body.dataset.page;

document
  .querySelectorAll(".navlinks a[data-page]")
  .forEach(function (link) {

    if (
      link.dataset.page === currentPage
    ) {

      link.classList.add("active");

    }

  });


// Current year

document
  .querySelectorAll("[data-year]")
  .forEach(function (element) {

    element.textContent =
      new Date().getFullYear();

  });


// WhatsApp quotation form

const quoteForm =
  document.getElementById("quoteForm");

if (quoteForm) {

  quoteForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();

      const formData =
        new FormData(quoteForm);

      const name =
        formData.get("name");

      const phone =
        formData.get("phone");

      const service =
        formData.get("service");

      const details =
        formData.get("details");


      const message =
`Hello Engr Onoba and son's NIG LTD,

I would like to request a quotation.

Name: ${name}

Phone: ${phone}

Service: ${service}

Project details:
${details}`;


      const whatsappURL =
        "https://wa.me/2348130347101?text="
        + encodeURIComponent(message);


      window.open(
        whatsappURL,
        "_blank"
      );

    }
  );

}
