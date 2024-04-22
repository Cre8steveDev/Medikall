import { Navigate, useParams } from 'react-router-dom';

const DepartmentInfoPage = () => {
  const { name } = useParams();

  if (!name) return <Navigate to={'/'} />;

  return (
    <div>
      <h1>This is the Information About: {name}</h1>
    </div>
  );
};

export default DepartmentInfoPage;
