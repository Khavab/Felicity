import React from "react";

import LogoImg from '../../Components/assets/Logo.png';
import RadioButton from "../../Components/LoginPage/Radiobox";
import { BodyInput, DepartmentInput, InputBox, Label, Logo, MainContainer, QuestionContainer, SubmitButton, SubTitle, Title, RadioBox } from "./styles";



function MHT1() {
  function sessionStore () { //stores items in sessionStorage
    var hurt = document.getElementById('hurt').value;
    var depart = document.getElementById('depart').value;
  
  
    window.sessionStorage.setItem('hurt',hurt);
    window.sessionStorage.setItem('depart',depart);
  
    document.location.href = '/MHT2';
  }
  const [radioValue, setRadio] = React.useState(true);

  return (
    <MainContainer>
        <QuestionContainer>
            <Logo src={LogoImg}></Logo>
            <Title>Welcome!</Title>
            <SubTitle>Please fill out medical history form below (1/6)</SubTitle>
            <SubmitButton onClick={sessionStore}>
                Next</SubmitButton>
            <Label>1. Where does it hurt?  *</Label>
            <InputBox>
                <BodyInput id="hurt"/>
            </InputBox>
            <Label>1-1. Do you have any specific department that you want to visit? (Optional)</Label>
            <RadioBox>
              <RadioButton
                  label="Yes."
                  name="true"
                  value={radioValue}
                  checked={radioValue}
                  onChange={({ target }) => setRadio(Boolean(target.value)) }/>
              <RadioButton
                label="No."
                name="false"
                value={!radioValue}
                checked={!radioValue}
                onChange={({ target }) => setRadio(!target.value) } />
            </RadioBox>
            { radioValue &&
            <InputBox>
              <DepartmentInput id="depart" />
            </InputBox> }
            
        </QuestionContainer>

    </MainContainer>
  );
}

export default MHT1;


