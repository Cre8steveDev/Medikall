const ErrorBotResponse = () => {
  return (
    <div className=" w-full max-w-[600px] flex gap-3">
      <img
        src={'/images/doctor-avatar.jpg'}
        alt="Medidoc"
        className="w-[30px] md:w-[50px] rounded-full self-start"
      />
      <div className="bg-red-500 p-5 rounded-xl text-white shadow-lg">
        <p>
          Sorry. There was an error getting an answer to your question. Please
          try again
        </p>
      </div>
    </div>
  );
};

export default ErrorBotResponse;
