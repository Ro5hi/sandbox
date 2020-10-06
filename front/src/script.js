// Constants

class SubTrack {

  const subForm = document.getElementById("form");
  const subName = document.getElementById("item-name")
  const subCategory = document.getElementById("category");
  const subAmount = document.getElementById("amount");
  const subsList = document.getElementById("list");
  
  const subberForm = document.getElementById("subber")
  const subberName = document.querySelector("name");
  const subberEmail = document.querySelector("email");


  const sub = {
    category: document.getElementById('category').value,
    name: document.getElementById('name').value,
    link: document.getElementById('link').value,
    price: document.getElementById('amount').value
  }

  // Event Listeners

  subberForm.addEventListener('save', onSubmit);
  form.addEventListener('add', onAdd);
  form.addEventListener('update', onUpdate);
  form.addEventListener('delete', onDestroy);

  // Create Sub

  fetch('localhost:3000/subscriptions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sub),
  })
  .then(response => response.json())
  .then(sub => {
    console.log('Added:', sub);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  // Render Sub 


  // List Subs When Adding
  
  function allSubs() {
  var li = "<li>" + $('#item-name').val() + $('price').val() + $('#date').value() + $('#url').val() + "</li>" +
    "<div id='button'><input class='btn' type='submit' value='Delete' onclick='destroySub(this);'></div>" +
    "<div id='button'><input class='btn' type='submit' value='Update' onclick='updateSub(this);'></div>";

    return li;
  }


  // Update Sub

  fetch('localhost:3000/subscriptions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sub),
  })
  .then(response => response.json())
  .then(sub => {
    console.log('Added:', sub);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  
  // Delete Sub

  fetch('localhost:3000/subscriptions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sub),
  })
  .then(response => response.json())
  .then(sub => {
    console.log('Added:', sub);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  // Get Total Price on Subs

    let subsPrice = document.getElementById('price').value;
    let subsAmount = document.getElementById('amount').value;

    let subsTotal = document.getElementById('total').value = subsAmount + subsAmount 
    document.getElementById('subsTotal').value = parseFloat(subsPrice) + parseFloat(subsAmount)
}