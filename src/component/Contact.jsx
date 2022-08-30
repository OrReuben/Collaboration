import {Formik} from "formik";
import * as Yup from "yup"

const Contact= ()=>
{
    const scheme = Yup.object().shape({
        firstName: Yup.string().required("firstName is a required"),
        resonContact: Yup.string().required("reason of contact is a required").max(100,"The reason of contact should have 100 charecters max")
        ,hearFromUs : Yup.string().required("How did you hear from us")
    })

    return(
<div>

<h1> contact</h1>
    <Formik validationSchema={scheme} initialValues={{firstName:"",resonContact:"",hearFromUs: ""}} onSubmit={(values)=> alert(JSON.stringify(values))}>
        {({handleSubmit,handleChange,values,errors,handleBlur,touched})=>
        (
            <form  onSubmit={handleSubmit}  >
<div>
    <input type={"text"} name="firstName" placeholder="first Name" onChange={handleChange}
    value={values.firstName} onBlur={handleBlur}/>
     <div style={{color:'red'}}>{errors.firstName&& touched.firstName&& errors.firstName}</div>

</div>

<div>
    <input type="text" name="resonContact"  placeholder="reson ofContact" onChange={handleChange}
    value={values.resonContact} onBlur={handleBlur}/>
    <div style={{color:'red'}}>{errors.resonContact&& touched.resonContact&& errors.resonContact}</div>
</div>

<div>
 <input type="text" name="hearFromUs"  maxlength="10" placeholder="How did you hear from us" onChange={handleChange}
    value={values.hearFromUs} onBlur={handleBlur}/>
<div style={{color:'red'}}>{errors.hearFromUs&& touched.hearFromUs&& errors.hearFromUs}</div>
    
</div>
    <button type="submit" > submit</button>


   
   
    
    

</form>
         )}



</Formik>
</div>

)
}
export default Contact;