import { useRouter, useSearchParams } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  /**
   * trpc knows to return the type of data back as compared to returning type any on regular nextjs
   */
};

export default Page;
