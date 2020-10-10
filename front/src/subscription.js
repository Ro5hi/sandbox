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
