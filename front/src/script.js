const BACKEND_URL = "http://localhost:3000";

class Script {
  constructor() {
    this.subbers = [];
    this.subs = [];
  }

  // Save Subscriber

  saveSubber() {
    const submit = document
      .querySelector(".subber")
      .addEventListener("submit", (e) => {
        e.preventDefault();

        const subberName = e.target.name.value;
        const subberEmail = e.target.email.value;

        // Input Validations
        const subber = new Subscriber(subberName, subberEmail);
        if (subberName === "" || subberEmail === "") {
          alert("Name and email is required.");
        } else {
          fetch(`${BACKEND_URL}/subscribers`, {
            method: "POST",
            headers: {
              "Content-Type": `application/json`,
              Accept: `application/json`,
            },
            body: JSON.stringify({ name: subberName, email: subberEmail }),
          })
            .then((response) => response.json())
            .then((json) => {
              alert("Subscriber saved!");
            })
            .catch((error) => {
              alert("Error!/nCouldn't save subscriber.");
            });
        }
      });
  }

  getSubbers() {
    fetch(`${BACKEND_URL}/subscribers`)
      .then((response) => response.json())
      .then((json) => {
        json.forEach((subber) => {
          this.subbers.push(subber);
        });
        const subberList = document.getElementById("sub-save");
        this.subbers.forEach((subber) => {
          const option = document.createElement("OPTION");
          option.text = subber.email;
          option.value = subber.id;

          subberList.appendChild(option);
        });
        alert("Subscriber saved!");
      })
      .catch((error) => {
        alert("Error!/nCouldn't save subscriber.");
      });
  }

  
  renderSubs() {
    let subsTable = document.getElementById("subs-list");

    const subName = document.getElementById("subname").value;
    const subCategory = document.getElementById("type").value;
    const subUrl = document.getElementById("link").value;
    const subPrice = document.getElementById("price").value;
    const sub_id = document.getElementById("sub-save").value;

    subsTable.innerHTML += `
         <tr><td>${subName}</td></tr>
         <tr><td>${subCategory}</td></tr>
         <tr><td>${subUrl}</td></tr>
         <tr><td>${subPrice}</td></tr>
         <tr><td>${sub_id.email}</td></tr>
         <tr><td><a href="#" class="btn btn-danger btn-sm Delete">X</a></td></tr>
    `;
  }

  subsList() {
    fetch(`${BACKEND_URL}/subscriptions`)
      .then((resp) => resp.json())
      .then((subs) => {
        for (const sub of subs) {
          let s = new Subscription(
            sub.category,
            sub.name,
            sub.link,
            sub.price,
            sub.email,
            console.log("js obj", sub)
          );
          s.renderSubs()
        }
      });
  }

  // Save Subscription

  saveSub() {
    const save = document
      .querySelector(".sub-form")
      .addEventListener("submit", (e) => {
        e.preventDefault();

        // Sub Form
        const subName = document.getElementById("subname").value;
        const subCategory = document.getElementById("type").value;
        const subUrl = document.getElementById("link").value;
        const subPrice = document.getElementById("price").value;
        const sub_id = document.getElementById("sub-save").value;

        // Validate then add
        if (
          subName === "" ||
          subCategory === "" ||
          subUrl === "" ||
          subPrice === ""
        ) {
          alert("Fill in all fields.");
        } else {
          fetch(`${BACKEND_URL}/subscriptions`, {
            method: "POST",
            headers: {
              "Content-Type": `application/json`,
              Accept: `application/json`,
            },
            body: JSON.stringify({
              name: subName,
              category: subCategory,
              link: subUrl,
              price: subPrice,
              subscriber_id: sub_id,
            }),
          })
            .then((response) => response.json())
            .then((json) => {
              alert("Added Subscription!");
              {
              }
            })
            .catch((error) => {
              alert("Error!/nCouldn't save subscription.");
            });
        }
      });
  }
}