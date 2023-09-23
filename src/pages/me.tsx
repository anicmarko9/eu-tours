import type { NextPage } from 'next';
import React from 'react';
import { toast } from 'react-toastify';

import { api } from 'src/utils/api';

const UserSettingsPage: NextPage = () => {
  const verifyEmail = api.email.verifyEmail.useMutation();
  // const sendEmail = api.email.sendEmail.useMutation();
  const handleVerify = async (): Promise<void> => {
    try {
      await verifyEmail.mutateAsync();
      toast.success('Account verified.', {
        position: 'bottom-left',
      });
    } catch (err) {
      toast.error("Account doesn't exist.", {
        position: 'bottom-left',
      });
    }
  };

  return (
    <div>
      {/* ask for email, compare token with user id, verify */}
      <p>Click the button below to verify your email.</p>
      <button type="button" onClick={() => void handleVerify()}>
        Verify Email
      </button>
      {/* change name */}
      {/* List all accounts, CRUD */}
    </div>
  );
};

export default UserSettingsPage;
