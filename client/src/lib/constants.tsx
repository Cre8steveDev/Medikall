import { TChatsList, TServiceForCarousel } from '../types/generalTypes';
import { MdPhonelink } from 'react-icons/md';
import { FaHospitalUser } from 'react-icons/fa6';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { LuBaby } from 'react-icons/lu';
import { GiArchiveResearch } from 'react-icons/gi';

import { TCategoryForCarousel } from '../types/generalTypes';

// Default Maxwidth and margin auto for inner containers
export const maxWidthClassSettings = 'mx-auto w-full max-w-[1300px] ';

export const FooterCompanyLinks = [
  { title: 'Home', link: '/' },
  { title: 'About Us', link: '/about' },
  { title: 'Contact Us', link: '/contact' },
  { title: 'Our Blog', link: '/blog' },
  { title: 'FAQ', link: '/faq' },
];

export const FooterQuickLinks = [
  { title: 'Why Choose Us', link: '/about' },
  { title: 'Pricing Plan', link: '/pricing' },
  { title: 'Get Started', link: '/sign-in' },
  { title: 'Appointment', link: '/book-appointment' },
  { title: 'Terms & Conditions', link: '/terms-and-conditions' },
];

export const ServiceOffers: TServiceForCarousel[] = [
  {
    image: '/images/telemedicine.jpg',
    title: 'Telemedicine',
    description:
      'See a licensed doctor from the comfort of your home through video chat. Perfect for non-emergency consultations, follow-ups, and medication refills.',
    route: 'services/telemedicine',
    color: '#0437f2',
    icon: <MdPhonelink />,
  },
  {
    image: '/images/hospice-care.jpg',
    title: 'Hospice Care',
    description:
      'Providing compassionate care and support for individuals nearing the end of life, and their families. We focus on comfort, dignity, and emotional well-being.',
    route: 'services/hospice-care',
    color: '#dc4731',
    icon: <FaHospitalUser />,
  },
  {
    image: '/images/community-medicine.jpg',
    title: 'Community Medicine',
    description:
      'Improving health outcomes for your community through preventive care initiatives, health education, and screenings.',
    route: 'services/community-medicine',
    color: '#08313a',
    icon: <AiOutlineMedicineBox />,
  },
  {
    image: '/images/fertility-clinic.jpg',
    title: 'Fertility Clinic',
    description:
      'Helping you achieve your dream of parenthood. We offer a comprehensive range of fertility treatments and consultations with experienced specialists.',
    route: 'services/fertility-clinic',
    color: '#1a5653',
    icon: <LuBaby />,
  },
  {
    image: '/images/training-research.jpg',
    title: 'Training & Research',
    description:
      'Advancing medical knowledge and practice through collaboration with healthcare professionals and researchers. We are dedicated to improving patient care through innovation.',
    route: 'services/training-research',
    color: '#008080',
    icon: <GiArchiveResearch />,
  },
];

export const BrowseCategories: TCategoryForCarousel[] = [
  {
    title: 'Medicine',
    route: '/book-appointment/medicine',
    icon: '/icons/medicine.png',
  },
  {
    title: 'Paediatrics',
    route: '/book-appointment/paediatrics',
    icon: '/icons/paediatrics.png',
  },
  {
    title: 'Dermatology',
    route: '/book-appointment/dermatology',
    icon: 'icons/dermatology.png',
  },
  {
    title: 'Urology',
    route: '/book-appointment/urology',
    icon: '/icons/urology.png',
  },
  {
    title: 'Surgery',
    route: '/book-appointment/surgery',
    icon: '/icons/surgery.png',
  },
  {
    title: 'Dentistry',
    route: '/book-appointment/dentistry',
    icon: '/icons/dentistry.png',
  },
  {
    title: 'Eye Clinic',
    route: '/book-appointment/eye-clinic',
    icon: '/icons/ophthalmology.png',
  },
  {
    title: 'Obstetrics & Gnyae',
    route: '/book-appointment/obstetrics-and-gynae',
    icon: '/icons/pregnancy.png',
  },
];

