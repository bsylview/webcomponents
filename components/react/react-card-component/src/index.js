import withWebComponentWrapper from './withWebComponentWrapper';
import CardComponent from './CardComponent';

customElements.define('react-card-component', withWebComponentWrapper()(CardComponent));
