/**
 * @fileoverview Description of this file.
 */
self.addEventListener("message", function(event) {

    navigator.budget.getBudget().then(function(b) {
        console.log("Budget entries:" + b.length);
        var budgetInfo = "";
        for (var bs of b) {
            budgetInfo += "Budget is " + bs.budgetAt.toString() + " at " + new Date(bs.time).toString() + "\n";
        }
        console.log(budgetInfo);
        event.source.postMessage(budgetInfo);
    });
});
