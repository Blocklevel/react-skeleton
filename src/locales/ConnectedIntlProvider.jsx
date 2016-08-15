import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

function mapStateToProps(state)
{
    const { lang, messages } = state.app.locales;
    return { locale: lang, messages };
}

export default connect(mapStateToProps)(IntlProvider);