import { birthday } from "../constants";

export function calculateAge() {
    return new Date(Date.now() - new Date(birthday).getTime()).getFullYear() - 1970;
}