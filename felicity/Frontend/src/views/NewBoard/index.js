import React from "react"
import Header from '../../Components/Header/Header';
import {Mostouter, Directory, User, Cat, Title ,Video} from '../../Components/mostouter';
import Path from '../../Components/Path';
import Login from '../../Components/Login';
import { BoardNew } from "../../Components/BoardNew";


function NewBoard() {
  return (

    <Mostouter>

    <Cat>
        <Header/>
    </Cat>

    <Directory>
        <Path directory="Board"/>
    </Directory>

    <User>
        <Login />
    </User>


    <Video>
        <BoardNew />
    </Video>



    </Mostouter>


  );
}

export default NewBoard;