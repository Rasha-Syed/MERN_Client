import React from 'react'
import {render,fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom';
import Button from './button';

test('Render button with label',()=>{
    const {getByText}= render(
    <Button label="Click me"/>)
    const buttonElement=getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
});

test('ClassName btn present',()=>{
    const {container}=render(
        <Button label="Click me"/>
    )
    const buttonElement=container.
    querySelector('button');
    expect(buttonElement).toHaveClass('btn');
}) 

const mockFun = jest.fn();

test('Button is Clicked',()=>{
    const onClickMock = jest.fn();
    const button = render(
        <Button label ="Click me"
        onClick={onClickMock}/>)
        const buttonElement = button.getByText('Click me');
        fireEvent.click(buttonElement)
        fireEvent.click(buttonElement)
        expect(onClickMock).toHaveBeenCalledTimes(2);
})