const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const path = require('path');
module.exports = (config, options) => {
    const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

    // Feel free to modify this webpack config however you'd like to
    singleSpaWebpackConfig.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
        dependency: { not: ['url'] },
    });

    singleSpaWebpackConfig.resolve.alias = ({
        ...singleSpaWebpackConfig.resolve.alias,
        '~': path.resolve('./node_modules')
    });
    return singleSpaWebpackConfig;
};
