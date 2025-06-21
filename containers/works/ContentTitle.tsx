import {cn} from "@/lib/utils";

const ContentTitle = ({ title, className }: { title: string,  className?: string
}) => {
  return <h3 className={cn("mb-3 text-2xl font-semibold", className)
  }>{title}</h3>;
};

export default ContentTitle;
