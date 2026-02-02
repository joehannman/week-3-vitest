import { describe, it, expect } from "vitest";
import { passwordValidator } from "../src/passwordValidator";

describe("password validator", () => {
    it("should be atleast 8 characters long", () => {
        expect(passwordValidator("1234567")).toBe(false);
        expect(passwordValidator("12345678Un%")).toBe(true);
    });

    it("should contain atleast one uppercase character", () => {
        expect(passwordValidator("nouppercase")).toBe(false);
        expect(passwordValidator("yayUppercase1%")).toBe(true);
    });

    it("should contain atleast one lowercase character", () => {
        expect(passwordValidator("NOLOWERCASE")).toBe(false);
        expect(passwordValidator("yayUpperLower2%")).toBe(true);
    });

    it("should contain atleast one number", () => {
        expect(passwordValidator("noNumberInthisOne")).toBe(false);
        expect(passwordValidator("yayNumberinthis1&")).toBe(true);
    });

    it("should contain atleast special character", () =>  {
        expect(passwordValidator("noSpecialCharacterHere")).toBe(false);
        expect(passwordValidator("yaySpecialCharInthis1%")).toBe(true);
    });

});