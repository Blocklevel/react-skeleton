import Raven from 'raven-js';

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