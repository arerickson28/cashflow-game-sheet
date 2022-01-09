import store from "store"

let storeExpenses = store.get("expenses")

let newChildExpenses = function() {
    return storeExpenses.numberOfChildren * storeExpenses.perChildExpense
}

export { storeExpenses, newChildExpenses }