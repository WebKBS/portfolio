"use client";
import { works } from "@/data/worksData";
import { useRouterModalToggle } from "@/store/modal-store";
import Link from "next/link";

// export const metadata = {
//   title: "Works",
// };

const WroksPage = () => {
  const { setRouterModalState } = useRouterModalToggle();

  const clickHandler = () => {
    setRouterModalState(true);
  };

  // 클리언트 컴포넌트 분리하고, HOME에서 사용하는 works를 가져와서 사용

  return (
    <div>
      <ul>
        {works.map((work, index) => (
          <li key={index}>
            <Link
              href={`/works/${work.slug}`}
              onClick={clickHandler}
              scroll={false}
            >
              {work.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WroksPage;
