import React from 'react';
import styled from 'styled-components';
import {Eco} from '@material-ui/icons';

const Spinner = (props) => {
    return(
        <Outter>
            <Eco style={{fontSize:"150px", color: "#673ab7"}}></Eco>
        </Outter>
    )
}

const Outter = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:50vh;
    height:100vh;
    display: flex;
    align-items:center;
    justify-content:center; 
    background-color:rgba(0, 0, 255, 0.2);;
    


    
`;

export default Spinner;