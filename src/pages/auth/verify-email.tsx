import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import React from "react";
import { api } from "src/utils/api";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const VerifyEmail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const verifyEmail = api.auth.verifyEmail.useMutation();
  const handleVerify = () => {
    try {
      verifyEmail.mutateAsync({ id: id as string });
      toast.success("Account verified.", {
        position: "bottom-left",
      });
    } catch (err) {
      toast.error("Account doesn't exist.", {
        position: "bottom-left",
      });
    }
  };

  return (
    <div>
      <p>Click the button below to verify your email.</p>
      <button type="button" onClick={handleVerify}>
        Verify Email
      </button>
    </div>
  );
};

export default VerifyEmail;
