const form = document.getElementById("form");
const category = document.getElementById("category");
const amount = document.getElementById("amount");
const list = document.getElementById("list");

myForm.addEventListener('submit', onSubmit);
myForm.addEventListener('update', onUpdate);
myForm.addEventListener('delete', onDestroy);

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

// Update Sub

/*
function updateSub() {
  const sub = { 
    render addSub()
  }

}
*/

// Delete Sub

function destroySub(id) {
  subscription = subscription.filter((subscription) => subscription.id !== id);
}

// List All Subs 

function allSubs() {
  var li = 
  "<li>" + $('#item-name').val() + $('price').val() + $('#date').value() + $('#url').val() + "</li>" +
  "<div id='button'><input class='btn' type='submit' value='Delete' onclick='destroySub(this);'></div>" +
  "<div id='button'><input class='btn' type='submit' value='Update' onclick='updateSub(this);'></div>"

  return li;
}

// Get Total Price on Subs

  let subsPrice = document.getElementById('price').value;
  let subsAmount = document.getElementById('amount').value;

  let subsTotal = document.getElementById('total').value = subsAmount + subsAmount 
  document.getElementById('subsTotal').value = parseFloat(subsPrice) + parseFloat(subsAmount)
