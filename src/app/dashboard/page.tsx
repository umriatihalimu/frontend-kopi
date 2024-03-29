import Link from "next/link";
import React from "react";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex gap-3 ">
      <Link
        href={`/dashboard/user/${session?.user.id}`}
        className="font-bold bg-gray-200 text-lg hover:bg-gray-100 rounded-md p-1 ps-2 pe-2"
      >
        Profil User
      </Link>
      <div>
        <h1>My dashboard</h1>
      </div>
    </div>
  );
};

export default page;
