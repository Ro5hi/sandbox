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

    BACKEND_URL = "http://localhost:3000";

    addSubToList() {
      const subName = document.getElementById("subname").value;
      const subCategory = document.getElementById("type").value;
      const subUrl = document.getElementById("link").value;
      const subPrice = document.getElementById("price").value;
      const list = document.getElementById("subs-list");
      const row = document.createElement("tr");
      row.innerHTML = `
      <td>${subName.name}</td>
      <td>${subCategory.type}</td>
      <td>${subUrl.Url}</td>
      <td>${subPrice.price}</td>
      <td><a href="#" class="btn btn-danger btn-sm Delete">X</a></td>
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