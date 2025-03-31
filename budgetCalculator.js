/*

Requirements:

Input: 
-Prompt the user to enter their total monthly income (without commas).
-Prompt the user to enter their estimated monthly expenses.
-Prompt the user to enter the number of months to project the budget for.

Calculations: 
-Calculate the monthly savings (income - expenses).
-Calculate the total projected savings over the given number of months.
-If the monthly savings calculation is negative, display an alert that the user is spending more than they are earning.

Output: 
-Display the following information in a div element with the id "budgetResults":
    Monthly Income
    Monthly Expenses
    Monthly Savings
    Total Projected Savings.
-Use a loop (for loop, while loop, or do-while loop) to display the projected savings for each month.
-Display each months savings in a new paragraph element that is appended to the budget results div.
-If the monthly savings are negative, display "Warning: Spending exceeds income!"

Error Handling: 
-Use try...catch blocks to handle potential errors, such as non-numeric input.
-If an error occurs, display an alert message describing the error.

Formatting:
-Use the .toFixed(2) method to round the calculated values to two decimal places.

*/

/*

Input Validation and Error Handling: Implement try...catch to alert users of non-numeric input without interrupting program flow.
Calculator Function: Use 1 function to run all the calculations when the user input is taken for all relevant parameters.
Monthly Savings Warning: Display a clear warning if monthly spending exceeds income.
Projected Monthly Savings Display: Use a loop to show savings for each month in separate paragraphs.
Accurate Total Projected Savings: Calculate and display the total savings accurately to two decimal places.

*/

//Function to use for try catch
function JS () {
    try {
        // Ask user for monthly income, expense, and projected length
        let monthlyIncome = Number(prompt('Enter your total monthly Income:'));
        if (monthlyIncome !== Number(monthlyIncome)){
            throw 'Income is not numeric. Please retry.'
        } 
        let monthlyExpense = Number(prompt('Enter your estimated monthly expense:'));
        if (monthlyExpense !== Number(monthlyExpense)){
            throw 'Expense is not numeric. Please retry.'
        }
        let monthProject = Number(prompt('Enter the amount of months to see projected budget:'));
        if (monthProject !== Number(monthProject)){
            throw 'Project Time is not numeric. Please retry.'
        }
        

        // Create button object
        let submitButton = document.getElementById('calculateBudget');

        //Create Results Object
        let results = document.getElementById('budgetResults');

        //Button Checker
        let check;

        // If Button clicked, run calculation
        submitButton.onclick = function() {
            //checks if button has been clicked
            if (check){
                return
            }
            check = true;

            //Calculate savings per month and projected
            let monthlySavings =    (monthlyIncome - monthlyExpense).toFixed(2);
            let totalSavings = (monthlySavings * monthProject).toFixed(2);

            //Create <p> for information
            let income = document.createElement('p');
            income.innerText = `Monthly Income: $${monthlyIncome}`;

            let expense = document.createElement('p');
            expense.innerText = `Monthly Expense: $${monthlyExpense}`;

            let mSavings = document.createElement('p');
            mSavings.innerText = `Monthly savings: $${monthlySavings}`;

            let tSavings = document.createElement('p');
            tSavings.innerText = `Total Savings in Projected Time: $${totalSavings}`;

            let debt = document.createElement('p');
            debt.innerText = 'Caution! Expenses exceeds Income!';
            debt.style.color = 'red';

            //Append all information into the HTML
            results.append(income);
            results.append(expense);
            results.append(mSavings);
            results.append(tSavings);
            if(totalSavings < 0) {results.append(debt)};

            //Display savings per month
            let saving = 0;
            for (i = 1; i <= monthProject; i++){
                saving = Number(monthlySavings * i).toFixed(2);
                let perSaving = document.createElement('p');
                perSaving.innerText = `Month ${i}: $${saving}`
                results.append(perSaving)
            }
        }
    } catch(error) {
        alert(error)
        JS()
    }
}

JS()