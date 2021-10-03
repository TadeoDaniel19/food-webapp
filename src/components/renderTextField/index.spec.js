/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, configure } from 'enzyme';
import TextField from '@material-ui/core/TextField';
import Adapter from 'enzyme-adapter-react-16';
import RenderTextField from './index';

configure({ adapter: new Adapter() });

describe('Test for render Text field component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <RenderTextField
        meta={{
          touched: false,
          invalid: false,
        }}
        input={{
          value: 'hola',
          name: 'text',
          onBlur: jest.fn(),
          onChange: jest.fn(),
          onDragStart: jest.fn(),
          onDrop: jest.fn(),
          onFocus: jest.fn(),
        }} />,
    );
  });

  describe('When everything is fine and clean', () => {
    it('Displays TextField', () => {
      expect(
        wrapper
          .find(TextField)
          .exists(),
      ).toBe(true);
    });
  });
});
