function table() {
  const app = document.querySelector("#app");
  const table = document.createElement("div");
  table.classList.add("w-75");
  table.classList.add("p-3");
  table.classList.add("h-75");
  table.classList.add("table");
  table.style.backgroundColor = "green";
  app.appendChild(table);
  console.log(app);
  return app;
}
export default table;
