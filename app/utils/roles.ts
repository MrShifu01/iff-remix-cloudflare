import { LoaderFunction } from "@remix-run/node";
import { Roles } from "../types/globals";
import { getAuth } from "@clerk/remix/ssr.server";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ( args ) => {
    const { sessionClaims } = await getAuth(args);
    return { sessionClaims };
};

export const CheckRole = (role: Roles) => {
    const data = useLoaderData<typeof loader>();
    return data.sessionClaims?.metadata.role === role;
};
