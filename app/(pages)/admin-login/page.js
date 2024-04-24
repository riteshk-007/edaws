import AdminForm from "@/app/components/AdminForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AdminLogin = async () => {
  const session = await getServerSession();

  if (session) redirect("/admin-dashboard");
  return <AdminForm />;
};

export default AdminLogin;
