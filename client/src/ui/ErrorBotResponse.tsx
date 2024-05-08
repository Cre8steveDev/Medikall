const ErrorBotResponse = () => {
  return (
    <div className=" w-full max-w-[600px] flex gap-3">
      <img
        src={'/images/doctor-avatar.jpg'}
        alt="Medidoc"
        className="w-[30px] md:w-[50px] rounded-full self-start"
      />
      <div className="bg-red-500 rounded-xl text-white shadow-lg p-3 sm:p-5 sm:text-base text-xs">
        <p>
          Sorry. There was an error getting an answer to your question. Please
          try again
        </p>
      </div>
    </div>
  );
};

export default ErrorBotResponse;
