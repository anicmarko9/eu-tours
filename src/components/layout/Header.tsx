import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = (): JSX.Element => {
  const { data: session, status } = useSession<boolean>();
  const loading: boolean = status === "loading";

  return (
    <header className="top-0 2xl:px-32 xl:px-16 px-8 py-4 w-full">
      <nav className="flex justify-between items-center h-16">
        <div className="xl:w-2/3 w-3/5 flex justify-between">
          <div className="flex justify-start w-1/4">Logo</div>
          <ul className="flex justify-between w-3/4">
            <Link href="#">
              <li>Discover</li>
            </Link>
            <Link href="#">
              <li>Services</li>
            </Link>
            <Link href="#">
              <li>Comunity</li>
            </Link>
            <Link href="#">
              <li>About Us</li>
            </Link>
          </ul>
        </div>
        <div className="xl:w-1/4 w-1/3">
          {loading ? (
            <div className="flex justify-end">Loading...</div>
          ) : !session ? (
            <div className="flex justify-end">
              <button onClick={() => void signIn()}>Sign in</button>
            </div>
          ) : (
            <div className="flex justify-between">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  {session.user?.image && (
                    <Image
                      src={session.user.image}
                      alt="User avatar"
                      width={32}
                      height={32}
                      className="rounded-full mr-4"
                    />
                  )}
                  <small>Signed in as</small>
                </div>
                <strong>{session.user?.email ?? session.user?.name}</strong>
              </div>
              <button
                onClick={() =>
                  void signOut({ callbackUrl: "http://localhost:3000" })
                }
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
