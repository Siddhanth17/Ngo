export const org = {
 name: 'Jagrut Apang Sanghatana', centre: 'Mahatma Phule Apang Prashikshan Kendra',
 address: 'Mahatma Phule Apang Prashikshan Kendra, Near Hinjewadi Infotech Park, Maan, Pune, Maharashtra – 411057, India',
 hours: 'Monday–Saturday 10:00 AM–6:00 PM; Sunday closed',
 map: 'https://www.google.com/maps/dir/?api=1&destination=18.5743728%2C73.7012478',
 mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.9925900962353!2d73.70124779999999!3d18.5743728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb254681ba71%3A0x4de4b729b3125098!2sMahatma%20Phule%20Apang%20Prashikshan%20Kendra!5e0!3m2!1sen!2sin!4v1792428026416!5m2!1sen!2sin',
};
export const achievements = [
 ['~800','trainees supported since inception'],['38','former trainees established tailoring shops'],['22','former trainees started radio/audio/TV repair services'],['18','former trainees obtained employment']
] as const;
export const facilities = ['One year free hostel and mess','Stationery and equipment','Uniforms','Medical facilities'] as const;
export const supportOptions = ['Sponsor a trainee’s training','Contribute food grains','Provide bedsheets, utensils or supplies','Support operating expenses','Provide suitable tailoring work','Support an approved room or infrastructure need','Offer a scholarship or direct sponsorship'] as const;
export const courses = [
 ['Certificate Course in Computer Software','1 Year','10th Standard Pass'],['Computer Hardware','2 Months','10th Standard Pass'],['Mobile Repairing','2 Months','7th Standard Pass'],['Certificate Course in Radio, T.V. Repairing','1 Year','10th Standard Pass'],['Certificate Course in Tailoring and Cutting','1 Year','7th Standard Pass'],['Certificate Course in Tailoring','1 Year','4th Standard Pass']
] as const;
export const trustees = [
 ['Manav Shripati Kambleomkar','President'],['Nandkishor Baburao Nale','Secretary'],['Ganesh Premraj Jagtap','Cashier'],['Nalini Pandurang Inamdar','Member'],['Tanaji Shivaji Taras','Vice-President'],['Anna Bhagwan Kale','Member'],['Bharat Mangu Bhadale','Member'],['Arun Dattatray Toke','Member'],['Deepak S Thakare','Member'],['Sachin Hardeh','Member'],['Babu T Sonawane','Member']
] as const;
export const galleryPhotos = [
 {src:'/assets/gallery/group-at-centre.jpg', alt:'Group photograph outside the training centre, including people using wheelchairs.', category:'Community', title:'A group at the centre'},
 {src:'/assets/gallery/community-outing.jpg', alt:'A group gathered beside an ambulance outside the centre.', category:'Community', title:'A community visit'},
 {src:'/assets/gallery/formal-group.jpg', alt:'A formal group portrait outside the centre building.', category:'Community', title:'Together at the centre'},
 {src:'/assets/gallery/swimming-activity.jpg', alt:'Participants swimming in an outdoor pool.', category:'Activities', title:'Swimming activity'},
 {src:'/assets/gallery/award-presentation.jpg', alt:'A participant receives a certificate during a community award presentation.', category:'Activities', title:'Certificate presentation'},
 {src:'/assets/gallery/centre-gathering.jpg', alt:'People gathered in the courtyard outside the training centre.', category:'At the centre', title:'Gathering in the courtyard'},
] as const;
