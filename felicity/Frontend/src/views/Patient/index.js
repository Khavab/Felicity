import React from "react"
import Header from '../../Components/Header/Header';
import {Mostouter, Directory, User, Cat, Title ,Video} from '../../Components/mostouter';
import Path from '../../Components/Path';
import Login from '../../Components/Login';

import {
    ContentLayout,
    EmergencyBox,
    ScheduleBox,
    RecordBox,
    PrescriptionBox,
    ConversationBox
} from "./layout"
import Schedule from "../../Components/Schedule";
import Conversations from "../../Components/Conversations";
import Emergency from "../../Components/Emergency";
import PatientRecord from "../../Components/PatientRecord";
import RecentPrescription from "../../Components/RecentPrescription";
import Axios from "axios";
import { DATA } from "./tempData";

function Patient() {

    const [scheduleData, setScheduleData] = React.useState([])

    React.useEffect(() => {
        Axios.post("http://localhost:3001/doctor_schedule", { "doctor_id": 1 })
            .then((response) => {
                setScheduleData(response.data)
            })
    }, [])
    console.log(scheduleData)

    return (
  
      <Mostouter>
  
      <Cat>
        <Header isDoctor={false}/>
      </Cat>
  
      <Directory>
          <Path directory="Home"/>
      </Directory>
  
      <User>
          <Login />
      </User>
  
  
      <Video>
          <ContentLayout>
              <EmergencyBox>
                  <Emergency/>
              </EmergencyBox>

              <ScheduleBox>
                  <Schedule schedule_data={scheduleData}/>
              </ScheduleBox>

              <RecordBox>
                  <PatientRecord />
              </RecordBox>

              <PrescriptionBox>
                  <RecentPrescription />
              </PrescriptionBox>

              <ConversationBox>
                  <Conversations/>
              </ConversationBox>
          </ContentLayout>
      </Video>
  
      </Mostouter>
  
  
    );
  }
  
export default Patient;