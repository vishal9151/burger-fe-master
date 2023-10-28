import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { server } from "../../redux/store";

const Login = () => {

  const loginHandler=()=>{
    window.open(`${server}/googleLogin`,"_self");
  }
  return (
    <section className="login">
      <motion.button initial={{ y: "-100vh" }} animate={{ y: 0 }} onClick={loginHandler}>
        Login with Google
        <FcGoogle />
      </motion.button>
    </section>
  );
};

export default Login;