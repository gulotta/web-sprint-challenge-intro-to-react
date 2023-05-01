// Write your Character component here
import styled from "styled-components";
import React from "react";

const WrappedChars = styled.div `
    width: auto;
    display: flex;
    justify-content: space-between;
    align-content: flex-end;
    padding: 10px;
    margin: 15px;
    border: 2px solid black;
    background: white;
`

export default function Character ({character}) {
    return (
        <WrappedChars>
            {character.name}
            {/* <div>{character.height}</div> */}
            {/* <div>{character.mass}</div> */}
            {/* <div>{character.hair_color}</div> */}
            {/* <div>{character.skin_color}</div> */}
            {/* <div>{character.eye_color}</div> */}
            <div>{character.birth_year}</div>
            {/* <div>{character.gender}</div> */}
            
        </WrappedChars>

    )
}