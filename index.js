const basePath = process.cwd();
const { startCreating, buildSetup } = require(`${basePath}/utils/generate_metadata.js`);

(() => {
    buildSetup();
    startCreating();
})();