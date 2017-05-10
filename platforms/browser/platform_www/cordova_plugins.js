cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/com-sarriaroman-photoviewer/www/PhotoViewer.js",
        "id": "com-sarriaroman-photoviewer.PhotoViewer",
        "pluginId": "com-sarriaroman-photoviewer",
        "clobbers": [
            "PhotoViewer"
        ]
    },
    {
        "file": "plugins/de-cyberkatze-ckopenimage/www/CkOpenImage.js",
        "id": "de-cyberkatze-ckopenimage.CkOpenImage",
        "pluginId": "de-cyberkatze-ckopenimage",
        "clobbers": [
            "CkOpenImage"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-console": "1.0.7",
    "cordova-plugin-statusbar": "1.0.1",
    "com-sarriaroman-photoviewer": "1.1.10",
    "de-cyberkatze-ckopenimage": "1.1.0"
}
// BOTTOM OF METADATA
});