const PAGE_NAME = "india-compliance-account";
let icAccountPage;

frappe.pages[PAGE_NAME].on_page_load = async function (wrapper) {
    await frappe.require([
        "maldives_compliance_account.bundle.js",
        "maldives_compliance_account.bundle.css",
    ]);

    icAccountPage = new maldives_compliance.pages.IndiaComplianceAccountPage(wrapper, PAGE_NAME);
};
