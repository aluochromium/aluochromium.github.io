/**
 * @fileoverview Description of this file.
 */

function formatBudgetInfo(b) {
    var budgetInfo = "";
    for (var bs of b) {
        budgetInfo += "Budget is " + bs.budgetAt.toString() + " at " + new Date(bs.time).toString() + "\n";
    }
    return budgetInfo;
}

self.addEventListener("message", function(event) {

    navigator.budget.getBudget().then(function(b) {
        console.log("Budget entries:" + b.length);
        var budgetInfo = formatBudgetInfo(b);
        console.log(budgetInfo);
        event.source.postMessage(budgetInfo);
    });
});

self.addEventListener('push', function(event) {
    navigator.budget.getBudget().then(function(b) {
        const title = "Budget Info from push event";
        const options = {
          "body": formatBudgetInfo(b)
        }
        event.waitUntil(self.registration.showNotification(title, options));
    });
});
