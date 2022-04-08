// For React Native version 0.59 or later
const svgTransformer = require('react-native-svg-transformer');
const tsTransformer = require('react-native-typescript-transformer');

module.exports.transform = function ({ src, filename, options }) {
    if (filename.endsWith('.svg')) {
        return svgTransformer.transform({ src, filename, options });
    } else {
        return tsTransformer.transform({ src, filename, options });
    }
};
