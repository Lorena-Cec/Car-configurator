import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../modules/authentication/state/store"; 

const Home = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/register");  
    } else {
      router.push("/home");  
    }
  }, [user, router]);

  return null;
};

export default Home;