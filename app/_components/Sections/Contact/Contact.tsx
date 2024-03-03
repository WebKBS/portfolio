import { buttonVariants } from "@/components/ui/button";
import { Cute_Font } from "next/font/google";
import Link from "next/link";

const cuteFont = Cute_Font({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Contact = () => {
  return (
    <section className="px-5 pb-40 pt-20 lg:px-6">
      <div className="flex flex-wrap items-center justify-center gap-6">
        <h2 className={`text-3xl ${cuteFont.className}`}>
          문의사항이 있으신가요?
        </h2>
        <Link
          href="/contact"
          className={buttonVariants({ variant: "secondary", size: "sm" })}
        >
          문의하러가기
        </Link>
      </div>
    </section>
  );
};

export default Contact;
