class Subscription {
  constructor(name, link, category, price) {
    (this.name = name),
      (this.link = link),
      (this.email = email),
      (this.category = category),
      (this.price = price)(
        (this.subscriber = subscribers.map(
          (subscriber) =>
            new Subscriber(subber.sub, subber.sub_id)
        ))
      );
  }

  BACKEND_URL = "http://localhost:3000";

  renderSubs() {
    let subsTable = document.getElementById.name("subs-list");

    subsTable.innerHTML += `
        <td>${subName.name}</td>
         <td>${subCategory.category}</td>
         <td>${subLink.link}</td>
         <td>${subPrice.price}</td>
         <td>${sub_id}</td>
         <td><a href="#" class="btn btn-danger btn-sm Delete">X</a></td>
    `;
  }

  deleteSub(el) {
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
