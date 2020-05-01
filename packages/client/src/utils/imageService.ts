export function getImage(type: string, name: string): any {
    return require(`../assets/images/${type}/${name}.jpg`);
}
