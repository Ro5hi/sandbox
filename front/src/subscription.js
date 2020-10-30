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
         <span><td>${this.name}</td></span>
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

  static sortSubs() {
    const subsTable = document.querySelector(".subs-list");
    let sort = true;
    while (sort) {
      sort = false;
      let s = subsTable.getElementsByTagName("div");
      for (let i = 0; i < (s.length - 1); i++) {
        let getSorted = false;
        if (s[i].querySelector("span").innerHTML > s[i +1].querySelector("span").innerHTML) {
          getSorted = true;
        }
        if (getSorted) {
          s[i].parentNode.insertBefore(s[i + 1], s[i]);
          sort = true;
        }
      }
    }
   

  }

  static filterRows(e) {
    const header = document.querySelector(".subs-header");
    const alphaFilter = document.createElement("button");
    alphaFilter.setAttribute("class", "button");
    alphaFilter.setAttribute("id", "a-z");
    alphaFilter.innerText = "A-Z";
    
    alphaFilter.addEventListener("click", (e) => this.sortSubs(e));
    header.appendChild(alphaFilter);
    
  }
}