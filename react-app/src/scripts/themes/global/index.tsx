import tokens from '../../../../public/tokens.json';

export const global = {
        base: {
            body: {
            typography: 'body',
            color: tokens.colors.black,
            bg: tokens.colors.white,
        },
        focus: {
            width: 2,
            color: tokens.colors.brand,
            offset: 2,
        },
        selection: {
            color: tokens.colors.white,
            bg: tokens.colors.brand,
        },
    },
    fonts: {
        families: {
            'PT Root UI': {
                stack:  '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
            },
        },
        fontFace: [
            {
                '@font-face': {
                    fontFamily: 'PT Root UI',
                    src: 'url("../../fonts/PTRootUI-Regular.woff2") format("woff2"), url("../fonts/PTRootUI-Regular.woff") format("woff")',
                    fontDisplay: 'swap',
                },
            },
            {
                '@font-face': {
                    fontFamily: 'PT Root UI',
                    src: 'url("../../fonts/PTRootUI-Medium.woff2") format("woff2"), url("../fonts/PTRootUI-Medium.woff") format("woff")',
                    fontDisplay: 'swap',
                    fontWeight: 500,
                },
            },
            {
                '@font-face': {
                    fontFamily: 'PT Root UI',
                    src: 'url("../../fonts/PTRootUI-Bold.woff2") format("woff2"), url("../fonts/PTRootUI-Bold.woff") format("woff")',
                    fontDisplay: 'swap',
                    fontWeight: 700,
                },
            },
        ],
    },
}
