import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";

const Nav = () => {
  return (
    <div className="container">
      <nav className="flex items-center justify-between py-5 w-full lg:w-3/4 mx-auto">
        <ModeToggle/>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </nav>
    </div>
  );
};

export default Nav;
