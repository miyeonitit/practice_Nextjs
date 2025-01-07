import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  // dinamic
  return <div>Dinamic : {id}</div>;
}
