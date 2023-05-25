const Error = ({children}) => {
  return (
    <div className="bg-red-600 rounded-md text-center font-regular mb-3 text-slate-100 p-2">
      <p>{children}</p>
    </div>
  );
};

export default Error;
