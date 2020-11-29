// If you're using the fetch API
import fetch from 'node-fetch';
import Enzyme, { shallow, render, mount, unmount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';;

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.fetch = fetch;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.unmount = unmount;