import { describe, expect, it } from "vitest";
import { unique, chunk, flatten } from "../src/arrayUtils";

describe("array utils", () => {
    it("should remove duplicates", () => {
        expect(unique([1, 1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    })

    it("should flatten nested arrays", () => {
        expect(flatten([[1,2], [3,4]])).toEqual([1, 2, 3, 4]);
    })

    it("should split arrays into given chunk size", ()=> {
        expect(chunk([1,2,3,4], 2)).toEqual([[1,2], [3,4]]);
    })
    
})