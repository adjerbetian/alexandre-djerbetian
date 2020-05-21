export function getImage(type: string, name: string): any {
    if (isRemoteImage()) return name;
    if (!hasExtension()) name += ".jpg";
    return require(`../assets/images/${type}/${name}`);

    function hasExtension() {
        return [".png", ".svg", ".jpg"].some((ext) => name.endsWith(ext));
    }
    function isRemoteImage() {
        return name.startsWith("http");
    }
}
