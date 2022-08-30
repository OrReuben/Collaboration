import "./Register.css";
import { Formik, Field} from "formik";
import * as Yup from "yup";

function Register(props) {
  const schema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required!")
      .min(6, "The username should have atleast 6 characters"),

    password: Yup.string()
      .required("Password is required!")
      .min(8, "the password should have atleast 8 characters"),

    confirmPassword: Yup.string()
      .required("Confirming is required!")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),

      checkbox: Yup    
      .bool()
      .oneOf([true, null], 'You need to accept the terms and conditions'),
  });

  return (
    <div className="Register">
        <div className="header">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      </div>
      <hr />
      <Formik
        initialValues={{ Username: "", Password: "", ConfirmPassword: "", Checkbox:false }}
        validationSchema={schema}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit} noValidate>
               <label for="username"> <b>Username</b></label>
            <input id="username"
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={values.username}
              onBlur={handleBlur}
            />
            <p style={{ color: "red" }}>
              {errors.username && touched.username && errors.username}
            </p>
            <div>{props.userName}</div>
            <label for="psw"> <b>Password</b></label>
            <input id="psw"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />
            <p style={{ color: "red" }}>
              {errors.password && touched.password && errors.password}
            </p>
            <label for="psw-repeat"><b>Confirm Password</b></label>
            <input id="psw-repeat"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={values.confirmPassword}
              onBlur={handleBlur}
            />
            <p style={{ color: "red" }}>
              {errors.confirmPassword &&
                touched.confirmPassword &&
                errors.confirmPassword}
            </p>
            <div className="checkbox">
            <label for="checkbox"><b>I agree to the terms and conditions</b></label>
            <Field id="checkbox"
              type="checkbox"
              name="checkbox"
              onChange={handleChange}
            />{" "}
             <br />
            </div>
            <p style={{color:"red"}}>{errors.checkbox && touched.checkbox && errors.checkbox}</p>
            <button className="registerbtn" type="submit" onClick={() => {props.setUserName(values.username)}}>Register</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
