cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "com-sarriaroman-photoviewer.PhotoViewer",
        "file": "plugins/com-sarriaroman-photoviewer/www/PhotoViewer.js",
        "pluginId": "com-sarriaroman-photoviewer",
        "clobbers": [
            "PhotoViewer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-console": "1.0.7",
    "cordova-plugin-statusbar": "1.0.1",
    "cordova-plugin-whitelist": "1.2.2",
    "com-sarriaroman-photoviewer": "1.1.10"
};
// BOTTOM OF METADATA
});