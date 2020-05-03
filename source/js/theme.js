/**
 * From rhazdon fork hello-friend-ng for updating theme-color meta tag  
 * https://github.com/rhazdon/hugo-theme-hello-friend-ng/blob/20810b2afdcfc2b0636d0c3277f6f2633af70916/assets/js/theme.js
 * Hello Friend is free software: you can redistribute it and/or modify
 * it under the terms of the MIT License
 */
// Toggle theme

const getTheme = window.localStorage && window.localStorage.getItem("theme");
const themeToggle = document.querySelector(".theme-toggle");
const isDark = getTheme === "dark";
var metaThemeColor = document.querySelector("meta[name=theme-color]");

if (getTheme !== null) {
  document.body.classList.toggle("dark-theme", isDark);
  isDark ? metaThemeColor.setAttribute("content", "#252627") : metaThemeColor.setAttribute("content", "#fafafa");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  window.localStorage &&
    window.localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-theme") ? "dark" : "light",
    );
  document.body.classList.contains("dark-theme") ?
    metaThemeColor.setAttribute("content", "#252627") : metaThemeColor.setAttribute("content", "#fafafa");
  ;
});
