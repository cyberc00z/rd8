/**
 * Implement Gastby's SSR (server side rendering) APIs in this fil.e
 * 
 * 
 */
/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes }) => {
    setHtmlAttributes({lang: `en`})
}