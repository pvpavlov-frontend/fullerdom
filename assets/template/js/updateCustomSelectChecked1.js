function updateCustomSelectChecked1(value, text) {
    const prevValue1 = optionChecked1;

    const elPrevOption1 = elSelectCustomOpts1.querySelector(
        `[data-value="${prevValue1}"`
    );
    const elOption1 = elSelectCustomOpts1.querySelector(`[data-value="${value}"`);

    if (elPrevOption1) {
        elPrevOption1.classList.remove("isActive");
    }

    if (elOption1) {
        elOption1.classList.add("isActive");
    }

    elSelectCustomBox1.textContent = text;
    optionChecked1 = value;
}