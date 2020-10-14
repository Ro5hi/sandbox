class Subscription {
  constructor(category, name, link, price, date) {
    (this.category = category),
    (this.name = name),
      (this.link = link),
      (this.price = price),
      (this.date = date)
      ;
  }

  renderSubs() {

    const subsTable = document.getElementById("subs-list");
    const subbEmail = document.getElementById("sub-save").selectedOptions[0].text;  
  
    subsTable.innerHTML += `
         <tr><td>${this.category}</td></tr>
         <tr><td>${this.name}</td></tr>
         <tr><td>${this.link}</td></tr>
         <tr><td>${this.price}</td></tr>
         <tr><td>${this.date}</td></tr>
         <tr><td>${subbEmail}</td></tr>
         <tr><td><button>Delete</button></td></tr>
    `;
    }

    
  deleteSub() {
    debugger
    const BACKEND_URL = "http://localhost:3000";
    if (el.classList.contains("Delete")) {
      el.parentElement.parentElement.remove();
    }
    fetch(`${BACKEND_URL}/subscriptions`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        alert("Deleted Subscription");
      });
  }
}