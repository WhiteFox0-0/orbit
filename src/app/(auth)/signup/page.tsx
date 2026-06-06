import { SignupForm } from "@/features/auth/components/signup-form";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="flex bg-muted min-h-svh items-center flex-col justify-center gap-6 p-6 md:p-10">
      <div className="w-full mx-auto flex-col items-center gap-4 sm:flex">
        <Link href={"/"} className="flex items-center self-center font-bold">
          <Image
            src={"/logos/logo-dark.png"}
            alt="Orbit"
            width={48}
            height={48}
          />
          <Image src={"/logos/text.png"} alt="Orbit" width={48} height={48} />
        </Link>
        <SignupForm />
      </div>
    </div>
  );
}

export default page;
