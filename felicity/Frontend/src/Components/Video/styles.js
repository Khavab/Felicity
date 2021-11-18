import styled from "styled-components";

import temp_image from '../assets/MaskGroup.png';
import temp_image2 from '../assets/patient.png';

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background-image : url(${temp_image});
    background-size:cover;
    background-repeat: no-repeat;
    border-radius : 20px;
    //padding-top: 13px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);

`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(36,36,36,0.6);
    border-radius : 20px;
`;

export const Block = styled.div`
    width: 30%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 15px;
    padding-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 15px;
    font-weight: 600;
    line-height: 10px;
`;

export const Button = styled.button`
    width: 150px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0075FF;
    border-radius: 15px;
    margin: 30px 25px 25px 25px;
    border: 0;
    outline: 0;
    color: white;
    font-size: 15px;
    font-weight: 550;
    line-height: 10px;
`;


export const Patient = styled.div`
    width: 217.5px;
    height: 354.59px;
    background-image : url(${temp_image2});
    background-size:cover;
    margin-left:auto;
    margin-right: 18.5px;
    border-radius : 15px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: end;
    z-index: 2;
`;

export const Name = styled.div`
    width: 80%;
    height: 24.02px;
    background-color: rgba(255, 255, 255, 0.82);
    border: 2px solid;
    border-radius: 5px;
    border-color: white;
    font-size: 12.6px;
    color: #2D3748;
    font-weight: 650;
    line-height: 24.02px;
    margin-bottom: 20px;
    margin-left: 10%;
`;

export const Setting = styled.div`
    width: 50%;
    height: 70px;
    background-color: rgba(255, 255, 255, 0.82);
    border: 4px solid;
    border-radius: 10px;
    border-color: white;
    margin-top:140px;
    margin-left: 25%;
    padding-left: 10px;
    display:flex;
    flex-direction: row;
    jusfity-content: space-around;
`;

export const IconBox = styled.div`
    margin: 10px 0px 0px 25px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
background: #959595;
line-height: 70px;
`;

export const Phone = styled.div`
    margin: 10px 0px 0px 20px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: #CF4942;
    line-height: 70px;
`;
