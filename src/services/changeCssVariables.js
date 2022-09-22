export const changeCssVariables = theme => {
    const root = document.querySelector(':root');
    root.style.setProperty('--theme-default-bc', `var(--theme-${theme}-bc)`);
}