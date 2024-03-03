const FunctionItem = ({
  functionData,
}: {
  functionData: { function: string; description: string };
}) => {
  return (
    <li className="mb-3">
      <h4 className="mb-1 pl-3 text-lg font-semibold text-blue-500">
        {functionData.function}
      </h4>
      <p className="relative pl-6">
        <span className="absolute left-2 top-0">-</span>
        {functionData.description}
      </p>
    </li>
  );
};

export default FunctionItem;
