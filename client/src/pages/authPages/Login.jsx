import { useContext } from "react";
import AuthForm from "../../components/auth/AuthForm";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../hooks/contexts/UserContext";

function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLogin = async (formData) => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Response Status: ${response.status}`);
      }

      const data = await response.json().catch(() => null);
      localStorage.setItem("token", data.token);

      console.log("Login successfully:", data);
      // Navigate user to `Home.jsx`
      navigate("/home");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <AuthForm type="login" onSubmit={handleLogin} />
    </div>
  );
}

export default Login;
