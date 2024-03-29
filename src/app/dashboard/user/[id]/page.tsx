import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { baseurl } from "@/lib/variabel";
import { getServerSession } from "next-auth";

import React from "react";

const ProfilPage = async () => {
  const session = await getServerSession(authOptions);

  const res = await fetch(baseurl + `/user/${session?.user.id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.backendToken.accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const user = await res.json();

  return (
    <div className="flex gap-3 ">
      <div>
        <h1>Profil User</h1>
        <p>Nama :{user.username} </p>
        <p>Email :{user.email}</p>
      </div>
    </div>
  );
};

export default ProfilPage;
