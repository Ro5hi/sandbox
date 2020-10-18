class Subscription {
  constructor(id, category, name, link, price, recurring_date) {
      (this.id = id),
      (this.category = category),
      (this.name = name),
      (this.link = link),
      (this.recurring_date = recurring_date),
      (this.price = price);
  }

  // Create subscription row

  renderSubs() {
    const subsTable = document.getElementById("subs-list");
    const subbEmail = document.getElementById("sub-save").selectedOptions[0].text;
    const subsDiv = document.createElement("div");
    subsDiv.id = `${this.id}sub`;
    subsTable.appendChild(subsDiv);
    subsDiv.innerHTML += `
         <tr><td>${this.category}</td>
         <td>${this.name}</td>
         <td>${this.link}</td>
         <td>${this.recurring_date}</td>
         <td>${this.price}</td>
         <td>${subbEmail}</td>
         <td><button id="delete">Delete</button></td></tr>
         </div>
    `;

    // Delete subscription by subsDiv

    const delBtn = subsDiv.querySelector("#delete");
    delBtn.addEventListener("click", (e) => {
      fetch(`http://localhost:3000/subscriptions/${this.id}`, {
        method: "DELETE"
      })
        .then(() => {
          console.log("Deleted Subscription");
        })
        .then(subsDiv.remove());
    });
  }
}
