// Implement the SignIn Page
// Consider using Social Logins Too
import {useState} from "react";

type TFormData = {
  full_name:string;
  email: string;
  date_of_birth: string;
  blood_group?: string;
  genotype?: string;
  phone_number: string;
  password: string;
  gender: string;
}

const SignUpPage = () => {
  const [formData, setFormData] = useState<TFormData>({})

  // Form States 
  const [formLoading, setFormLoading] = useState(false);
  // const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleFormValueChange = (e)=>{
    setFormData(form_data=> {...form_data, [e.target.name]: e.target.value})
  }

  const handleFormSubmit = (e)=>{
    e.preventDefault();
    // Perform Form Submission Action
  }
  return <div  
        style={{
        backgroundImage: "url('/images/bg_services.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
    <div>
    <form method="post">
      <h1>Register An Account to Use our Full Features</h1>
      <p>Book Appointments, store chat history and enjoy convenience.</p>

      <input name="full_name" placeholder="Enter Your Full Name" required value={formData.full_name} className="" minLength=8 maxLength=30 />
      <input name="email" placeholder="Enter Email Address" type="email" required value={formData.email} className="" minLength=8 />
      <input name="phone_number" placeholder="Enter Phone Number (081234...)" type="tel" required value={formData.phone_number} className="" />
      <input name="password" placeholder="Use a Secured Password" type="password" required value={formData.full_name} className="" minLength=8 maxLength=30 />

          
    </form>
  </div>
  </div>;
};

export default SignUpPage;
