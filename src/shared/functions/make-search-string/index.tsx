export const makeSearchString = (value: string) => {
    return value.trim().replace(/\s+/g, " ");
};