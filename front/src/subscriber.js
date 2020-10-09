class Subscriber {
  constructor(name, email) {
    (this.name = name),
    (this.email = email)
  }

    BACKEND_URL = "http://localhost:3000";

    // Add email to table as TR
    
    addEmailToList() {
      const list = document.getElementById("subs-list");
      const row = document.createElement("tr");
      row.innerHTML = `
      <td>${subEmail.email}</td>
      <td><a href="#" class="btn btn-danger btn-sm Change"></a></td>
      `;
      list.appendChild(row)
    }
  }