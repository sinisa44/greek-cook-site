var webpack = require('webpack');
module.exports = {
    entry: "./app/assets/scripts/App.js",
    watch:true,
    output:{
        path:"./app/temp/scripts",
        filename: "App.js"
    },plugins:[
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery:'jquery'
        })
    ]
}