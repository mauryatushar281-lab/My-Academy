import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function GoogleSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");

    console.log("Google Token:", token);

    if (token) {
      localStorage.setItem("token", token);

      // IMPORTANT: delay ensures React state sync
      setTimeout(() => {
        navigate("/student-dashboard");
      }, 100);
    } else {
      navigate("/login");
    }
  }, []);

  return <h2>Logging in...</h2>;
}

export default GoogleSuccess;
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function GoogleSuccess() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);

//     const token = params.get("token");

//     if (token) {
//       localStorage.setItem("token", token);
//       console.log("Token stored:", token);
//       navigate("/student-dashboard");
//     } else {
//       navigate("/login");
//     }
//   }, [navigate]);

//   return <h2>Logging in...</h2>;
// }

// export default GoogleSuccess;
