import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
};

export default async function Page() {
  const session = await auth();

  const firstName = session.user.name.split(" ").at(0);
  
  return (
    <h2 className="text-accent-400 font-semibold text-2xl">
      Welcome, {firstName}
    </h2>
  );
}
