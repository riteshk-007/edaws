import AdminForm from "@/app/components/AdminForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata = {
  title:
    "Admin Login | EDAWS - Educational development And Agriculture Welfare Society | Donatation",
  description:
    "EDAWS - Educational development And Agriculture Welfare Society is a non-profit organization that works for the welfare of the society.",
};
const AdminLogin = async () => {
  const session = await getServerSession();

  if (session) redirect("/admin-dashboard");
  return <AdminForm />;
};

export default AdminLogin;
