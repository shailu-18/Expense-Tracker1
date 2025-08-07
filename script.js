const button = document.getElementById('btn');
const dateInput = document.getElementById('dateInput');
const amtIp = document.getElementById('amtIp');
const desc = document.getElementById('desc');
const type = document.getElementById('type');
const table = document.getElementById('tab');
const totalVal = document.getElementById('total');
const calcTotal = document.getElementById('calcTotal');
const resetTable = document.getElementById('resetTable');

let totalAmount = 0;

// Add Expense
button.addEventListener('click', () => {
    const date = dateInput.value;
    const amount = parseFloat(amtIp.value);
    const description = desc.value.trim();
    const category = type.value;

    if (!date || isNaN(amount) || amount <= 0 || !description || !category) {
        alert('Please fill in all fields correctly.');
        return;
    }

    const newRow = table.insertRow(-1);
    newRow.innerHTML = `
        <td>${date}</td>
        <td>${category}</td>
        <td>₹${amount.toFixed(2)}</td>
        <td>${description}</td>
        <td><button class="delBtn">Delete</button></td>
    `;

    // Add delete functionality
    const delBtn = newRow.querySelector('.delBtn');
    delBtn.addEventListener('click', () => {
        totalAmount -= amount;
        table.deleteRow(newRow.rowIndex);
        updateTotal();
    });

    totalAmount += amount;
    updateTotal();

    // Clear inputs
    dateInput.value = '';
    amtIp.value = '';
    desc.value = '';
    type.value = '';
});

// Calculate total (optional, since it's calculated dynamically too)
calcTotal.addEventListener('click', () => {
    updateTotal();
});

// Reset the table and total
resetTable.addEventListener('click', () => {
    // Remove all rows except the header (index 0)
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    totalAmount = 0;
    updateTotal();
});

// Update total amount display
function updateTotal() {
    totalVal.innerText = `Total Expense : ₹${totalAmount.toFixed(2)}`;
}