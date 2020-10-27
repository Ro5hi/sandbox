class Subscription {
  constructor(id, category, name, link, price, recurring_date, email) {
      (this.id = id),
      (this.category = category),
      (this.name = name),
      (this.link = link),
      (this.recurring_date = recurring_date),
      (this.price = price),
      (this.email = email);
  }

  // Create subscription row

  renderSubs() {
    const subsTable = document.getElementById("subs-list");
    const subsDiv = document.createElement("div");
    subsDiv.id = `${this.id}sub`;
    subsTable.appendChild(subsDiv);
    subsDiv.innerHTML += `
         <tr><td><strong>${this.category}</strong></td>
         <td>${this.name}</td>
         <td>${this.link}</td> $
         <td>${this.recurring_date}</td>
         <td>${this.price}</td>
         <td>${this.email}</td>
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

  sortName(e) {
    

  }

  static filterBtn(e) {
    const alphaFilter = document.createElement("button");
    alphaFilter.setAttribute("class", "button");
    alphaFilter.setAttribute("id", "a-z");
    alphaFilter.innerText = "A-Z";
    alphaFilter.addEventListener("click", (e) => this.sortName(e));
    
    const header = document.querySelector(".subs-header");
    header.appendChild(alphaFilter);
    
  }
}