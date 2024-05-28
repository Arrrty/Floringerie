

export const setLocalTheme = (value: boolean) => {
    localStorage.setItem("theme", JSON.stringify(value));
}

