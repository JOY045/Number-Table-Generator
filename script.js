document.addEventListener("DOMContentLoaded", function () {
    const nInput = document.getElementById("nInput");
    const generateBtn = document.getElementById("generateBtn");
    const tableContainer = document.getElementById("table-container");
    const numberTable = document.getElementById("numberTable");
    
    generateBtn.addEventListener("click", function () {
        const n = parseInt(nInput.value);
        
        if (!isNaN(n)) {
            generateNumberTable(n);
            tableContainer.style.display = "block";
        }
        else {
            alert("Please enter a valid number.");
        }
    });
    
    function generateNumberTable(n) {
        let tableHTML = "<tr><th>Number</th><th>Result</th></tr>";
        for (let i = 1; i <= 10; i++) {
            const result = i * n;
            tableHTML += `<tr><td>${i}</td><td>${result}</td></tr>`;
        }
        numberTable.innerHTML = tableHTML;
    }
});