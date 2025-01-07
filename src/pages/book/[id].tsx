import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  // router page
  return <div>Dinamic : {id}</div>;
}
