const BACKEND_URL = "http://localhost:3000";

class Script {
  
  // Dark Mode

  darkMode() {
    document.addEventListener("DOMContentLoaded", () => {
      const styleSheet = document.getElementById("styles");
      const toggle = document.getElementById("toggle");
      toggle.addEventListener("click", () => {
        // Switch to Dark

        if (styleSheet.href.includes("light")) {
          styleSheet.href = "dark.css";
          toggle.innerText = "🌙";
        } else {
          // Switch to Light

          styleSheet.href = "light.css";
          toggle.innerText = "💡";
        }
      });
    });
  }

  // Save Subscriber

  saveSubber() {
    const submit = document.querySelector(".subber");
    const subberForm = document.getElementById("subber-form");

    submit.addEventListener("submit", (e) => {
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
            this.getSubbers(json);
            console.log("Subscriber saved!");
            subberForm.reset();
          })
          .catch((error) => {
            alert("Error! Couldn't save subscriber.");
          });
      }
    });
  }

  // Loop code to remove extra renders

  removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }

  // Save Subscriber

  getSubbers() {
    fetch(`${BACKEND_URL}/subscribers`)
      .then((response) => response.json())
      .then((json) => {
        const subberList = document.getElementById("sub-save");
        this.removeAllChildNodes(subberList);
        json.forEach((subber) => {
          const option = document.createElement("OPTION");
          option.value = subber.id; 
          option.text = subber.email;
          subberList.appendChild(option);
        });
      });
  }

  // Create new Subscription instance, render to table

  subsList() {
    fetch(`${BACKEND_URL}/subscriptions`)
      .then((resp) => resp.json())
      .then((subs) => {
        console.log(subs);
        for (const sub of subs) {
          this.addSubscription(sub);
        }
      });
  }

  addSubscription(sub) {
    let s = new Subscription(
      sub.id,
      sub.category,
      sub.name,
      sub.link,
      sub.recurring_date,
      sub.price,
      sub.email
    );
    console.log(s);
    s.renderSubs();
  }

  // Save Subscription

  saveSub() {
    const save = document.getElementById("subform");
    save.addEventListener("submit", (e) => {
      e.preventDefault();

      // Sub Form

      const subCategory = document.getElementById("type").value;
      const subName = document.getElementById("subname").value;
      const subLink = document.getElementById("link").value;
      const subDate = document.getElementById("date").value;
      const subPrice = document.getElementById("price").value;
      const sub_id = document.getElementById("sub-save").value;

      // Validate then add
      if (
        subName === "" ||
        subCategory === "" ||
        subLink === "" ||
        subPrice === "" ||
        subDate === ""
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
            category: subCategory,
            name: subName,
            link: subLink,
            recurring_date: subDate,
            price: subPrice,
            subscriber_id: sub_id
          }),
        })
          .then((response) => response.json())
          .then((json) => {
            this.addSubscription(json);
            console.log("Added Subscription!");
            save.reset();
          })
          .catch((error) => {
            alert("Error! Couldn't save subscription.");
          });
      }
    });
  }
}
