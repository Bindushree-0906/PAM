// import React, {useState,useEffect} from 'react'
// import { Form, Button} from 'semantic-ui-react'
// import axios from 'axios';


// export default function Update() {


//   const [projectId, setProjectId] = useState('');
//   const [projectName, setProjectName] = useState('');
//   const [projectDesc, setProjectDesc] = useState('');
//   const[ID, setID] = useState(null)

//   console.log(projectId);
//   console.log(projectName);

//   const sendDataToAPI = (event) => {
//     event.preventDefault()
//     // const url="https://64267bccd24d7e0de470e2b7.mockapi.io/Crud";
//    const data={projectId,projectName,projectDesc,returnSecureToken: true}
//     // return axios.post(url,data)
//     // axios.post('https://64267bccd24d7e0de470e2b7.mockapi.io/Crud', {projectId,
//     // projectName,
//     // projectDesc})
//     axios.put('https://6426a3c1d24d7e0de474780a.mockapi.io/CRUD/${ID}', {
//         projectId,
//         projectName,
//         projectDesc
//     })
//     //  .then(response => { console.log(response.data); }) 
//     //  .catch(error => { console.error(error); }); 
//   }

//   useEffect(()=>
//   {
//     setProjectId(localStorage.getItem('projectId'));
//     setProjectName(localStorage.getItem('projectName'));
//     setProjectDesc(localStorage.getItem('projectDesc'));
//     setID(localStorage.getItem('ID'))

//   },[])
  
//   return(
// <Form>
//     <Form.Field>
//         <label>Project-Id</label>
//         <input name='ProjectId'
//         value={projectId} onChange={(e)=>setProjectId(e.target.value)} placeholder='ProjectId' />
//     </Form.Field>

//     <Form.Field>
//       <label>Project-Name</label>
//       <input name='ProjectName' 
//        value={projectName} onChange={(e)=>setProjectName(e.target.value)} placeholder='ProjectName' />
//     </Form.Field>

//     <Form.Field>
//       <label>Project-Description</label>
//       <input value={projectDesc} name='ProjectDesc' onChange={(e)=>setProjectDesc(e.target.value)} placeholder='ProjectDescription' />
//     </Form.Field>
    
//     {/* <Form.Field> */}
//       {/* <Checkbox label='I agree to the Terms and Conditions' /> */}
//     {/* </Form.Field> */}
//     <Button type='submit' onClick={sendDataToAPI}>Update</Button>
//   </Form>
// )
// }

// import React, { useState, useEffect } from 'react';
// import { Button, Checkbox, Form } from 'semantic-ui-react'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export default function Update() {
//    // let history = useHistory();
//     const [id, setID] = useState(null);
//     const [projectId, setprojectId] = useState('');
//     const [projectName, setprojectName] = useState('');
//     const [projectDesc, setProjectDesc]=useState('')

//     useEffect(() => {
//         setID(localStorage.getItem('ID'))
//         setprojectId(localStorage.getItem('ProjectID'));
//         setprojectName(localStorage.getItem('Project Name'));
//         setProjectDesc(localStorage.getItem('Project Description'));
//     }, []);

//     const updateAPIData = () => {
//         axios.put(`https://6429847d5a40b82da4d494b2.mockapi.io/PAM/${id}`, {
//             projectId,
//             projectName,
//             projectDesc
//         }).then(() => {
//             let navigate = useNavigate
//             navigate('/Read')
//         })
//     }
//     return (
//         <div>
//             <Form className="create-form">
//                 <Form.Field>
//                     <label>Project ID</label>
//                     <input placeholder='Project ID' value={projectId} onChange={(e) => setprojectId(e.target.value)}/>
//                 </Form.Field>
//                 <Form.Field>
//                     <label>Project Name</label>
//                     <input placeholder='Project Name' value={projectName} onChange={(e) => setprojectName(e.target.value)}/>
//                 </Form.Field>
//                 <Form.Field>
//                 <label>Project Description</label>
//                     <input placeholder='Project Description' value={projectDesc} onChange={(e) => setprojectName(e.target.value)}/>
                   
//                 </Form.Field>
//                 <Button type='submit' onClick={updateAPIData}>Update</Button>
//             </Form>
//         </div>
//     )
// }

import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
export default function Update() {
    let navigate = useNavigate();
    const [projectId, setProjectId] = useState('');
    const [projectName, setProjectName] = useState('');
    const [projectDesc,setProjectDesc]= useState('')
    const [ID, setID] = useState(null);
    
    const sendDataToAPI = (ID) => {
        axios.put(`https://6429847d5a40b82da4d494b2.mockapi.io/PAM/${ID}`, {ID,
            projectId, projectName, projectDesc
        }).then(() => {
            navigate('/Read')
        })



        
    }

    useEffect(() => {
        setProjectId(localStorage.getItem('projectId'));
        setProjectName(localStorage.getItem('projectName'));
        setProjectDesc(localStorage.getItem('projectDesc'))
        setID(localStorage.getItem('ID'))
    }, [])

    

    return (
        <div>
            <Form>
                <Form.Field>
                    <label>Project ID</label>
                    <input name="project Id"
                        value={projectId.projectId}
                        onChange={(e) => setProjectId(e.target.value)}
                        placeholder='Project Id' />
                </Form.Field>
                <Form.Field>
                    <label>Project Name</label>
                    <input
                        name="project Name"
                        value={projectName.projectName}
                        placeholder='Project Name'
                        onChange={(e) => setProjectName(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Project Description</label>
                    <input
                        name="project Desc"
                        value={projectDesc.projectDesc}
                        placeholder='Project Description'
                        onChange={(e) => setProjectDesc(e.target.value)}
                    />
                </Form.Field>
                <Link to='/AdminDashboard'>
                <Button type='submit' onClick={() => sendDataToAPI()}>Update</Button>
                </Link>
            </Form>
        </div>
    )
}