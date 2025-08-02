import AuthForm from "../../components/auth/AuthForm";

function Signup() {
  const handleSignup = (formData) => {
    // Do something like POST verb
  };

  return (
    <div>
      <AuthForm type="signup" onSubmit={handleSignup} />
    </div>
  );
}

export default Signup;
