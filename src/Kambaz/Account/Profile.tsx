import { Link } from "react-router-dom";
import { Form, FormSelect } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3  className= "m-2" >Profile</h3>
      <Form.Control defaultValue="alice" placeholder="username" className="wd-username m-2"/>

      <Form.Control defaultValue="123"   placeholder="password" type="password m-2"
             className="wd-password m-2" />
      <Form.Control className= "m-2" defaultValue="Alice" placeholder="First Name" id="wd-firstname" />
      <Form.Control  className= "m-2" defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" />
      <Form.Control  className= "m-2" defaultValue="2000-01-01" type="date" id="wd-dob" />
      <Form.Control  className= "m-2" defaultValue="alice@wonderland" type="email" id="wd-email" />

        <FormSelect   className= "m-2" defaultValue = "Faculty" id="wd-role">
            
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
        </FormSelect>
 


        <Link id="wd-signout-btn"
            to="/Kambaz/Account/Signin"
            className="btn btn-danger w-100 mb-2 m-2">
            Sign out </Link>
    </div>
);}
