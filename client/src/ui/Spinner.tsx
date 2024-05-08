/**
 *
 * @returns Spinner Component
 */

const Spinner = ({ title, width }: { title: string; width: string }) => {
  return (
    <div className="w-full p-10 flex flex-col gap-6 items-center">
      <img
        src="/icons/spinner.png"
        alt="."
        className={`animate-spin w-[${width}] opacity-65`}
      />
      <p className="text-lg font-black text-slate-600">{title}</p>
    </div>
  );
};

export default Spinner;
