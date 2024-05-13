const handleCheckStatus = async (
  e: React.MouseEventHandler<HTMLButtonElement>
) => {
  e;
  const response = await fetch('/api/auth/status');
  const data = await response.json();
  return data;
};

export default handleCheckStatus;
