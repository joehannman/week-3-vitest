export function unique<T>(arr: T[]): T[] {

    return [...new Set(arr)];
}

export function flatten<T>(arr: T[]): T[]{
    const result: any[] = [];

    for(const item of arr){
        if (Array.isArray(item)){
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    }

    return result;
}

export function chunk<T>(arr: T[], n: number): T[][] {
    if(n < 1) throw new Error("Chunk size must be at least 1");

    const result: T[][] = [];

    for(let i = 0; i < arr.length; i += n){
        result.push(arr.slice(i, i + n));
    }

    return result;
}