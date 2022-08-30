import {Formik} from "formik";
import * as Yup from "yup"

const Contact= (props)=>
{

    const save = (firstName,resonContact,hearFromUs )  => 
    {
        // event.preventDefault();
        props.setfirstName(firstName)
        props.setresonContact(resonContact)
        props.sethearFromUs(hearFromUs)
        
    }
    const scheme = Yup.object().shape({
        firstName: Yup.string().required("firstName is a required"),
        resonContact: Yup.string().required("reason of contact is a required").max(100,"The reason of contact should have 100 charecters max")
        ,hearFromUs : Yup.string().required("How did you hear from us")
    })

    return(
<div>

<h1> hello  {props.userName} contact</h1>
    <Formik validationSchema={scheme} initialValues={{firstName:"",resonContact:"",hearFromUs: ""}} onSubmit={(values)=> alert(JSON.stringify(values))}>
        {({handleSubmit,handleChange,values,errors,handleBlur,touched})=>
        (
            <form  onSubmit={handleSubmit}  >
<div>
    <input type={"text"} name="firstName" placeholder="first Name"  onChange={handleChange} 
    value={values.firstName} onBlur={handleBlur} />
     <div style={{color:'red'}}>{errors.firstName&& touched.firstName&& errors.firstName}</div>

</div>

<div>
    <input type="text" name="resonContact"  placeholder="reson ofContact" onChange={handleChange}
    value={values.resonContact} onBlur={handleBlur}/>
    <div style={{color:'red'}}>{errors.resonContact&& touched.resonContact&& errors.resonContact}</div>
</div>

<div>
 <input type="text" name="hearFromUs"  maxLength="100" placeholder="How did  you hear from  uss" 
    value={values.hearFromUs} onBlur={handleBlur}  onChange={handleChange}/>
<div style={{color:'red'}}>{errors.hearFromUs&& touched.hearFromUs&& errors.hearFromUs}</div>
    
</div>
    <button type="submit" onClick={()=>save(values.firstName ,values.resonContact, values.hearFromUs )} > submit</button>


   
   
    
    

</form>
         )}



</Formik>
</div>

)
}
export default Contact;

// ,()=> e=>props.setresonContact(e.target.value)]
//