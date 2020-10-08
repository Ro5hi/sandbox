  const BACKEND_URL = "http://localhost:3000";

  class Script { 
    addSubToList(sub) {
    const list = document.getElementById("subs-list");
    const row = document.createElement("tr");
      row.innerHTML = `
            <td>${sub.name}</td>
            <td>${sub.category}</td>
            <td>${sub.Url}</td>
            <td>${sub.price}</td>
            <td>${subberName.name}</td>
            <td>${subberEmail.email}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            <td><a href="#" class="btn btn-info btn-sm edit">O</a></td> 
            `;
        list.appendChild(row)
        debugger
    fetch(`${BACKEND_URL}/subscriptions`, {
      method: "POST",
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify({"name": name, "category": category, "link": link, "price": price, "subscriber": subberName}),
    })
    .then(response => response.json())
    .then(json => {
      console.log("Added:", sub);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
    // Delete entire table element 

    deleteSub(el) {
      if(el.classList.contains("delete")) {
          el.parentElement.parentElement.remove();
      }
      fetch (`${BACKEND_URL}/subscriptions`, {
        method: "DELETE",
      })
      .then(response => response.json())
      .then(json => {
        console.log("Deleted Subscription", sub);
      });
  }   

  showAlert(message, className) {
      const div = document.createElement("div");
      div.className = `alert alert-${className}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector(".container");
      const form = document.getElementById("sub-form");
      container.insertBefore(div, form);

      // Automatically gone in 3 seconds
      setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }

  clearFields() {
      document.getElementById("subname").value = "";
      document.getElementById("category").value = "";
      document.getElementById("link").value = "";
      document.getElementById("price").value = "";
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
  };
  
  // Save Subscriber
    saveSubber() {
    const submit = document.querySelector(".subber").addEventListener("submit", (e) => {
      
      // Prevent Default
      e.preventDefault();
      const subberName = e.target.name.value;
      const subberEmail = e.target.email.value;

      // Input Validations

      const subber = new Subscriber(subberName, subberEmail);

      if(subberName === "" || subberEmail === "") {
        this.showAlert("Name and email is required", "danger");
      } else {
        fetch(`${BACKEND_URL}/subscribers`, {
          method: "POST",
          headers: {
            "Content-Type": `application/json`,
          },
          body: JSON.stringify({"name": subberName, "email": subberEmail}),
        })
        .then(response => response.json())
        .then(json => {
          console.log("Added:", subber);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }

      /* Show success
      
      this.showAlert("Subscriber saved", "success");

      // Clear fields
  
      this.clearFields();  */
  });

  // Render Subscription

  document.addEventListener("DOMContentLoaded", this.displaySubs);

  // Add Subscription

  document.querySelector(".sub-form").addEventListener("add", (e) => {
    
    // Prevent Refresh
    e.preventDefault();

    // Get form values
    const subName = document.getElementById("name").value;
    const subCategory = document.getElementById("category").value;
    const subUrl = document.getElementById("link").value;
    const subPrice = document.getElementById("price").value;
    const subberName = e.target.name.value;
    const subberEmail = e.target.email.value;
    
    // Validate
 
    if(subName === "" || subCategory === "" || subUrl === "" || subPrice === "" || subberName === "" || subberEmail === "") {
        this.showAlert("Fill in all fields", "danger");
    } else { 
        const sub = new Subscription(subName, subCategory, subUrl, subPrice, subberName);

      // Add sub to script
      this.addSubToList(sub);

      // Show success
      // this.showAlert("Subscription added", "success");
      
      // Clear fields
        this.clearFields();
        }
    });


  }
}