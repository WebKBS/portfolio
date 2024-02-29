const ModalInner = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`absolute left-1/2 top-1/2 z-50 h-[80%] w-[90%] -translate-x-1/2 -translate-y-1/2  overflow-hidden overflow-y-auto rounded-xl border-2 bg-background shadow-md lg:h-3/4 lg:max-w-7xl`}
    >
      {children}
    </div>
  );
};

export default ModalInner;
