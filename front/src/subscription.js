class Subscription {
  constructor(name, link, category, price) {
    (this.name = name),
      (this.link = link),
      (this.email = email),
      (this.category = category),
      (this.price = price)
      ;
  }

  BACKEND_URL = "http://localhost:3000";

  deleteSub() {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
    fetch(`${BACKEND_URL}/subscriptions`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Deleted Subscription", sub);
      });
  }
}
