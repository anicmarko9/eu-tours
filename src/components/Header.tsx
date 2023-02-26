import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Header = (): JSX.Element => {
  const { data: session, status } = useSession<boolean>();
  const loading: boolean = status === "loading";

  const handleLogout = async (): Promise<void> => {
    await fetch("http://localhost:3000/api/logout");
    window.location.assign("/");
  };

  return (
    <header className="top-0 m-0 w-full">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>
            {!session && (
              <>
                <span>You are not signed in</span>
                <button onClick={() => void signIn()}>Sign in</button>
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
