console.log("SubTrack: Track your Subscriptions.")

const form = document.getElementById("form");
const category = document.getElementById("category");
const amount = document.getElementById("amount");
const list = document.getElementById("list");

myForm.addEventListener('submit', onSubmit);

let SubTrack = trackSubs()

function trackSubs() {
  return (() => {
    total = 0, nourishment = 0, service = 0, membership = 0;
  })();
}

// Create Sub

function addSub() {
  const sub = {
    category: document.getElementById('category').value,
    name: document.getElementById('name').value,
    link: document.getElementById('link').value,
    price: document.getElementById('amount').value
  }

  fetch("http://localhost:3000/app/subs", {
    method: 'POST',
    body: JSON.stringify(subscription),
  })
  .then(resp => resp.json() )
  .then(subscription => {
    clearSubsHtml()
    getSubs()
  })
}


// Categorize Sub


// Update Sub


// Delete Sub

function destroySub(id) {
  subscription = subscription.filter((subscription) => subscription.id !== id);
}

// Get Total

function getTotal(){
  var arr = document.getElementsByName('list');
  var tot=0;
  for(var i=0;i<arr.length;i++){
      if(parseInt(arr[i].value))
          total += parseInt(arr[i].value);
  }
  document.getElementById('total').value = total;
}


// Get All-Subs 

form.addEventListener("submit", addSub);