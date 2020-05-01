export function getFillings(rating: number): number[] {
    return [0, 1, 2, 3, 4].map((n) => clamp(rating - n, 0, 1));
}
function clamp(n: number, min: number, max: number) {
    return Math.max(Math.min(n, max), min);
}
