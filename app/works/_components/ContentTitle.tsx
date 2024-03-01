const ContentTitle = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="mb-12">
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>
      {children}
    </div>
  );
};

export default ContentTitle;
