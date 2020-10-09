class Subscription {
    constructor(name, link, category, price) {
      (this.name = name),
      (this.link = link),
      (this.category = category),
      (this.price = price)
      (this.subscriber = subscribers.map( 
        (subscriber) => new Subscriber(subscriber.subscription, subscriber.subscriber_id)
      ))
    }

    addSubToList() {
      const list = document.getElementById("subs-list");
      const row = document.createElement("tr");
        row.innerHTML = `
            <td>${subName.name}</td>
            <td>${sub.type}</td>
            <td>${sub.Url}</td>
            <td>${sub.price}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            `;
          list.appendChild(row)
    }

    deleteSub(el) {
      if(el.classList.contains("delete")) {
        el.parentElement.parentElement.remove();
    }
    fetch (`${BACKEND_URL}/subscriptions/${this.id}`, {
      method: "DELETE",
    })
    .then(response => response.json())
    .then(json => {
      console.log("Deleted Subscription", sub);
    });
    }

  }