export const SampleChatsList: TChatsList[] = [];
// export const SampleChatsList: TChatsList[] = [
//   {
//     _id: '48930485748390hjkdfjhdj',
//     userId: '474892739239872fda',
//     title: 'Learning about Health',
//     messages: [
//       {
//         role: 'assistant',
//         message: 'Hello, how can I help you today',
//         date: new Date().toLocaleDateString(),
//         photo_url: '/images/doctor-avatar.jpg',
//       },
//       {
//         role: 'user',
//         message: 'I Need an advice from you',
//         date: new Date().toLocaleDateString(),
//         photo_url: '/images/profile.jpeg',
//       },
//       {
//         role: 'assistant',
//         message: 'Spill it out, always happy to help.',
//         date: new Date().toLocaleDateString(),
//         photo_url: '/images/doctor-avatar.jpg',
//       },
//       {
//         role: 'user',
//         message: 'Thank you thank you!',
//         date: new Date().toLocaleDateString(),
//         photo_url: '/images/profile.jpeg',
//       },
//       {
//         role: 'assistant',
//         message: 'Hello, how can I help you today',
//         date: new Date().toLocaleDateString(),
//         photo_url: '/images/doctor-avatar.jpg',
//       },
//     ],
//   },

//   {
//     _id: 'dkfalsdacealkshjdf',
//     userId: '474892739239872fda',
//     title: 'Teach me about bioinfomatics',
//     messages: [
//       {
//         role: 'assistant',
//         message: 'Hello, how can I help you today',
//         date: new Date().toLocaleDateString(),
//         photo_url: '/images/doctor-avatar.jpg',
//       },
//       {
//         role: 'user',
//         message: 'I want to learn about bioinformatics',
//         date: new Date().toLocaleDateString(),
//         photo_url: '/images/profile.jpeg',
//       },
//       {
//         role: 'assistant',
//         message: 'Spill it out, always happy to help.',
//         date: new Date().toLocaleDateString(),
//         photo_url: '/images/doctor-avatar.jpg',
//       },
//       {
//         role: 'user',
//         message: 'Thank you thank you!',
//         date: new Date().toLocaleDateString(),
//         photo_url: '/images/profile.jpeg',
//       },
//       {
//         role: 'assistant',
//         message: 'Lorem ipsum set idolot episcum bal bldkch',
//         date: new Date().toLocaleDateString(),
//         photo_url: '/images/doctor-avatar.jpg',
//       },
//     ],
//   },

//   {
//     _id: '78909890jkjkmnikfgsd',
//     userId: '474892739239872fda',
//     title: 'Remedy for Migraines',
//     messages: [
//       {
//         role: 'assistant',
//         message: 'Hello, how can I help you today',
//         date: new Date().toLocaleDateString(),
//         photo_url: '/images/doctor-avatar.jpg',
//       },
//       {
//         role: 'user',
//         message: 'Guess who has his mojo back on',
//         date: new Date().toLocaleDateString(),
//         photo_url: '/images/profile.jpeg',
//       },
//       {
//         role: 'assistant',
//         message: 'Spill it out, always happy to help.',
//         date: new Date().toLocaleDateString(),
//         photo_url: '/images/doctor-avatar.jpg',
//       },
//       {
//         role: 'user',
//         message: 'Thank you thank you!',
//         date: new Date().toLocaleDateString(),
//         photo_url: '/images/profile.jpeg',
//       },
//       {
//         role: 'assistant',
//         message: 'Say No more! Abracadabra',
//         date: new Date().toLocaleDateString(),
//         photo_url: '/images/doctor-avatar.jpg',
//       },
//     ],
//   },
// ];

export const departments = [
  'Cardiology',
  'Neurology',
  'Orthopedics',
  'Radiology',
];
const today = new Date();
export const dateString = `${today.getFullYear()}-${String(
  today.getMonth() + 1
).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
