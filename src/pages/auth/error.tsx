import type { NextPage } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import type { Session, User } from "@prisma/client";
import Layout from "src/components/Layout";
import { toast } from "react-toastify";
import { api } from "src/utils/api";

const AuthError: NextPage = () => {
  const router = useRouter();
  const { error } = router.query;
  const sendEmail = api.auth.sendEmail.useMutation();

  const handleSendEmail = async (): Promise<void> => {
    try {
      if (typeof window !== "undefined") {
        const customSession = JSON.parse(
          sessionStorage.getItem("session") as string
        ) as Session & { user: User };
        const session = await getSession();
        if (customSession)
          await sendEmail.mutateAsync({
            user: JSON.stringify(customSession.user),
          });
        else if (session)
          await sendEmail.mutateAsync({
            user: JSON.stringify(session.user),
          });
        else throw new Error("Please Log In.");
        // disable button to prevent spamming
        (document.getElementById("btn-email") as HTMLButtonElement).disabled =
          true;
        setTimeout(function () {
          (document.getElementById("btn-email") as HTMLButtonElement).disabled =
            false;
        }, 10000);
        toast.info("Check your email", { position: "bottom-left" });
      }
    } catch (err) {
      const error = err as Error;
      toast.error(error.message, { position: "bottom-left" });
    }
  };

  return (
    <Layout>
      <p>{error}</p>
      <button id="btn-email" type="button" onClick={handleSendEmail}>
        Send verification link
      </button>
    </Layout>
  );
};

export default AuthError;
