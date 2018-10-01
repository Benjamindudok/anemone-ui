// convert PascalCase to snake-case as found on:
// https://stackoverflow.com/questions/30521224/javascript-convert-pascalcase-to-underscore-case
export const convertToSnakeCase: any = (string: string): string =>
{
    return string.replace(/\.?([A-Z]+)/g, (x: any, y: any): any =>
    {
        return '-' + y.toLowerCase();
    }).replace(/^-/, '');
};

export default {
    convertToSnakeCase
};
