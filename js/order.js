
// Lab 4: save orders in localStorage and show them safely.
const STORAGE_KEY = "cafeOrders";

const form = document.querySelector("#order-form");
const tbody = document.querySelector("#orders-body");
const message = document.querySelector("#message");
const clearButton = document.querySelector("#clear-orders");

// Read saved orders. If the data is missing or damaged, use an empty list.
function loadOrders() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (error) {
    return [];
  }
}

// Save orders in the browser.
function saveOrders(orders) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
}

// Add a table cell safely using textContent.
function addCell(row, text) {
  const cell = document.createElement("td");
  cell.textContent = text;
  row.appendChild(cell);
}

// Display saved orders in the table.
function render() {
  const orders = loadOrders();
  tbody.innerHTML = "";

  if (orders.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");

    cell.colSpan = 5;
    cell.textContent = "No orders saved yet.";

    row.appendChild(cell);
    tbody.appendChild(row);
    return;
  }

  orders.forEach(function (order) {
    const row = document.createElement("tr");

    addCell(row, order.name);
    addCell(row, order.item + " (" + order.size + ")");
    addCell(row, String(order.qty));
    addCell(row, order.pickup);
    addCell(
      row,
      order.extras.length ? order.extras.join(", ") : "none"
    );

    tbody.appendChild(row);
  });
}

// Handle the order form submission.
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const data = new FormData(form);

  const order = {
    name: data.get("name").trim(),
    phone: data.get("phone"),
    item: data.get("item"),
    size: data.get("size"),
    qty: Number(data.get("qty")),
    extras: data.getAll("extras"),
    pickup: data.get("pickup"),
    notes: data.get("notes").trim()
  };

  const orders = loadOrders();
  orders.push(order);
  saveOrders(orders);

  render();

  message.textContent = "Order placed successfully!";
  form.reset();
});

// Clear all saved orders.
clearButton.addEventListener("click", function () {
  localStorage.removeItem(STORAGE_KEY);
  render();
  message.textContent = "All orders have been cleared.";
});

// Show existing orders when the page opens.
render();
