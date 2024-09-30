import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../modules/authentication/state/store"; 
import '../public/fonts/OpticianSans/Optiker-K.ttf';

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