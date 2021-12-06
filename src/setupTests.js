/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
window.URL.createObjectURL = () => {};

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
