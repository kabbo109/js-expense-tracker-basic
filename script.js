const list = document.getElementById('list');
const totalEl = document.getElementById('total');

function load(){
  const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  list.innerHTML = '';
  let total = 0;

  expenses.forEach((e,i)=>{
    total += e.amount;
    const li = document.createElement('li');
    li.innerHTML = `
      ${e.title} - ৳${e.amount}
      <button onclick="remove(${i})">x</button>
    `;
    list.appendChild(li);
  });

  totalEl.innerText = total;
}

function add(){
  const title = document.getElementById('title');
  const amount = document.getElementById('amount');

  if(!title.value || !amount.value) return;

  const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  expenses.push({ title: title.value, amount: Number(amount.value) });

  localStorage.setItem('expenses', JSON.stringify(expenses));
  title.value = '';
  amount.value = '';
  load();
}

function remove(i){
  const expenses = JSON.parse(localStorage.getItem('expenses'));
  expenses.splice(i,1);
  localStorage.setItem('expenses', JSON.stringify(expenses));
  load();
}

load();
