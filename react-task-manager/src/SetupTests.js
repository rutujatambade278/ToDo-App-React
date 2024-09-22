// src/setupTests.js
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const { configure } = enzyme;

configure({ adapter: new Adapter() });
