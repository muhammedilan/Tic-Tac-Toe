let desk = "X";
let box = document.querySelectorAll(".box");
let endGame = false;
let winner = "";
box.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (endGame == false) {
      if (e.target.innerText <= 0) {
        if (desk == "X") {
          e.target.innerText = "X";
          desk = "O";
        } else {
          e.target.innerText = "O";
          e.target.classList.add("text-[#66BFBF]");
          desk = "X";
        }
      }
      checkRows();
      checkCol();
      checkDiagonal();
      checkTie();
    }
  });
});

function checkRows() {
  let row1 =
    box[0].textContent == box[1].textContent &&
    box[0].textContent == box[2].textContent &&
    box[0].textContent !== "";
  let row2 =
    box[3].textContent == box[4].textContent &&
    box[3].textContent == box[5].textContent &&
    box[3].textContent !== "";

  let row3 =
    box[6].textContent == box[7].textContent &&
    box[6].textContent == box[8].textContent &&
    box[6].textContent !== "";
  if (row1 || row2 || row3) {
    if (row1) winner = box[0].textContent;
    if (row2) winner = box[3].textContent;
    if (row3) winner = box[6].textContent;
    alert("game over winner" + " " + winner);
    location.reload();
  }
}
function checkCol() {
  let col1 =
    box[0].textContent == box[3].textContent &&
    box[0].textContent == box[6].textContent &&
    box[0].textContent !== "";
  let col2 =
    box[1].textContent == box[4].textContent &&
    box[1].textContent == box[7].textContent &&
    box[1].textContent !== "";

  let col3 =
    box[2].textContent == box[5].textContent &&
    box[2].textContent == box[8].textContent &&
    box[2].textContent !== "";
  if (col1 || col2 || col3) {
    if (col1) winner = box[0].textContent;
    if (col2) winner = box[1].textContent;
    if (col3) winner = box[2].textContent;
    alert("game over winner" + " " + winner);
    location.reload();
  }
}
function checkDiagonal() {
  let diagonal1 =
    box[0].textContent == box[4].textContent &&
    box[0].textContent == box[8].textContent &&
    box[0].textContent !== "";
  let diagonal2 =
    box[2].textContent == box[4].textContent &&
    box[2].textContent == box[6].textContent &&
    box[2].textContent !== "";

  if (diagonal1 || diagonal2) {
    if (diagonal1) winner = box[0].textContent;
    if (diagonal2) winner = box[2].textContent;
    alert("game over winner" + " " + winner);
    location.reload();
  }
}
function checkTie() {
  const values = [];
  for (let i = 0; i <= 8; i++) {
    values.push(box[i].innerText);
  }
  if (!values.includes("") && winner.length > 0) {
    alert("Tie");
    location.reload();
  }
}
