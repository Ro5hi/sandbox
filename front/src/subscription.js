class Subscription {
  constructor(id, category, name, link, price, date) {
    (this.id = id),
    (this.category = category),
      (this.name = name),
      (this.link = link),
      (this.price = price),
      (this.date = date);
  }

  // Create subscription listing

  renderSubs() {
    const subsTable = document.getElementById("subs-list");
    const subbEmail = document.getElementById("sub-save").selectedOptions[0]
      .text;
    const subsDiv = document.createElement("div")
    subsDiv.id = `${this.id}sub`
    subsTable.appendChild(subsDiv)
    subsDiv.innerHTML += `
         <tr><td>${this.category}</td>
         <td>${this.name}</td>
         <td>${this.link}</td>
         <td>${this.price}</td>
         <td>${this.date}</td>
         <td>${subbEmail}</td>
         <td><button id="delete">Delete</button></td></tr>
         </div>
    `;
    const btn = document.querySelector("#delete");
    btn.addEventListener("click", (e) => {
      fetch(`${BACKEND_URL}/subscriptions/${this.id}`, {
        method: "DELETE",
      })
        .then(() => {
          alert("Deleted Subscription");
          debugger
        document.getElementById(`${this.id}sub`).remove()
        }
        );
    })
    } 

  // Delete subscription

}
