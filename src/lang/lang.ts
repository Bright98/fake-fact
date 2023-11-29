import { En } from "./en";
import { Fa } from "./fa";

export enum ExistLangs {
    fa = "fa",
    en = "en",
}
export const FindLangVal = (lang: ExistLangs, key: string): string => {
    if (lang === ExistLangs.en) {
        return En.find((item) => item.key === key)?.value ?? "";
    } else if (lang === ExistLangs.fa) {
        return Fa.find((item) => item.key === key)?.value ?? "";
    }
    return "";
};
