import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('Should add 1 to 4 to get 5', () => {
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const add = container.getByTestId('operator-add');
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(add);
    fireEvent.click(button4);
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('5');

  })


  it ('Should subtract 4 from 7 and get 3', () => {
    const button4 = container.getByTestId('number4');
    const button7 = container.getByTestId('number7');
    const subtract = container.getByTestId('operator-subtract');
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(subtract);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it ('Should multiply 3 by 5 and get 15', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const multiply = container.getByTestId('operator-multiply');
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(multiply);
    fireEvent.click(button5);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('15');
  })


  it ('Should divide 21 by 7 and get 3', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const divide = container.getByTestId('operator-divide');
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('3');
  })


  it ('Should divide 21 by 7 and get 3', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const divide = container.getByTestId('operator-divide');
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('3');
  })



  it ('Should be able to get 123456789', () => {
    const button1 = container.getByTestId('number1');
    const button2 = container.getByTestId('number2');
    const button3 = container.getByTestId('number3');
    const button4 = container.getByTestId('number4');
    const button5 = container.getByTestId('number5');
    const button6 = container.getByTestId('number6');
    const button7 = container.getByTestId('number7');
    const button8 = container.getByTestId('number8');
    const button9 = container.getByTestId('number9');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(button2);
    fireEvent.click(button3);
    fireEvent.click(button4);
    fireEvent.click(button5);
    fireEvent.click(button6);
    fireEvent.click(button7);
    fireEvent.click(button8);
    fireEvent.click(button9);
    expect(runningTotal.textContent).toEqual('123456789');
  })


  it('Should be able to get 4 with multiple operators', () => {
    const button4 = container.getByTestId('number4');
    const button2 = container.getByTestId('number2');
    const button0 = container.getByTestId('number0');
    const button9 = container.getByTestId('number9');
    const multiply = container.getByTestId('operator-multiply');
    const divide = container.getByTestId('operator-divide');
    const add = container.getByTestId('operator-add');
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(multiply);
    fireEvent.click(button4);
    fireEvent.click(add);
    fireEvent.click(button2);
    fireEvent.click(button0);
    fireEvent.click(divide);
    fireEvent.click(button9);
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('4');

  })


  it('Should be able to clear running total to 0 but keep calculation to equal 17', () => {
    const button7 = container.getByTestId('number7');
    const button5 = container.getByTestId('number5');
    const add = container.getByTestId('operator-add');
    const equals = container.getByTestId('operator-equals')
    const clear = container.getByTestId('clear')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(add);
    fireEvent.click(button5);
    fireEvent.click(add);
    fireEvent.click(clear)
    fireEvent.click(button5);
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('17');

  })







    

  

















})











