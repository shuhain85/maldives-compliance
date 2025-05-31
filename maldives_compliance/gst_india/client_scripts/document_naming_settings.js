frappe.require("assets/maldives_compliance/js/transaction.js", function () {
    frappe.ui.form.on("Document Naming Settings", {
        transaction_type(frm) {
            show_gst_invoice_no_banner(frm);
        },
    });
});
