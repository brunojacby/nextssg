import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/page/1"); // Redireciona para /page/1
  }, [router]);

  return <div>Loading...</div>;
}
