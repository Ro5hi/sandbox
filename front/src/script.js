BACKEND_URL = "http://localhost:3000";

class Script {  

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
            alert("Name and email is required", "danger");
          } else {
            fetch(`${BACKEND_URL}/subscribers`, {
              method: "POST",
              headers: {
                "Content-Type": `application/json`,
                "Accept": `application/json`
              },
                body: JSON.stringify({"name": subberName, "email": subberEmail}),
            }),
            .then(response => response.json())
            .then(json => {
              alert("Saved Subscriber");{
            }
            })
            .catch((error) => {
              alert("Error!/nCouldn't save subscriber.");
            }
          

          // Add Subscription

          saveSub(); {
          const save = document.querySelector(".sub-form").addEventListener("submit", (e) => {
          e.preventDefault();

          // Sub Form consts
          const subName = document.getElementById("subname").value;
          const subCategory = document.getElementById("type").value;
          const subUrl = document.getElementById("link").value;
          const subPrice = document.getElementById("price").value;
          
          const sub = new Subscription(subName, subCategory, subUrl, subPrice);
          
          debugger

          // Validate
          if(subName === "" || subCategory === "" || subUrl === "" || subPrice === "") {
              alert("Fill in all fields.");
          } else {
            fetch(`${BACKEND_URL}/subscriptions`, {
              method: "POST",
              headers: {
                "Content-Type": `application/json`,
                "Accept": `application/json`
              },
              body: JSON.stringify({"name": subName, "category": subCategory, "link": subUrl, "price": subPrice}),
            })
            .then(response => response.json())
            .then(json => {
              alert("Saved Subscription");{
              }
            })
            .catch((error) => {
              alert("Error!/nCouldn't add subscription.");
