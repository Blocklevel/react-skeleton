import Raven from 'raven-js';

/**
 * Setup your Sentry config file to be able to stream issues
 * You only need to entry your Sentry key and app key.
 * Go to app/index.jsx and initialize it!
 *
 * @snippet
 * import Raven from 'raven-js';
 * import { sentryUrl } from 'utils/sentryConfig';
 *
 * Raven.config(sentryUrl).install();
 *
 * @info
 * For more info about Sentry go here https://getsentry.com/welcome
 *
 */
const sentryKey = '';
const sentryApp = '';

export const sentryUrl = `https://${ sentryKey }@app.getsentry.com/${ sentryApp }`;

export function logException(ex, context)
{
    Raven.captureException(ex, {
        extra: content
    });

    window && window.console && console.error && console.error(ex);
}