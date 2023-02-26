import type { NextPage } from "next";
import { useState } from "react";
import { toast } from "react-toastify";
import Layout from "src/components/Layout";
import { api } from "src/utils/api";

const Signup: NextPage = () => {
  const register = api.auth.register.useMutation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setConfirm] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const session = await register.mutateAsync({
        name: "Marko",
        email: "anicmarko05@gmail.com",
        password: "qwerty123",
        passwordConfirm: "qwerty123",
      });
      sessionStorage.setItem("session", JSON.stringify(session));
      window.location.reload();
      toast.success("Account created successfully", {
        position: "bottom-left",
      });
    } catch (err) {
      const error = err as Error;
      toast.error(error.message, {
        position: "bottom-left",
      });
    }
  };
  // (e: FormEvent<HTMLFormElement>) => void handleSubmit(e)
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </Layout>
  );
};

export default Signup;
