const LoadingBotResponse = () => {
  return (
    <div className=" w-full max-w-[600px] flex gap-3">
      <img
        src={'/images/doctor-avatar.jpg'}
        alt="Medidoc"
        className="w-[30px] md:w-[50px]rounded-full self-start"
      />
      <div className="bg-primary-blue rounded-xl text-white shadow-lg animate-pulse sm:text-base text-xs p-3 sm:p-5">
        <p>Generating response...</p>
      </div>
    </div>
  );
};

export default LoadingBotResponse;
