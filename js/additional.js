
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.target.classList);

    if (entry.isIntersecting && entry.target.classList.contains("hidden")) {
      entry.target.classList.add("show");
    } else if (
      entry.isIntersecting &&
      entry.target.classList.contains("hidden-txt")
    ) {
      entry.target.classList.add("show-txt");
    } else {
      entry.target.classList.remove("show");
      entry.target.classList.remove("show-txt");
    }
  });
});

// const observer = new IntersectionObserver((entries) => {

//     entries.forEach((entry) => {
//         console.log(entry)

//         if (entry.isIntersecting) {
//             entry.target.classList.add('show')
//         } else {
//             entry.target.classList.remove('show')
//         }
//     })

// })

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hiddenText = document.querySelectorAll(".hidden-txt");
hiddenText.forEach((el) => observer.observe(el));
