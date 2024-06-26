import { Description } from '@mui/icons-material'
export type CourseData = {
  photo: string
  name: string
  category: string
  state: string
  description: string[]
}
export const coursesData: CourseData[] = [
  {
    photo: 'https://example.com/photo1.jpg',
    name: 'Sardar Patel University, Gujarat - Other',
    category: 'Gujarat - Other',
    state: 'Gujarat',
    description: ['MBA/PGDM', 'M.Sc.', 'B.Sc.', 'B.Ed', 'BBA', 'MCA', 'M.Com', 'BCA', 'MSW', 'M.A.'],
  },
  {
    photo: 'https://example.com/photo2.jpg',
    name: 'Tumkur University',
    category: 'Tumkur',
    state: 'Karnataka',
    description: ['M.Sc.', 'MBA/PGDM', 'BCA', 'B.Sc.', 'MCA', 'M.Com', 'M.A.', 'B.A.', 'B.Com', 'MSW'],
  },
  {
    photo: 'https://example.com/photo3.jpg',
    name: 'Utkal University of Culture - UUC Odisha, Bhubaneswar',
    category: 'Bhubaneswar',
    state: 'Odisha',
    description: ['MPA', 'M.A.', 'MVA', 'BVA', 'MSW', 'BHM', 'B.Des', 'BHMTT', 'MHMTT', 'LL.M.'],
  },
  {
    photo: 'https://example.com/photo4.jpg',
    name: 'The ICFAI University, Mizoram, Aizawl',
    category: 'Aizawl',
    state: 'Mizoram',
    description: ['M.A.', 'MBA/PGDM', 'M.Sc.', 'M.Com', 'BBA', 'B.A.', 'PG Diploma', 'BSW', 'MSW', 'BCA'],
  },
  {
    photo: 'https://example.com/photo5.jpg',
    name: 'Bishop Heber College, Tiruchirappalli',
    category: 'Tiruchirappalli',
    state: 'Tamil Nadu',
    description: ['B.Sc.', 'M.Sc.', 'B.Com', 'MBA/PGDM', 'B.Voc', 'MCA', 'BCA', 'B.A.', 'MSW', 'PG Diploma'],
  },
  {
    photo: 'https://example.com/photo6.jpg',
    name: 'School of Distance Education, Bharati Vidyapeeth University, Shivaji Nagar, Pune',
    category: 'Pune',
    state: 'Maharashtra',
    description: ['PG Diploma', 'B.Com', 'M.A.', 'MCA', 'M.Com', 'MBA/PGDM', 'B.A.', 'MSW', 'BBA', 'BCA'],
  },
  {
    photo: 'https://example.com/photo7.jpg',
    name: 'MGU Kerala - Mahatma Gandhi University, Kottayam',
    category: 'Kottayam',
    state: 'Kerala',
    description: ['M.Sc.', 'BCA', 'B.Sc.', 'B.A.', 'B.Com', 'MBA/PGDM', 'M.A.', 'MCA', 'BBA', 'MSW'],
  },
  {
    photo: 'https://example.com/photo8.jpg',
    name: 'ANUCDE Guntur',
    category: 'Guntur',
    state: 'Andhra Pradesh',
    description: ['M.Sc.', 'B.Lib.I.Sc.', 'M.A.', 'B.A.', 'Certificate', 'MBA/PGDM', 'MSW', 'BBA', 'MCA', 'UG Diploma'],
  },
  {
    photo: 'https://example.com/photo9.jpg',
    name: 'Dr. Babasaheb Ambedkar Technological University - DBATU, Raigad',
    category: 'Raigad',
    state: 'Maharashtra',
    description: [
      'B.E. / B.Tech',
      'B.Pharma',
      'M.E./M.Tech',
      'MCA',
      'M.Pharma',
      'B.Voc',
      'B.Arch',
      'MBA/PGDM',
      'Pharm.D',
      'BSW',
    ],
  },
  {
    photo: 'https://example.com/photo10.jpg',
    name: 'Shivaji University, Kolhapur',
    category: 'Kolhapur',
    state: 'Maharashtra',
    description: ['B.E. / B.Tech', 'M.Sc.', 'B.Sc.', 'B.Pharma', 'MCA', 'MBA/PGDM', 'BCA', 'M.A.', 'MSW', 'B.Ed'],
  },
  {
    photo: 'https://example.com/photo11.jpg',
    name: 'North Eastern Regional Institute of Management, Guwahati',
    category: 'Guwahati',
    state: 'Assam',
    description: ['MBA/PGDM', 'B.A. LL.B.', 'M.Com', 'MSW', 'B.Com', 'BBA', 'MCA', 'BCA', 'M.A.', 'M.Sc.'],
  },
  {
    photo: 'https://example.com/photo12.jpg',
    name: 'Visva Bharati University, West Bengal - Other',
    category: 'West Bengal - Other',
    state: 'West Bengal',
    description: ['B.Sc.', 'B.A.', 'M.Sc.', 'M.A.', 'UG Diploma', 'BFA', 'Certificate', 'B.Des', 'MFA', 'MSW'],
  },
  {
    photo: 'https://example.com/photo13.jpg',
    name: 'Chhatrapati Shahu Institute of Business Education and Research, Kolhapur',
    category: 'Kolhapur',
    state: 'Maharashtra',
    description: ['MBA/PGDM', 'MSW', 'MCA', 'PG Diploma', 'M.Phil', 'UG Diploma'],
  },
  {
    photo: 'https://example.com/photo14.jpg',
    name: 'Anand Institute of Social Work, Gujarat - Other',
    category: 'Gujarat - Other',
    state: 'Gujarat',
    description: ['BSW'],
  },
  {
    photo: 'https://example.com/photo15.jpg',
    name: 'Karnataka University, Dharwad',
    category: 'Karnataka - Other',
    state: 'Karnataka',
    description: ['M.Sc.', 'M.A.', 'M.Com', 'MBA/PGDM', 'MCA', 'BCA', 'B.A.', 'B.Sc.', 'B.Com', 'MSW'],
  },
  {
    photo: 'https://example.com/photo16.jpg',
    name: 'NSOU - Netaji Subhas Open University, Kolkata',
    category: 'Kolkata',
    state: 'West Bengal',
    description: [
      'UG Diploma',
      'M.A.',
      'PG Diploma',
      'M.Sc.',
      'B.A.',
      'B.Ed',
      'B.Lib.I.Sc.',
      'B.Sc.',
      'MSW',
      'Certificate',
    ],
  },
  {
    photo: 'https://example.com/photo17.jpg',
    name: 'Om Kothari Institute of Management and Research, Kota',
    category: 'Kota',
    state: 'Rajasthan',
    description: ['BCA', 'Certificate', 'MSW', 'BBA', 'MBA/PGDM', 'B.Com'],
  },
  {
    photo: 'https://example.com/photo18.jpg',
    name: 'Tamil Nadu Open University, Chennai',
    category: 'Chennai',
    state: 'Tamil Nadu',
    description: [
      'After 10th Diploma',
      'M.Sc.',
      'Certificate',
      'UG Diploma',
      'B.Sc.',
      'B.A.',
      'M.A.',
      'MSW',
      'BFA',
      'B.Lit.',
    ],
  },
  {
    photo: 'https://example.com/photo19.jpg',
    name: 'Madhya Pradesh Bhoj Open University, Bhopal',
    category: 'Bhopal',
    state: 'Madhya Pradesh',
    description: ['B.Ed', 'D.El.Ed', 'M.Sc.', 'M.A.', 'PGDCA', 'UG Diploma', 'Certificate', 'MSW', 'B.Sc.', 'MBA/PGDM'],
  },
  {
    photo: 'https://example.com/photo20.jpg',
    name: 'De Paul Institute of Science and Technology (DiST), Kochi',
    category: 'Kochi',
    state: 'Kerala',
    description: ['MCA', 'MBA/PGDM', 'BCA', 'B.A.', 'MSW', 'BSW', 'M.A.', 'M.J.M.C.', 'B.Com', 'BBA'],
  },
  {
    photo: 'https://example.com/photo21.jpg',
    name: 'Kristu Jayanti College, Bangalore',
    category: 'Bangalore',
    state: 'Karnataka',
    description: ['B.Sc.', 'M.Sc.', 'B.Com', 'BCA', 'BBA', 'B.A.', 'MBA/PGDM', 'MCA', 'MSW', 'M.Com'],
  },
  {
    photo: 'https://example.com/photo22.jpg',
    name: 'YES Education, Mumbai',
    category: 'Mumbai',
    state: 'Maharashtra',
    description: [
      'MSW',
      'BCA',
      'B.Lib.I.Sc.',
      'PG Diploma',
      'MBA/PGDM',
      'LL.M.',
      'M.Lib.I.Sc.',
      'BSW',
      'B.E. / B.Tech',
      'M.A.',
    ],
  },
  {
    photo: 'https://example.com/photo23.jpg',
    name: 'Wisdom School of Management, Kanpur',
    category: 'Kanpur',
    state: 'Uttar Pradesh',
    description: ['MBA/PGDM', 'BBA', 'B.A.', 'M.Com', 'B.Com', 'BCA', 'Executive MBA', 'M.Sc.', 'MSW', 'B.Ed'],
  },
  {
    photo: 'https://example.com/photo24.jpg',
    name: 'Wisdom School of Management, Agra',
    category: 'Agra',
    state: 'Uttar Pradesh',
    description: ['MBA/PGDM', 'MSW', 'B.Sc.', 'BBA', 'B.Ed', 'BCA', 'Executive MBA', 'M.A.', 'PG Diploma', 'B.A.'],
  },
  {
    photo: 'https://example.com/photo25.jpg',
    name: 'Wisdom School of Management, Aligarh',
    category: 'Aligarh',
    state: 'Uttar Pradesh',
    description: ['MBA/PGDM', 'Executive MBA', 'BCA', 'BBA', 'M.Com', 'MSW', 'B.A.', 'B.Com', 'B.Ed', 'B.Sc.'],
  },
  {
    photo: 'https://example.com/photo26.jpg',
    name: 'Wisdom School of Management, Gorakhpur',
    category: 'Gorakhpur',
    state: 'Uttar Pradesh',
    description: ['MBA/PGDM', 'BBA', 'M.A.', 'MSW', 'M.Sc.', 'B.Com', 'BCA', 'PG Diploma', 'B.A.', 'B.Ed'],
  },
  {
    photo: 'https://example.com/photo27.jpg',
    name: 'Arth Prakash Institute, Chandigarh',
    category: 'Chandigarh',
    state: 'Punjab',
    description: ['UG Diploma', 'MBA/PGDM', 'B.A.', 'B.Sc.', 'BBA', 'BCA', 'BSW', 'Executive MBA', 'B.Com'],
  },
  {
    photo: 'https://example.com/photo28.jpg',
    name: 'CUHP - Central University of Himachal Pradesh, Dharamsala',
    category: 'Dharamsala Himachal Pradesh',
    state: 'Himachal Pradesh',
    description: ['M.Sc.', 'M.A.', 'MCA', 'MBA/PGDM', 'B.Sc.', 'B.A.', 'PG Diploma', 'BFA', 'MSW', 'B.E. / B.Tech'],
  },
  {
    photo: 'https://example.com/photo29.jpg',
    name: 'Wisdom School of Management, Bangalore',
    category: 'Bangalore Karnataka',
    state: 'Karnataka',
    description: [
      'B.E. / B.Tech',
      'MBA/PGDM',
      'After 10th Diploma',
      'B.Ed',
      'B.Sc.',
      'M.Sc.',
      'MSW',
      'BCA',
      'B.Com',
      'M.Com',
    ],
  },
  {
    photo: 'https://example.com/photo30.jpg',
    name: 'Kota University - UOK',
    category: 'Kota Rajasthan',
    state: 'Rajasthan',
    description: ['M.Sc.', 'M.A.', 'M.P.Ed', 'B.A.', 'B.Pharma', 'B.Sc.', 'B.A. LL.B.', 'B.Ed', 'LL.B.', 'MSW'],
  },
  {
    photo: 'https://example.com/photo31.jpg',
    name: 'Central University of Kerala, Kasargode',
    category: 'Kasargode Kerala',
    state: 'Kerala',
    description: ['M.Sc.', 'M.A.', 'B.A.', 'MPH', 'MSW', 'PG Diploma', 'M.Ed', 'MBA/PGDM', 'M.Com', 'Certificate'],
  },
  {
    photo: 'https://example.com/photo32.jpg',
    name: 'School of Distance Education, Bharathiar University, Coimbatore',
    category: 'Coimbatore Tamil Nadu',
    state: 'Tamil Nadu',
    description: ['M.Sc.', 'B.Sc.', 'B.A.', 'M.A.', 'BBA', 'UG Diploma', 'M.Com', 'B.Com', 'BSW', 'BCA'],
  },
  {
    photo: 'https://example.com/photo33.jpg',
    name: 'ADBU - Assam Don Bosco University, Guwahati',
    category: 'Guwahati Assam',
    state: 'Assam',
    description: ['B.Pharma', 'M.A.', 'M.Sc.', 'B.E. / B.Tech', 'BCA', 'B.A.', 'MSW', 'MCA', 'MBA/PGDM', 'D.Pharma'],
  },
  {
    photo: 'https://example.com/photo34.jpg',
    name: 'Institute of Professional Education and Research, Bhubaneswar',
    category: 'Bhubaneswar Orissa',
    state: 'Odisha',
    description: [
      'B.E. / B.Tech',
      'CPA',
      'B.Sc.',
      'MBA/PGDM',
      'PG Diploma',
      'MHMTT',
      'M.E./M.Tech',
      'MSW',
      'Certificate',
      'BCA',
    ],
  },
  {
    photo: 'https://example.com/photo35.jpg',
    name: 'Shri Shankarlal Sundarbai Shasun Jain College for Women, Chennai',
    category: 'Chennai Tamil Nadu',
    state: 'Tamil Nadu',
    description: ['B.Com', 'B.Sc.', 'BCA', 'M.Sc.', 'M.Com', 'BBA', 'B.A.', 'BSW', 'M.A.'],
  },
  {
    photo: 'https://example.com/photo36.jpg',
    name: 'Vishisht School of Management, Indore',
    category: 'Indore Madhya Pradesh',
    state: 'Madhya Pradesh',
    description: ['BCA', 'BBA', 'B.Com', 'M.Com', 'MSW'],
  },
  {
    photo: 'https://example.com/photo37.jpg',
    name: 'Gulbarga University, Karnataka - Other',
    category: 'Karnataka - Other Karnataka',
    state: 'Karnataka',
    description: ['M.Sc.', 'B.A.', 'B.Sc.', 'M.A.', 'BCA', 'B.Com', 'M.Com', 'MCA', 'B.Ed', 'MSW'],
  },
  {
    photo: 'https://example.com/photo38.jpg',
    name: 'Softkey Education and Infotech Ltd., Mumbai',
    category: 'Mumbai Maharashtra',
    state: 'Maharashtra',
    description: ['BCA', 'B.Sc.', 'BSW'],
  },
  {
    photo: 'https://example.com/photo39.jpg',
    name: "People's Institute of Management and Research, Bhopal",
    category: 'Bhopal Madhya Pradesh',
    state: 'Madhya Pradesh',
    description: ['MBA/PGDM', 'BBA', 'B.Com', 'MSW', 'B.Com (Hons)', 'M.Com'],
  },
  {
    photo: 'https://example.com/photo40.jpg',
    name: 'Mahatma Gandhi Kashi Vidyapith - Shaktinagar (NTPC) Campus, Uttar Pradesh - Other',
    category: 'Uttar Pradesh - Other Uttar Pradesh',
    state: 'Uttar Pradesh',
    description: ['M.A.', 'MSW', 'BFA', 'B.A.', 'PG Diploma', 'MFA', 'BCA', 'B.Com', 'M.Com', 'M.Sc.'],
  },
  {
    photo: 'https://example.com/photo41.jpg',
    name: 'Venkateshwara Open University, Itanagar',
    category: 'Itanagar Arunachal Pradesh',
    state: 'Arunachal Pradesh',
    description: ['BFA', 'M.A.', 'MBA/PGDM', 'B.A.', 'M.Sc.', 'Certificate', 'MFA', 'B.Sc.', 'MSW', 'B.Lib.I.Sc.'],
  },
  {
    photo: 'https://example.com/photo42.jpg',
    name: "St. Peter's College, Kolkata",
    category: 'Kolkata West Bengal',
    state: 'West Bengal',
    description: ['B.A.', 'BBA', 'B.Com', 'B.Sc.', 'BCA', 'MBA/PGDM', 'BSW', 'UG Diploma'],
  },
  {
    photo: 'https://example.com/photo43.jpg',
    name: 'Law College Durgapur',
    category: 'Durgapur West Bengal',
    state: 'West Bengal',
    description: ['LL.B.', 'MSW', 'B.A. LL.B. (Hons)', 'PG Diploma'],
  },
  {
    photo: 'https://example.com/photo44.jpg',
    name: 'Nalanda School of Management, Lucknow',
    category: 'Lucknow Uttar Pradesh',
    state: 'Uttar Pradesh',
    description: ['B.J.M.C.', 'M.Sc.', 'MSW', 'M.A.', 'M.Com', 'M.J.M.C.', 'MCA', 'PG Diploma'],
  },
  {
    photo: 'https://example.com/photo45.jpg',
    name: 'Amrita Vishwa Vidyapeetham - Amritapuri Campus, Kollam',
    category: 'Kollam Kerala',
    state: 'Kerala',
    description: ['B.E. / B.Tech', 'MBA/PGDM', 'M.Sc.', 'B.Sc.', 'BCA', 'B.A.M.S.', 'MCA', 'M.E./M.Tech', 'MD', 'MSW'],
  },
  {
    photo: 'https://example.com/photo46.jpg',
    name: 'Abhijit Kadam Institute of Management and Social Sciences, Bharati Vidyapeeth, Solapur',
    category: 'Solapur Maharashtra',
    state: 'Maharashtra',
    description: ['BCA', 'BBA', 'MCA', 'MBA/PGDM', 'MSW'],
  },
  {
    photo: 'https://example.com/photo47.jpg',
    name: 'Rajagiri College of Social Sciences, Kochi',
    category: 'Kochi Kerala',
    state: 'Kerala',
    description: ['M.Sc.', 'B.Com', 'B.Sc.', 'BBA', 'MCA', 'MSW', 'PG Diploma', 'BSW', 'MBA/PGDM', 'M.Lib.I.Sc.'],
  },
  {
    photo: 'https://example.com/photo48.jpg',
    name: 'Kaziranga University, Jorhat',
    category: 'Jorhat Assam',
    state: 'Assam',
    description: ['B.Pharma', 'B.E. / B.Tech', 'B.Sc.', 'BPT', 'M.Sc.', 'MBA/PGDM', 'MSW', 'D.Pharma', 'BBA', 'BOPTM'],
  },
  {
    photo: 'https://example.com/photo49.jpg',
    name: 'Mahatma Gandhi University, Tura- Khanapara Campus, Meghalaya - Other',
    category: 'Meghalaya - Other Meghalaya',
    state: 'Meghalaya',
    description: ['M.A.', 'LL.B.', 'MSW', 'MBA/PGDM', 'LL.M.', 'M.Com', 'MCA', 'BSW', 'B.A. LL.B.', 'B.A.'],
  },
  {
    photo: 'https://example.com/photo50.jpg',
    name: 'Madras School of Social Work',
    category: 'Chennai Tamil Nadu',
    state: 'Tamil Nadu',
    description: ['M.A.', 'M.Sc.', 'B.Sc.', 'MSW', 'MBA/PGDM', 'PG Diploma', 'BSW'],
  },
  {
    photo: 'https://example.com/photo51.jpg',
    name: 'Mahatma Gandhi Central University, Bihar - Other',
    category: 'Bihar - Other Bihar',
    state: 'Bihar',
    description: [
      'B.E. / B.Tech',
      'M.Sc.',
      'B.Com',
      'MBA/PGDM',
      'B.A.',
      'B.Lib.I.Sc.',
      'M.A.',
      'MSW',
      'M.E./M.Tech',
      'M.Lib.I.Sc.',
    ],
  },
  {
    photo: 'https://example.com/photo52.jpg',
    name: 'MGAHV - Mahatma Gandhi Antarrashtriya Hindi Vishwavidyalaya, Wardha',
    category: 'Wardha Maharashtra',
    state: 'Maharashtra',
    description: ['B.Ed', 'M.A.', 'MBA/PGDM', 'PG Diploma', 'MSW', 'MCA', 'B.A.', 'UG Diploma', 'M.Ed', 'MPA'],
  },
  {
    photo: 'https://example.com/loyola-logo.jpg',
    name: 'Loyola College',
    category: 'Chennai',
    state: 'Tamil Nadu',
    description: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.', 'Ph.D.'],
  },
  {
    photo: 'https://example.com/christ-university-logo.jpg',
    name: 'Christ University',
    category: 'Bangalore',
    state: 'Karnataka',
    description: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.', 'Ph.D.'],
  },
  {
    photo: 'https://example.com/mithibai-college-logo.jpg',
    name: 'Mithibai College of Arts, Chauhan Institute of Science & Amrutben Jivanlal College of Commerce and Economics',
    category: 'Mumbai',
    state: 'Maharashtra',
    description: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.', 'Ph.D.'],
  },
  {
    photo: 'https://example.com/st-xaviers-mumbai-logo.jpg',
    name: "St. Xavier's College, Mumbai",
    category: 'Mumbai',
    state: 'Maharashtra',
    description: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.', 'Ph.D.'],
  },
  {
    photo: 'https://example.com/stella-maris-logo.jpg',
    name: 'Stella Maris College',
    category: 'Chennai',
    state: 'Tamil Nadu',
    description: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.', 'Ph.D.'],
  },
  {
    photo: 'st-josephs-logo.jpg',
    name: 'St. Joseph’s University',
    category: 'Bangalore',
    state: 'Karnataka',
    description: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.', 'Ph.D.'],
  },
  {
    photo: 'kristu-jayanti-logo.jpg',
    name: 'Kristu Jayanti College',
    category: 'Bangalore',
    state: 'Karnataka',
    description: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.', 'Ph.D.'],
  },
  {
    photo: 'mount-carmel-logo.jpg',
    name: 'Mount Carmel College',
    category: 'Bangalore',
    state: 'Karnataka',
    description: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.', 'Ph.D.'],
  },
  {
    photo: 'womens-christian-logo.jpg',
    name: "Women's Christian College",
    category: 'Chennai',
    state: 'Tamil Nadu',
    description: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.', 'Ph.D.'],
  },
  {
    photo: 'kj-somaiya-logo.jpg',
    name: 'K J Somaiya College of Arts and Commerce',
    category: 'Mumbai',
    state: 'Maharashtra',
    description: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.', 'Ph.D.'],
  },
  {
    photo: 'sacred-heart-logo.jpg',
    name: 'Sacred Heart College - SHC',
    category: 'Kochi',
    state: 'Kerala',
    description: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.', 'Ph.D.'],
  },
  {
    photo: 'patna-womens-logo.jpg',
    name: "Patna Women's College",
    category: 'Patna',
    state: 'Bihar',
    description: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.', 'Ph.D.'],
  },
  {
    photo: 'st-xaviers-ahmedabad-logo.jpg',
    name: "St. Xavier's College, Ahmedabad",
    category: 'Ahmedabad',
    state: 'Gujarat',
    description: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.', 'Ph.D.'],
  },
  {
    photo: 'mcm-dav-logo.jpg',
    name: 'MCM DAV College for Women',
    category: 'Chandigarh',
    state: 'Chandigarh',
    description: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.', 'Ph.D.'],
  },
  {
    photo: 'bk-birla-college-logo.jpg',
    name: 'B.K. Birla College of Arts, Science and Commerce',
    category: 'Kalyan',
    state: 'Maharashtra',
    description: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.', 'Ph.D.'],
  },
  {
    photo: 'dav-college-chandigarh-logo.jpg',
    name: 'DAV College, Chandigarh',
    category: 'Chandigarh',
    state: 'Chandigarh',
    description: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.', 'Ph.D.'],
  },
  {
    photo: 'nmims-logo.jpg',
    name: 'Sarla Anil Modi School of Economics, NMIMS, Mumbai',
    category: 'Mumbai',
    state: 'Maharashtra',
    description: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.', 'Ph.D.'],
  },
  {
    photo: 'ggdav-college-logo.jpg',
    name: 'Goswami Ganesh Dutta S.D. College',
    category: 'Chandigarh',
    state: 'Chandigarh',
    description: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.', 'Ph.D.'],
  },
  {
    photo: 'st-francis-college-logo.jpg',
    name: 'St. Francis College for Women',
    category: 'Hyderabad',
    state: 'Telangana',
    description: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.', 'Ph.D.'],
  },
  {
    photo: 'st-aloysius-college-logo.jpg',
    name: 'St. Aloysius College Magaluru',
    category: 'Mangalore',
    state: 'Karnataka',
    description: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.', 'Ph.D.'],
  },
  {
    photo: 'st-anns-college-logo.jpg',
    name: "St Ann's College for Women",
    category: 'Hyderabad',
    state: 'Telangana',
    description: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.', 'Ph.D.'],
  },
  {
    photo: 'mlacw-logo.jpg',
    name: 'Maharani Lakshmi Ammanni College for Women',
    category: 'Bangalore',
    state: 'Karnataka',
    description: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.', 'Ph.D.'],
  },
  {
    photo: 'ngp-college-logo.jpg',
    name: 'Dr. N.G.P. Arts and Science College',
    category: 'Coimbatore',
    state: 'Tamil Nadu',
    description: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.', 'Ph.D.'],
  },
  {
    photo: 'loyola-academy-logo.jpg',
    name: 'Loyola Academy Degree and PG College',
    category: 'Secunderabad',
    state: 'Telangana',
    description: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.', 'Ph.D.'],
  },
  {
    photo: 'st-josephs-tiruchirappalli-logo.jpg',
    name: "St. Joseph's College, Tiruchirappalli",
    category: 'Tiruchirappalli',
    state: 'Tamil Nadu',
    description: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.', 'Ph.D.'],
  },
]
