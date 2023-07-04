export function Section({ title, children }) {
  return (
    <div className="bg-gray-50">
      <div className="font-bold card-header p-4 bg-gray-200 rounded border-b ">
        {title}
      </div>
      <div className="p-2 md:p-4">{children}</div>
    </div>
  );
}
