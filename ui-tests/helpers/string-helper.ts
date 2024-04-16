export function stringToBoolean(str: string | unknown): boolean {
    return (str as string).toLowerCase() === "true";
}