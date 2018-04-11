var config = require('./build/config');

var aPostcss = [require('autoprefixer')({browsers: ['> 5%','ie 9']})];
if(config.enableRem){
    aPostcss.push(require('postcss-plugin-px2rem')(config.px2remOptions));
    aPostcss.push(require('postcss-flexible')(config.px2rem));    
}

module.exports = {
  plugins: aPostcss
}