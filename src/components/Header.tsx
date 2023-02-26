import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Session, User } from "@prisma/client";

const Header = (): JSX.Element => {
  const { data: session, status } = useSession<boolean>();
  const loading: boolean = status === "loading";
  const [customSession, setCustomSession] = useState<
    Session & { user: User }
  >();

  const handleLogout = async (): Promise<void> => {
    window.sessionStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const customSession = JSON.parse(
        sessionStorage.getItem("session") as string
      );
      if (customSession) setCustomSession(customSession);
      else setCustomSession(undefined);
    }
  }, []);

  return (
    <header className="top-0 m-0 w-full">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>
            {!session && !customSession && (
              <>
                <span>You are not signed in</span>
                <button onClick={() => void signIn()}>Sign in</button>
              </>
            )}
            {customSession?.user && (
              <>
                {customSession.user.image && (
                  <Image
                    src={customSession.user.image}
                    alt="User avatar"
                    width={30}
                    height={30}
                    className="h-auto w-auto rounded-full"
                  />
                )}
                <span>
                  <small>Signed in as</small>
                  <strong>
                    {customSession.user.email ?? customSession.user.name}
                  </strong>
                </span>
                <button onClick={handleLogout}>Sign out</button>
              </>
            )}
            {session?.user && (
              <>
                {session.user.image && (
                  <Image
                    src={session.user.image}
                    alt="User avatar"
                    width={30}
                    height={30}
                    className="h-auto w-auto rounded-full"
                  />
                )}
                <span>
                  <small>Signed in as</small>
                  <strong>{session.user.email ?? session.user.name}</strong>
                </span>
                <button
                  onClick={() =>
                    void signOut({ callbackUrl: "http://localhost:3000" })
                  }
                >
                  Sign out
                </button>
              </>
            )}
          </p>
        </div>
      )}
      <nav>
        <ul>
          <Link href="#">
            <li>Home</li>
          </Link>
          <Link href="#">
            <li>User</li>
          </Link>
          <Link href="#">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
