import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <div> Welcome, {session.user.email}</div>
        <div>{session.user.name}</div>
        <Image
          className="rounded-full"
          src={session.user.image}
          width={100}
          height={100}
          alt="Picture of the author"
        ></Image>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  } else {
    return (
      <div>
        <p> You are not signed in.</p>
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      </div>
    );
  }
};

export default login;
