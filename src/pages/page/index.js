import { useEffect } from "react";
import { useRouter } from "next/router";

export default function RedirectToFirstPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/page/1");
  }, [router]);

  return null;
}
