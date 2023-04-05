import React, {useState} from 'react'
import { Form, Button} from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Create() {

let navigate= useNavigate();
  const [projectId, setProjectId] = useState('');
  const [projectName, setProjectName] = useState('');
  const [projectDesc, setProjectDesc] = useState('');

  console.log(projectId);
  console.log(projectName);

  const sendDataToAPI = () => {
  
    axios.post(`https://6429847d5a40b82da4d494b2.mockapi.io/PAM`, {
      projectId,
      projectName,
      projectDesc
    }).then(() => {
      navigate('/Read')
    })
  }
  
  return(
<Form>
    <Form.Field>
        <label>Project-Id</label>
        <input name='ProjectId' onChange={(e)=>setProjectId(e.target.value)} placeholder='ProjectId' />
    </Form.Field>

    <Form.Field>
      <label>Project-Name</label>
      <input name='ProjectName' onChange={(e)=>setProjectName(e.target.value)} placeholder='ProjectName' />
    </Form.Field>

    <Form.Field>
      <label>Project-Description</label>
      <input name='ProjectName' onChange={(e)=>setProjectDesc(e.target.value)} placeholder='ProjectDescription' />
    </Form.Field>
    
    {/* <Form.Field> */}
      {/* <Checkbox label='I agree to the Terms and Conditions' /> */}
    {/* </Form.Field> */}
    <Button type='submit' onClick={sendDataToAPI}>Submit</Button>
  </Form>
)
}


// export default Create