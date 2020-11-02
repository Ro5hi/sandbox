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
    // Loops through until there's nothing to sort
    while (sort) {
    // Start with nothing to sort and loops through Divs
      sort = false;
      let s = subsTable.getElementsByTagName("div");
      for (let i = 0; i < (s.length - 1); i++) {
        // Checks if the following should get sorted
        let getSorted = false;
        if (s[i].querySelector("span").innerHTML > s[i +1].querySelector("span").innerHTML) {
          getSorted = true;
        }
        // If all the rows have been sorted then it is done
        if (getSorted) {
          s[i].parentNode.insertBefore(s[i + 1], s[i]);
          sort = true;
        }
      }
    }
   

  }

  static sortRows(e) {
    const header = document.querySelector(".subs-header");
    const alphaFilter = document.createElement("button");
    // Creates button with the following attributes
    alphaFilter.setAttribute("class", "button");
    alphaFilter.setAttribute("id", "a-z");
    alphaFilter.innerText = "A-Z";
    header.appendChild(alphaFilter);
    // Call on event sortSubs for alphabetical sorting 
    alphaFilter.addEventListener("click", (e) => this.sortSubs(e));
  }

  // Filtered search by subscription name

  static filterSearch(e) {
    const header = document.querySelector(".subs-header");
    const subTable = document.getElementById("subs-list");
    
    // Create "search" input with attributes
    const search = document.createElement("input");
    search.setAttribute("type", "text");
    search.setAttribute("class", "input");
    search.setAttribute("id", "find");
    header.appendChild(search);

    // Get search bar for input
    const searchBar = document.getElementById("find");
    let subRow = subTable.getElementsByTagName("div");

    searchBar.addEventListener("keyup", (e) => {
      // Get subscription with the same characters
      const character = e.target.value.toLowerCase();
      const subsName = subTable.querySelector("span").innerHTML;
      // Return subscription in a table row with boolean matching characters in subRow
      debugger
      if(subsName.match(character)){
        subRow.style.display="table-row"; 
      } else {
        subRow.style.display="none";
      }
      }
    )
  }
}