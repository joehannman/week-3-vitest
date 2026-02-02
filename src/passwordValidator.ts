const isUppercase = (char: string) => /^[A-Z]$/.test(char);
const isLowercase = (char: string) => /^[a-z]$/.test(char);
const isNum = (char: string) => /^[0-9]$/.test(char);
const isSpec = (char: string) => /[^a-zA-Z0-9]/.test(char);


export function passwordValidator(pw: string): boolean{
    let containsUpper = false;
    let containsLower = false;
    let containsNum = false;
    let containsSpec = false;

    if(pw.length < 8) return false;

    pw.split("").forEach(element => {
        if(isUppercase(element)) containsUpper = true;
        if(isLowercase(element)) containsLower = true;
        if(isNum(element)) containsNum = true;
        if(isSpec(element)) containsSpec = true;
    });

    if(!containsUpper) return false;
    if(!containsLower) return false;
    if(!containsNum) return false;
    if(!containsSpec) return false;

    return true;
}