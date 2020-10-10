const BACKEND_URL = "http://localhost:3000";

class Script {
  constructor() {
    this.subbers = [];
    this.subbies = [];
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
          console.log(json)
          json.forEach(subber => {
            this.subbers.push(subber)
          })
          const subberList = document.getElementById('sub-save')
          this.subbers.forEach(subber => {
            const option = document.createElement('OPTION')
            option.text = subber.email
            option.value = subber.id
            
            subberList.appendChild(option);
          })
          alert("Subscriber saved!");
        })
        .catch((error) => {
          alert("Error!/nCouldn't save subscriber.");
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
              subscriber_id: sub_id
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
