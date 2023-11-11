const elSelectNative = document.getElementsByClassName("js-selectNative")[0];
const elSelectCustom = document.getElementsByClassName("js-selectCustom")[0];
const elSelectCustomBox = elSelectCustom.children[0];
const elSelectCustomOpts = elSelectCustom.children[1];
const customOptsList = Array.from(elSelectCustomOpts.children);
const optionsCount = customOptsList.length;
const defaultLabel = elSelectCustomBox.getAttribute("data-value");

let optionChecked = "";
let optionHoveredIndex = -1;

// Toggle custom select visibility when clicking the box
elSelectCustomBox.addEventListener("click", (e) => {
    const isClosed = !elSelectCustom.classList.contains("isActive");

    if (isClosed) {
        openSelectCustom();
    } else {
        closeSelectCustom();
    }
});

function openSelectCustom() {
    elSelectCustom.classList.add("isActive");
    // Remove aria-hidden in case this was opened by a user
    // who uses AT (e.g. Screen Reader) and a mouse at the same time.
    elSelectCustom.setAttribute("aria-hidden", false);

    if (optionChecked) {
        const optionCheckedIndex = customOptsList.findIndex(
            (el) => el.getAttribute("data-value") === optionChecked
        );
        updateCustomSelectHovered(optionCheckedIndex);
    }

    // Add related event listeners
    document.addEventListener("click", watchClickOutside);
    document.addEventListener("keydown", supportKeyboardNavigation);
}

function closeSelectCustom() {
    elSelectCustom.classList.remove("isActive");

    elSelectCustom.setAttribute("aria-hidden", true);

    updateCustomSelectHovered(-1);

    // Remove related event listeners
    document.removeEventListener("click", watchClickOutside);
    document.removeEventListener("keydown", supportKeyboardNavigation);
}

function updateCustomSelectHovered(newIndex) {
    const prevOption = elSelectCustomOpts.children[optionHoveredIndex];
    const option = elSelectCustomOpts.children[newIndex];

    if (prevOption) {
        prevOption.classList.remove("isHover");
    }
    if (option) {
        option.classList.add("isHover");
    }

    optionHoveredIndex = newIndex;
}

function updateCustomSelectChecked(value, text) {
    const prevValue = optionChecked;

    const elPrevOption = elSelectCustomOpts.querySelector(
        `[data-value="${prevValue}"`
    );
    const elOption = elSelectCustomOpts.querySelector(`[data-value="${value}"`);

    if (elPrevOption) {
        elPrevOption.classList.remove("isActive");
    }

    if (elOption) {
        elOption.classList.add("isActive");
    }

    elSelectCustomBox.textContent = text;
    optionChecked = value;
}

function watchClickOutside(e) {
    const didClickedOutside = !elSelectCustom.contains(event.target);
    if (didClickedOutside) {
        closeSelectCustom();
    }
}

function supportKeyboardNavigation(e) {
    // press down -> go next
    if (event.keyCode === 40 && optionHoveredIndex < optionsCount - 1) {
        let index = optionHoveredIndex;
        e.preventDefault(); // prevent page scrolling
        updateCustomSelectHovered(optionHoveredIndex + 1);
    }

    // press up -> go previous
    if (event.keyCode === 38 && optionHoveredIndex > 0) {
        e.preventDefault(); // prevent page scrolling
        updateCustomSelectHovered(optionHoveredIndex - 1);
    }

    // press Enter or space -> select the option
    if (event.keyCode === 13 || event.keyCode === 32) {
        e.preventDefault();

        const option = elSelectCustomOpts.children[optionHoveredIndex];
        const value = option && option.getAttribute("data-value");

        if (value) {
            elSelectNative.value = value;
            updateCustomSelectChecked(value, option.textContent);
        }
        closeSelectCustom();
    }

    // press ESC -> close selectCustom
    if (event.keyCode === 27) {
        closeSelectCustom();
    }
}

// Update selectCustom value when selectNative is changed.
elSelectNative.addEventListener("change", (e) => {
    const value = e.target.value;
    const elRespectiveCustomOption = elSelectCustomOpts.querySelectorAll(
        `[data-value="${value}"]`
    )[0];

    updateCustomSelectChecked(value, elRespectiveCustomOption.textContent);
});

// Update selectCustom value when an option is clicked or hovered
customOptsList.forEach(function(elOption, index) {
    elOption.addEventListener("click", (e) => {
        const value = e.target.getAttribute("data-value");

        // Sync native select to have the same value
        elSelectNative.value = value;
        updateCustomSelectChecked(value, e.target.textContent);
        closeSelectCustom();
    });

    elOption.addEventListener("mouseenter", (e) => {
        updateCustomSelectHovered(index);
    });

    // TODO: Toggle these event listeners based on selectCustom visibility
});


