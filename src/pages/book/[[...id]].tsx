import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  // optional catch all segment
  return <div>Dinamic : {id}</div>;
}
