import React from 'react';
import styled from 'styled-components';

import '../../style/slide-components/text-style.css';

export default function Text({component, onClick, isEditable})
{
    const TextComponent = styled.div`
        top:                ${props => props.y+'%'};
        left:               ${props => props.x+'%'};
        width:              ${props => props.w+'%'};
        height:             ${props => props.h+'%'};
        transform:          ${props => 'scale(' + props.scale[0] + ',' + props.scale[1] + ') rotate(' + props.rotate + 'deg)'};
        z-index:            ${props => props.zIndex};
        
        font-family:         ${props => props.fontFamily};
        font-size:           ${props => 0.1*(isEditable ? props.fontSize : props.fontSize/2)+'vw'};
        color:               ${props => props.color};
        font-weight:         ${props => props.fontWeight};
        font-style:          ${props => props.fontStyle};
        text-decoration:     ${props => props.textDecoration};
        text-align:          ${props => props.textAlign};
        background-color:    ${props => props.backgroundColor};
        
        & > div {
            overflow: hidden
        }
        
        &.balloon {
            border:             ${(isEditable ? 0.5 : 0.25)+'vw solid #212121'};
            padding:            ${(isEditable ? 0.5 : 0.25)+'vw'};
            border-radius:      ${(isEditable ? 1.5 : 0.75)+'vw'};
            background-color:    ${props => (props.backgroundColor ? props.backgroundColor : '#fff')};
            overflow: visible;
        }
        
        &.balloon:before, &.balloon:after {
            content: ' ';
            position: absolute;
            width: 0;
            height: 0;
        }
        
        &.balloon.speech:before {
            left:               ${(isEditable ? 1.5 : 0.75)+'vw'};
            bottom:             ${-(isEditable ? 2.5 : 1.25)+'vw'};
            border:             ${(isEditable ? 1.25 : 0.625)+'vw solid'};
            border-color:       #212121 transparent transparent #212121;
        }
        
        &.balloon.speech:after {
            left:               ${(isEditable ? 1.9 : 0.95)+'vw'};
            bottom:             ${-(isEditable ? 1.4 : 0.7)+'vw'};
            border:             ${(isEditable ? 0.75 : 0.375)+'vw solid'};
            border-color:       ${props => (props.backgroundColor ? props.backgroundColor : '#fff') + ' transparent transparent ' + (props.backgroundColor ? props.backgroundColor : '#fff')};
        }
        
        &.balloon.speech.BR:before {
            left:               initial
            right:              ${(isEditable ? 1.5 : 0.75)+'vw'};
            border-color:       #212121 #212121 transparent transparent;
        }
        
        &.balloon.speech.BR:after {
            left:               initial
            right:              ${(isEditable ? 1.9 : 0.95)+'vw'};
            border-color:       ${props => (props.backgroundColor ? (props.backgroundColor + ' ' + props.backgroundColor) : '#fff #fff') + ' transparent transparent'};
        }
        
        &.balloon.speech.TL:before {
            bottom:             initial
            top:                ${-(isEditable ? 2.5 : 1.25)+'vw'};
            border-color:       transparent transparent #212121 #212121;
        }
        
        &.balloon.speech.TL:after {
            bottom:             initial
            top:                ${-(isEditable ? 1.4 : 0.7)+'vw'};
            border-color:       ${props =>  ' transparent transparent ' + (props.backgroundColor ? (props.backgroundColor + ' ' + props.backgroundColor) : '#fff #fff')};
        }
        
        &.balloon.speech.TR:before {
            left:               initial
            right:              ${(isEditable ? 1.5 : 0.75)+'vw'};
            bottom:             initial
            top:                ${-(isEditable ? 2.5 : 1.25)+'vw'};
            border-color:       transparent #212121 #212121 transparent;
        }
        
        &.balloon.speech.TR:after {
            left:               initial
            right:              ${(isEditable ? 1.9 : 0.95)+'vw'};
            bottom:             initial
            top:                ${-(isEditable ? 1.4 : 0.7)+'vw'};
            border-color:       ${props => 'transparent ' + (props.backgroundColor ? (props.backgroundColor + ' ' + props.backgroundColor) : '#fff #fff') + ' transparent'};
        }
        
        &.balloon.thought {
            border-radius:      ${(isEditable ? 10 : 5)+'vw'};
            padding:            ${(isEditable ? 1 : 0.5)+'vw'};
        }
        
        &.balloon.thought:before, .balloon.thought:after {
            left:               ${(isEditable ? 0.5 : 0.25)+'vw'};
            bottom:             ${-(isEditable ? 1.75 : 0.875)+'vw'};
            width:              ${(isEditable ? 3 : 1.5)+'vw'};
            height:             ${(isEditable ? 3 : 1.5)+'vw'};
            background-color:   ${props => (props.backgroundColor ? props.backgroundColor : '#fff')};
            border:             ${(isEditable ? 0.5 : 0.25)+'vw solid #212121'};
            border-radius: 50%;
        }
        
        &.balloon.thought:after {
            left:               ${(isEditable ? 0.25 : 0.125)+'vw'};
            bottom:             ${-(isEditable ? 2.35 : 1.175)+'vw'};
            width:              ${(isEditable ? 2 : 1)+'vw'};
            height:             ${(isEditable ? 2 : 1)+'vw'};
            background-color:   ${props => (props.backgroundColor ? props.backgroundColor : '#fff')};
            border:             ${(isEditable ? 0.5 : 0.25)+'vw solid #212121'};
            border-radius: 50%;
        }
        
        &.balloon.thought.BR:before, .balloon.thought:after {
            left:               initial
            right:               ${(isEditable ? 0.5 : 0.25)+'vw'};
        }
        
        &.balloon.thought.BR:after {
            left:               initial
            right:               ${(isEditable ? 0.25 : 0.125)+'vw'};
        }
        
        &.balloon.thought.TL:before, .balloon.thought:after {
            bottom:             initial
            top:                ${-(isEditable ? 1.75 : 0.875)+'vw'};
        }
        
        &.balloon.thought.TL:after {
            bottom:             initial
            top:                ${-(isEditable ? 2.35 : 1.175)+'vw'};
        }
        
        &.balloon.thought.TR:before, .balloon.thought:after {
            left:               initial
            right:               ${(isEditable ? 0.5 : 0.25)+'vw'};
            bottom:             initial
            top:                ${-(isEditable ? 1.75 : 0.875)+'vw'};
        }
        
        &.balloon.thought.TR:after {
            left:               initial
            right:               ${(isEditable ? 0.25 : 0.125)+'vw'};
            bottom:             initial
            top:                ${-(isEditable ? 2.35 : 1.175)+'vw'};
        }
    `;

    return (
        <TextComponent {...component} className={"text-moveable-container "+(component.balloon ? component.balloon : "")+" "+(component.placement ? component.placement : "")} onClick={onClick} id={isEditable ? "component-"+component.index : ""}>
            <div className={"inner_text"} dangerouslySetInnerHTML={{__html: component.value}} />
            {/*{component.value}*/}
        </TextComponent>
    )
};