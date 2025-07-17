let num = 1;
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = num++ + ".  " + task;

  const btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.className = "delete";
  btn.addEventListener("click", function () {
    document.getElementById("taskList").removeChild(li);
  });

  li.appendChild(btn);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