const elSelectNative1 = document.getElementsByClassName("js-selectNative1")[0];
const elSelectCustom1 = document.getElementsByClassName("js-selectCustom1")[0];
const elSelectCustomBox1 = elSelectCustom1.children[0];
const elSelectCustomOpts1 = elSelectCustom1.children[1];
const customOptsList1 = Array.from(elSelectCustomOpts1.children);
const optionsCount1 = customOptsList1.length;
const defaultLabel1 = elSelectCustomBox1.getAttribute("data-value");

let optionChecked1 = "";
let optionHoveredIndex1 = -1;

// Toggle custom select visibility when clicking the box
elSelectCustomBox1.addEventListener("click", (e) => {
    const isClosed1 = !elSelectCustom1.classList.contains("isActive");

    if (isClosed1) {
        openSelectCustom1();
    } else {
        closeSelectCustom1();
    }
});

function openSelectCustom1() {
    elSelectCustom1.classList.add("isActive");
    // Remove aria-hidden in case this was opened by a user
    // who uses AT (e.g. Screen Reader) and a mouse at the same time.
    elSelectCustom1.setAttribute("aria-hidden", false);

    if (optionChecked1) {
        const optionCheckedIndex1 = customOptsList1.findIndex(
            (el) => el.getAttribute("data-value") === optionChecked1
        );
        updateCustomSelectHovered1(optionCheckedIndex1);
    }

    // Add related event listeners
    document.addEventListener("click", watchClickOutside1);
    document.addEventListener("keydown", supportKeyboardNavigation1);
}

function closeSelectCustom1() {
    elSelectCustom1.classList.remove("isActive");

    elSelectCustom1.setAttribute("aria-hidden", true);

    updateCustomSelectHovered1(-1);

    // Remove related event listeners
    document.removeEventListener("click", watchClickOutside1);
    document.removeEventListener("keydown", supportKeyboardNavigation1);
}

function updateCustomSelectHovered1(newIndex1) {
    const prevOption1 = elSelectCustomOpts1.children[optionHoveredIndex1];
    const option1 = elSelectCustomOpts1.children[newIndex1];

    if (prevOption1) {
        prevOption1.classList.remove("isHover");
    }
    if (option1) {
        option1.classList.add("isHover");
    }

    optionHoveredIndex1 = newIndex1;
}

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

function watchClickOutside1(e) {
    const didClickedOutside1 = !elSelectCustom1.contains(event.target);
    if (didClickedOutside1) {
        closeSelectCustom1();
    }
}

function supportKeyboardNavigation1(e) {
    // press down -> go next
    if (event.keyCode === 40 && optionHoveredIndex1 < optionsCount - 1) {
        let index = optionHoveredIndex1;
        e.preventDefault(); // prevent page scrolling
        updateCustomSelectHovered1(optionHoveredIndex1 + 1);
    }

    // press up -> go previous
    if (event.keyCode === 38 && optionHoveredIndex1 > 0) {
        e.preventDefault(); // prevent page scrolling
        updateCustomSelectHovered1(optionHoveredIndex1 - 1);
    }

    // press Enter or space -> select the option
    if (event.keyCode === 13 || event.keyCode === 32) {
        e.preventDefault();

        const option1 = elSelectCustomOpts1.children[optionHoveredIndex];
        const value1 = option1 && option1.getAttribute("data-value");

        if (value1) {
            elSelectNative1.value = value1;
            updateCustomSelectChecked1(value1, option1.textContent);
        }
        closeSelectCustom1();
    }

    // press ESC -> close selectCustom
    if (event.keyCode === 27) {
        closeSelectCustom1();
    }
}

// Update selectCustom value when selectNative is changed.
elSelectNative1.addEventListener("change", (e) => {
    const value1 = e.target.value;
    const elRespectiveCustomOption1 = elSelectCustomOpts1.querySelectorAll(
        `[data-value="${value1}"]`
    )[0];

    updateCustomSelectChecked1(value1, elRespectiveCustomOption1.textContent);
});

// Update selectCustom value when an option is clicked or hovered
customOptsList1.forEach(function(elOption, index) {
    elOption.addEventListener("click", (e) => {
        const value = e.target.getAttribute("data-value");

        // Sync native select to have the same value
        elSelectNative1.value = value;
        updateCustomSelectChecked1(value, e.target.textContent);
        closeSelectCustom1();
    });

    elOption.addEventListener("mouseenter", (e) => {
        updateCustomSelectHovered1(index);
    });

    // TODO: Toggle these event listeners based on selectCustom visibility
});