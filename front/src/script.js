class Script {
    function addSubToList(sub) {
        const list = document.querySelector('subs-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${sub.name}</td>
            <td>${sub.category}</td>
            <td>${sub.link}</td>
            <td>${sub.price}</td>
            <td>${sub.subscriber}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            <td><a href="#" class="btn btn-danger btn-sm edit">O</a></td>
        `;
        list.appendChild(row);
    }

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
    
  function deleteSub(el) {
      if(el.classList.contains('delete')) {
          el.parentElement.parentElement.remove();

      }
  }   

  function showAlert(message, className) {
      const div = document.createElement('div');
      div.className = `alert alert-${className}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector('.container');
      const form = document.querySelector('sub-form');
      container.insertBefore(div, form);
      // Automatically gone in 3 seconds
      setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  function clearFields() {
      document.querySelector('name').value = '';
      document.querySelector('category').value = '';
      document.querySelector('link').value = '';
      document.querySelector('price').value = '';
      document.querySelector('subscriber').value = '';
  }
}
  
  // Save Subscriber 

  function saveSubber(subber) {
    const save = document.querySelector('subber').addEventListener('save', (e) 
    => {

      // Prevent Default
      e.preventDefault();

      const subberName = document.querySelector('name').value;
      const subberEmail = document.querySelector('email').value;

      // Validate

      if(name === '' || email === '') {
        Script.showAlert('Name and email is required', 'danger');
      } else {
        Script.saveSubberToList(subber);
      }

      const subber = new Subscriber(name, email);

      // Show success
      
      Script.showAlert('Subscriber saved', 'success');

      // Clear fields
  
      Script.clearFields();
  });

  // Render Subscription

  document.addEventListener('DOMContentLoaded', Script.displaySubs);

  // Add Subscription

  document.querySelector('sub-form').addEventListener('add', (e) 
  => {
    
    // Prevent Refresh
    e.preventDefault();

    // Get form values
    const name = document.querySelector('name').value;
    const category = document.querySelector('category').value;
    const link = document.querySelector('link').value;
    const price = document.querySelector('price').value;
    const subscriber = document.querySelector('subber').value;

    // Validate

    if(name === '' || category === '' || link === '' || price === '' || subscriber === '') {
        Script.showAlert('Fill in all fields', 'danger');
    } else { 
        const sub = new Subscription(name, category, link, price, subscriber); 

        // Add sub to script
        Script.addSubToList(sub);

        // Clear fields
        Script.clearFields();
        }
    });

    // Instantiate
      const subscription = new Subscription(name, category, link, price, subscriber);

    // Add to script
      Script.addSubToList(sub);

    // Show success
      Script.showAlert('Subscription added', 'success');

    // Clear fields
      Script.clearFields();
})  

  /* Get Total Price on Subs

    let subsPrice = document.getElementById('price').value;
    let subsAmount = document.getElementById('amount').value;

    let subsTotal = document.getElementById('total').value = subsAmount + subsAmount 
    document.getElementById('subsTotal').value = parseFloat(subsAmount) + parseFloat(subsAmount)
  */