module.exports = {
    devServer: { progress: false },
    chainWebpack(config) {
        return config.plugin("fork-ts-checker").tap((args) => {
            args[0].tsconfig = "./tsconfig.build.json";
            return args;
        });
    }
};
