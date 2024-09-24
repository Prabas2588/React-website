import { FaHome, FaUser, FaListAlt, FaCalendar, FaRegAddressCard, FaChalkboardTeacher, FaMoneyBill, FaCogs, FaUsers, FaUserGraduate, FaChalkboard } from 'react-icons/fa';

export const  roleTypes = [
  { name: 'Administrator', value: 'Administrator' },
];
export const mainMenuItems = [
  { href: '/dashboard', icon: <FaHome />, label: 'Home' },
  { href: '/users', icon: <FaUsers />, label: 'Users' },
  { href: '/courses-list', icon: <FaListAlt />, label: 'Courses List' },
  { href: '/attendance', icon: <FaCalendar />, label: 'Attendance' },
  { href: '/students-list', icon: <FaUserGraduate />, label: 'Students List' },
  { href: '/class-timings', icon: <FaChalkboard />, label: 'Class Timings' },
  { href: '/registration-form', icon: <FaRegAddressCard />, label: 'Registration Form' },
  { href: '/demos', icon: <FaChalkboardTeacher />, label: 'Demos' },
  { href: '/payments', icon: <FaMoneyBill />, label: 'Payments' },
  { href: '/settings', icon: <FaCogs />, label: 'Settings' },
  { href: '/followups', icon: <FaUser />, label: 'Followups' },
];