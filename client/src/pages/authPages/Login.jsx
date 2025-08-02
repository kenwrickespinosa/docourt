import AuthForm from "../../components/auth/AuthForm";

function Login() {
  const handleLogin = (formData) => {
    // Do something; Get verb
  };

  return (
    <div>
      <AuthForm type="login" onSubmit={handleLogin} />
    </div>
  );
}

export default Login;
