export const imageService = {
    getImage(type: string, name: string): any {
        if (isRemoteImage()) return name;
        if (!hasExtension()) name += ".jpg";
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        return `/images/${type}/${name}`;

        function hasExtension() {
            return [".png", ".svg", ".jpg"].some((ext) => name.endsWith(ext));
        }
        function isRemoteImage() {
            return name.startsWith("http");
        }
    },
};
