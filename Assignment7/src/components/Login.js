import { useFormik } from "formik";
import * as Yup from "yup";
const Login = () =>{
    const formik= useFormik(
        {
            initialValues:{
                firstName: "",
                password: ""
            },

            validationSchema: Yup.object({
                firstName: Yup.string().
                max(15, "maximum length is 15 characters for firstName").
                min(2, "minimum length is 2 characters for FirstName").
                required("This is a required filed"),

                password: Yup.string().required("This is a required field")

            }),

            onSubmit: (values)=>{
                console.log(values)
            }
        }
    )
    
    return(
        
        <div>
       
        <h1>Please Login to your account</h1>
        <form onSubmit={formik.handleSubmit}>
            {/* <h1>Login page</h1> */}
            <div className="input-container">
                <input type="text" name="firstName" id="firstName" placeholder="firstName"
                value={formik.values.firstName} onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                
                {formik.touched.firstName && formik.errors.firstName? <p>{formik.errors.firstName}</p>: null}
            </div>

            
            <div className="input-container">
                <input type="password" name="password" id="passsword" placeholder="password" autoComplete="off"
                value={formik.values.password} onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                
                {formik.touched.password && formik.errors.password? <p>{formik.errors.password}</p>: null}
            </div>

            <div className="input-container">
                <button type="submit">Login</button>
            </div>

        </form>
        </div>
    )
}
export default Login;
