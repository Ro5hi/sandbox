class Subscription {
  constructor(name, link, category, price) {
    (this.name = name),
      (this.link = link),
      (this.category = category),
      (this.price = price)(
        (this.subscriber = subscribers.map(
          (subscriber) =>
            new Subscriber(subscriber.subscription, subscriber.subscriber_id)
        ))
      );
  }

  BACKEND_URL = "http://localhost:3000";

  renderSubs() {
    let subsTable = document.getElementById.name("subs-list")

    subsTable.innerHTML +=
    `
        <td>${this.name}</td>
         <td>${this.category}</td>
         <td>${this.link}</td>
         <td>${this.price}</td>
         <td><a href="#" class="btn btn-danger btn-sm Delete">X</a></td>
    `
  }

  
  deleteSub(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
    fetch(`${BACKEND_URL}/subscriptions/${this.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Deleted Subscription", sub);
      });
  }
}
