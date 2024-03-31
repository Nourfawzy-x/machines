import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  let handleNav = () => {
    router.push("/products");
  };
  return (
    <>
      <div className="container">
        <h1>home page</h1>
        <button onClick={handleNav} className="btn btn-dark form-control">
          go to products
        </button>
      </div>
    </>
  );
}
