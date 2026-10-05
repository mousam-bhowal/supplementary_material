async function includeHTML(id, file) {
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
}

includeHTML("navigate1", "~/supp_mat/_includes/navigate1.html");
