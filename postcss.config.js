const path = require('path');

module.exports = {
    plugins: {
        'postcss-extract-media-query': {
            output: {
                path: path.join(__dirname, 'css')
            },
            queries: {
                'only screen and (min-width:768px) and (max-width:958px)': 'desktop',
                'only screen and (min-width:480px) and (max-width:700px)': 'desktop',
                'only screen and (max-width:479px)': 'mobile'
            },
            whitelist: true,
            combine: false
        }
    }
};

//, only screen and (max-width: 479px)