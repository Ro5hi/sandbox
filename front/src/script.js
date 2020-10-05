console.log("SubTrack: Track your Subscriptions")

const form = document.getElementById("form");
const category = document.getElementById("type");
const amount = document.getElementById("amount");
const list = document.getElementById("list");

myForm.addEventListener('submit', onSubmit);

let SubTrack = startApp()

function startApp() {
  return (() => {
    total = 0, nourishment = 0, service = 0, membership = 0;
  })();
}

// Create Sub

function addSub(e) {
  e.preventDefault();


// Categorize Sub


// Update Sub


// Delete Sub

function destroySub(id) {
  subscription = subscription.filter((subscription) => subscription.id !== id);
}


// Get Amount

const amounts = subscriptions.map((subscription) => subscription.amount);

// Get List of Subs

const listed = document.createElement("li");

form.addEventListener("submit", addSub);