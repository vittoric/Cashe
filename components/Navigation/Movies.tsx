import Link from "next/link";
import { useRouter } from "next/router";

export default function Movies() {
  const router = useRouter();
  const ROUTE = "/Cards";
  const isActive = router.asPath == ROUTE;

  return (
    <Link href={ROUTE} className={`mx-auto  ${isActive && "text-pink-600"}`}>
      <button
        type="button"
        className="font-['Apple Color Emoji'] transition transform text-xs"
      >
        Movies
      </button>
    </Link>
  );
}