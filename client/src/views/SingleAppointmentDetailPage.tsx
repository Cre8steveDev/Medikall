// View Details about a Particular Appointment
import { useParams } from 'react-router-dom';

const SingleAppointmentDetailPage = () => {
  const { appointmentId } = useParams();
  return <div>SingleAppointmentDetailPage: {appointmentId}</div>;
};

export default SingleAppointmentDetailPage;
