// --- utilities ---
// element toggle function
const ElementToggleFunction = function (elem) { elem.classList.toggle("active"); }

// --- aside bar ---
// variables of aside bar
const Asidebar = document.querySelector("[Data-AsideBar]");
const AsidebarButton = document.querySelector("[Data-AsideBar-Button]");

// toggle button of aside bar
AsidebarButton.addEventListener("click", function () { ElementToggleFunction(Asidebar); });


// --- main content switching ---
const MainContentPageLinks = document.querySelectorAll("[Data-Page-Link]");
const Pages = document.querySelectorAll("[Data-Page]");

for (let i = 0; i < MainContentPageLinks.length; i++) {

  MainContentPageLinks[i].addEventListener("click", function () {

    for (let i = 0; i < Pages.length; i++) {
      if (this.innerHTML.toLowerCase() === Pages[i].dataset.page) 
      {
        Pages[i].classList.add("active");
        MainContentPageLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } 
      else 
      {
        Pages[i].classList.remove("active");
        MainContentPageLinks[i].classList.remove("active");
      }
    }

  });

}

// --- selecting filters ---  

// --- project
const Project_SelectingFilter = document.querySelector("[Data-Select-Filter-Project]");
const Project_SelectingFilterValue = document.querySelector("[Data-Select-Filter-Value-Project]");
const Project_SelectingItems = document.querySelectorAll("[Data-Select-Item-Project]");
const Project_FilterButton = document.querySelectorAll("[Data-Filter-Button-Project]");
const Project_FilterItems = document.querySelectorAll("[Data-Filter-Item-Project]");


Project_SelectingFilter.addEventListener("click", function () { ElementToggleFunction(this); });

// add event for filter select items
for (let i = 0; i < Project_SelectingItems.length; i++) {
  Project_SelectingItems[i].addEventListener("click", function () {
    Project_SelectedFiltering(this.innerText);
    ElementToggleFunction(Project_SelectingFilter);
  });
}

// add event for filter button items
let Project_LastClickedButton = Project_FilterButton[0];
for (let i = 0; i < Project_FilterButton.length; i++) {
  Project_FilterButton[i].addEventListener("click", function () {
    Project_SelectedFiltering(this.innerText);
    Project_LastClickedButton.classList.remove("active");
    this.classList.add("active");
    Project_LastClickedButton = this;
  });
}

// conduct the filtering
const Project_SelectedFiltering = function (selected_value) {

  Project_SelectingFilterValue.innerText = selected_value;
  selected_value = selected_value.toLowerCase();
  // console.log(Project_SelectingFilterValue.innerText);
  for (let i = 0; i < Project_FilterItems.length; i++) {

    if (selected_value === "all") {
      Project_FilterItems[i].classList.add("active");
    } else if (selected_value === Project_FilterItems[i].dataset.category) {
      Project_FilterItems[i].classList.add("active");
    } else {
      Project_FilterItems[i].classList.remove("active");
    }

  }

}


// --- blog
const Blog_SelectingFilter = document.querySelector("[Data-Select-Filter-Blog]");
const Blog_SelectingFilterValue = document.querySelector("[Data-Select-Filter-Value-Blog]");
const Blog_SelectingItems = document.querySelectorAll("[Data-Select-Item-Blog]");
const Blog_FilterButton = document.querySelectorAll("[Data-Filter-Button-Blog]");
const Blog_FilterItems = document.querySelectorAll("[Data-Filter-Item-Blog]");


Blog_SelectingFilter.addEventListener("click", function () { ElementToggleFunction(this); });

// add event for filter select items
for (let i = 0; i < Blog_SelectingItems.length; i++) {
  Blog_SelectingItems[i].addEventListener("click", function () {
    Blog_SelectedFiltering(this.innerText);
    ElementToggleFunction(Blog_SelectingFilter);
  });
}

// add event for filter button items
let Blog_LastClickedButton = Blog_FilterButton[0];
for (let i = 0; i < Blog_FilterButton.length; i++) {
  Blog_FilterButton[i].addEventListener("click", function () {
    Blog_SelectedFiltering(this.innerText);
    Blog_LastClickedButton.classList.remove("active");
    this.classList.add("active");
    Blog_LastClickedButton = this;
  });
}

// conduct the filtering
const Blog_SelectedFiltering = function (selected_value) {

  Blog_SelectingFilterValue.innerText = selected_value;
  selected_value = selected_value.toLowerCase();
  // console.log(Blog_SelectingFilterValue.innerText);
  for (let i = 0; i < Blog_FilterItems.length; i++) {

    if (selected_value === "all") {
      Blog_FilterItems[i].classList.add("active");
    } else if (selected_value === Blog_FilterItems[i].dataset.category) {
      Blog_FilterItems[i].classList.add("active");
    } else {
      Blog_FilterItems[i].classList.remove("active");
    }

  }

}
