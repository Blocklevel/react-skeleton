import Raven from 'raven-js';

const sentryKey = '6803a3891b3549b5ab92c2b58785d998';
const sentryApp = '89789';

export const sentryUrl = `https://${ sentryKey }@app.getsentry.com/${ sentryApp }`;
console.log(sentryUrl)
export function logException(ex, context)
{
    Raven.captureException(ex, {
        extra: content
    });

    window && window.console && console.error && console.error(ex);
}