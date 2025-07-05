// Mock Data for Jobs
let jobs = [
    {
        id: 'job1',
        title: 'Junior Digital Marketing Specialist',
        company: 'ZimTech Solutions',
        location: 'Harare',
        type: 'Full-time',
        salary: '$600 - $900 per month',
        description: 'We are looking for a passionate Junior Digital Marketing Specialist to join our growing team. You will assist in developing and executing digital marketing campaigns across various channels.',
        requirements: ['Bachelor\'s degree in Marketing or related field', 'Basic understanding of SEO/SEM', 'Excellent communication skills', 'Ability to work in a team']
    },
    {
        id: 'job2',
        title: 'Data Entry Clerk',
        company: 'QuickServe Logistics',
        location: 'Bulawayo',
        type: 'Part-time',
        salary: '$300 - $500 per month',
        description: 'Seeking a meticulous Data Entry Clerk to accurately input and maintain data in our systems. Attention to detail is crucial.',
        requirements: ['High school diploma', 'Proficient in Microsoft Office (Excel, Word)', 'Fast and accurate typing skills', 'Strong organizational abilities']
    },
    {
        id: 'job3',
        title: 'Mobile App Developer (Intern)',
        company: 'InnovateZim',
        location: 'Harare',
        type: 'Internship',
        salary: 'Stipend provided',
        description: 'An exciting opportunity for a keen intern to learn and contribute to mobile app development projects. Basic programming knowledge is a plus.',
        requirements: ['Currently studying Computer Science or related field', 'Basic understanding of programming (e.g., Java, Kotlin, Swift)', 'Eagerness to learn and adapt']
    },
    {
        id: 'job4',
        title: 'Agricultural Field Officer',
        company: 'GreenHarvest Co.',
        location: 'Mutare',
        type: 'Full-time',
        salary: '$700 - $1000 per month',
        description: 'Responsible for supporting farmers with best practices, crop management, and sustainable agriculture techniques in rural areas.',
        requirements: ['Diploma/Degree in Agriculture', 'Experience in field work', 'Good communication with rural communities', 'Valid driver\'s license']
    },
    {
        id: 'job5',
        title: 'Freelance Graphic Designer',
        company: 'Various Clients (via Zim Connect)',
        location: 'Remote',
        type: 'Gig',
        salary: 'Project-based',
        description: 'Seeking creative graphic designers for various short-term projects including logo design, social media graphics, and branding materials.',
        requirements: ['Proficiency in design software (e.g., Adobe Photoshop, Illustrator)', 'Strong portfolio of previous work', 'Ability to meet deadlines', 'Good communication skills']
    },
    {
        id: 'job6',
        title: 'Customer Service Representative',
        company: 'Connect Telecom',
        location: 'Harare',
        type: 'Full-time',
        salary: '$550 - $750 per month',
        description: 'Provide excellent customer support, resolve inquiries, and ensure customer satisfaction via phone and email.',
        requirements: ['High school diploma or equivalent', 'Strong verbal and written communication skills', 'Problem-solving abilities', 'Customer-oriented attitude']
    },
    {
        id: 'job7',
        title: 'Electrician Apprentice',
        company: 'PowerFix Services',
        location: 'Gweru',
        type: 'Apprenticeship',
        salary: 'Allowance provided',
        description: 'Learn the trade of electrical installation and repair under the guidance of experienced electricians.',
        requirements: ['Basic understanding of electrical concepts', 'Manual dexterity', 'Willingness to learn and follow instructions', 'Safety conscious']
    },
    {
        id: 'job8',
        title: 'Sales Assistant',
        company: 'Retail Hub',
        location: 'Kwekwe',
        type: 'Part-time',
        salary: '$250 - $400 per month',
        description: 'Assist customers with purchases, maintain store cleanliness, and manage inventory.',
        requirements: ['Good interpersonal skills', 'Friendly and approachable demeanor', 'Basic math skills', 'Reliable and punctual']
    }
];

// Mock Data for Learn & Grow Courses
const learnGrowCourses = [
    {
        icon: 'fas fa-laptop-code',
        title: 'Digital Literacy Basics',
        description: 'Master essential computer skills, internet navigation, and online safety.'
    },
    {
        icon: 'fas fa-mobile-alt',
        title: 'Introduction to Mobile App Dev',
        description: 'Learn the fundamentals of building simple mobile applications for Android.'
    },
    {
        icon: 'fas fa-chart-line',
        title: 'Personal Financial Management',
        description: 'Understand budgeting, saving, and basic investment principles.'
    },
    {
        icon: 'fas fa-store',
        title: 'Starting Your Small Business',
        description: 'A practical guide to developing a business idea and getting started.'
    },
    {
        icon: 'fas fa-comments',
        title: 'Effective Communication Skills',
        description: 'Improve your verbal and written communication for the workplace.'
    },
    {
        icon: 'fas fa-file-alt',
        title: 'CV & Interview Preparation',
        description: 'Craft a winning CV and ace your job interviews with confidence.'
    }
];

// Mock Data for Entrepreneurship Resources
const entrepreneurshipResources = [
    {
        icon: 'fas fa-file-invoice',
        title: 'Business Plan Template',
        description: 'Download a comprehensive template to structure your business idea.'
    },
    {
        icon: 'fas fa-handshake',
        title: 'Mentorship Program',
        description: 'Connect with experienced entrepreneurs for guidance and advice.'
    },
    {
        icon: 'fas fa-dollar-sign',
        title: 'Funding Opportunities',
        description: 'Discover grants, loans, and investment options for your startup.'
    },
    {
        icon: 'fas fa-chart-pie',
        title: 'Market Research Guide',
        description: 'Learn how to analyze your target market and competition effectively.'
    }
];

// Mock Data for Advertisements
const advertisements = [
    {
        id: 'ad1',
        title: 'Boost Your Business with ZimWeb Designs!',
        description: 'Professional website design and digital marketing services tailored for Zimbabwean businesses. Get your online presence today!',
        image: 'assets/images/ad_zimweb_designs.png',
        contact: 'info@zimwebdesigns.co.zw',
        link: '#'
    },
    {
        id: 'ad2',
        title: 'Fresh Produce Delivered to Your Door!',
        description: 'Get farm-fresh fruits and vegetables delivered straight from local Zimbabwean farms. Healthy eating made easy!',
        image: 'assets/images/ad_zim_fresh_foods.png',
        contact: '+263 771 234 567',
        link: '#'
    },
    {
        id: 'ad3',
        title: 'Affordable Online Courses by EduZim',
        description: 'Upskill yourself with certified online courses in IT, business, and more. Flexible learning for a brighter future!',
        image: 'assets/images/ad_eduzim_courses.png',
        contact: 'enroll@eduzim.org',
        link: '#'
    },
    {
        id: 'ad4',
        title: 'Handcrafted Zimbabwean Art & Crafts',
        description: 'Discover unique, authentic Zimbabwean art pieces and crafts. Support local artisans!',
        image: 'assets/images/ad_zim_artisans.png',
        contact: 'sales@zimartisans.com',
        link: '#'
    }
];

// Zimbabwean Public Holidays (2025 - Example)
const publicHolidays = [
    { date: 'January 1', name: 'New Year\'s Day' },
    { date: 'April 18', name: 'Independence Day' },
    { date: 'May 1', name: 'Workers\' Day' },
    { date: 'May 25', name: 'Africa Day' },
    { date: 'August 11', name: 'Heroes\' Day' },
    { date: 'August 12', name: 'Defence Forces National Day' },
    { date: 'December 22', name: 'Unity Day' },
    { date: 'December 25', name: 'Christmas Day' },
    { date: 'December 26', name: 'Boxing Day' }
    // Note: Easter and other variable holidays would need dynamic calculation
];

// World Heritage Sites in Zimbabwe
const heritageSites = [
    {
        id: 'whs1',
        name: 'Great Zimbabwe National Monument',
        image: 'assets/images/heritage_great_zimbabwe.png',
        description: 'The ruins of Great Zimbabwe are a testament to a powerful and prosperous civilization that flourished between the 11th and 15th centuries. It was the capital of the Kingdom of Zimbabwe during the country\'s Late Iron Age. The site is spread over a large area and is divided into three main architectural zones: the Hill Complex, the Valley Complex, and the Great Enclosure. The Great Enclosure, with its impressive conical tower and massive dry-stone walls, is particularly notable. It is a symbol of national pride and a key archaeological site in Southern Africa.',
        location: 'Masvingo Province'
    },
    {
        id: 'whs2',
        name: 'Mana Pools National Park, Sapi and Chewore Safari Areas',
        image: 'assets/images/heritage_mana_pools.png',
        description: 'Situated in the lower Zambezi River basin, Mana Pools is renowned for its wild beauty and rich wildlife. The area is characterized by the Zambezi River, its floodplains, and four large pools (Mana Pools) that are remnants of ox-bow lakes. It is a prime location for walking safaris and canoe trips, offering incredible close-up encounters with elephants, lions, buffalo, and a wide variety of birdlife. The pristine wilderness and diverse ecosystems make it a truly special natural heritage site.',
        location: 'Mashonaland West Province'
    },
    {
        id: 'whs3',
        name: 'Khami Ruins National Monument',
        image: 'assets/images/heritage_khami_ruins.png',
        description: 'The Khami Ruins, located west of Bulawayo, are the remains of a city that succeeded Great Zimbabwe as the capital of the Torwa dynasty (c. 1450–1650). The site features impressive stone walls, terraces, and platforms, showcasing a unique architectural style. It is an important archaeological site that provides insights into the post-Great Zimbabwe period and the development of the region\'s complex societies.',
        location: 'Matabeleland North Province'
    },
    {
        id: 'whs4',
        name: 'Matobo Hills',
        image: 'assets/images/heritage_matobo_hills.png',
        description: 'The Matobo Hills are an area of granite kopjes and wooded valleys, home to a rich array of flora and fauna, including a significant population of rhinos. The area is also culturally significant, with numerous rock art sites dating back to the Stone Age. It is a spiritual and historical landscape for the local Ndebele people, and the burial place of Cecil John Rhodes. The unique geological formations and cultural heritage make it a mixed natural and cultural World Heritage Site.',
        location: 'Matabeleland South Province'
    },
    {
        id: 'whs5',
        name: 'Mosi-oa-Tunya / Victoria Falls (shared with Zambia)',
        image: 'assets/images/heritage_victoria_falls.png',
        description: 'One of the Seven Natural Wonders of the World, Victoria Falls is a spectacular waterfall on the Zambezi River, forming the border between Zimbabwe and Zambia. Known locally as "Mosi-oa-Tunya" (The Smoke that Thunders), the falls plunge into a basalt gorge, creating a mist that can be seen for miles. The surrounding rainforest, sustained by the spray, is home to unique plant and animal species. It offers a wide range of adventure activities and breathtaking views.',
        location: 'Matabeleland North Province'
    }
];

// Popular Tourist Attractions in Zimbabwe
const touristAttractions = [
    {
        id: 'ta1',
        name: 'Victoria Falls',
        image: 'assets/images/attraction_victoria_falls.png',
        description: 'The world-renowned waterfall, offering activities like bungee jumping, white-water rafting, and scenic flights.',
        location: 'Victoria Falls'
    },
    {
        id: 'ta2',
        name: 'Hwange National Park',
        image: 'assets/images/attraction_hwange.png',
        description: 'Zimbabwe\'s largest game reserve, famous for its large elephant herds and diverse wildlife, perfect for safaris.',
        location: 'Hwange'
    },
    {
        id: 'ta3',
        name: 'Great Zimbabwe National Monument',
        image: 'assets/images/attraction_great_zimbabwe.png',
        description: 'Explore the ancient stone city, a UNESCO World Heritage Site, and marvel at its historical significance.',
        location: 'Masvingo'
    },
    {
        id: 'ta4',
        name: 'Mana Pools National Park',
        image: 'assets/images/attraction_mana_pools.png',
        description: 'A remote and pristine wilderness area, ideal for walking safaris and canoeing, with abundant wildlife.',
        location: 'Lower Zambezi Valley'
    },
    {
        id: 'ta5',
        name: 'Matobo Hills National Park',
        image: 'assets/images/attraction_matobo_hills.png',
        description: 'Discover unique rock formations, ancient San rock art, and a sanctuary for rhinos.',
        location: 'Matobo'
    },
    {
        id: 'ta6',
        name: 'Eastern Highlands (Nyanga, Vumba, Chimanimani)',
        image: 'assets/images/attraction_eastern_highlands.png',
        description: 'A picturesque region with mountains, forests, waterfalls, and tea plantations, offering hiking and scenic drives.',
        location: 'Manicaland Province'
    },
    {
        id: 'ta7',
        name: 'Lake Kariba',
        image: 'assets/images/attraction_lake_kariba.png',
        description: 'One of the world\'s largest man-made lakes, known for houseboating, fishing (especially tiger fish), and stunning sunsets.',
        location: 'Kariba'
    },
    {
        id: 'ta8',
        name: 'Chinhoyi Caves National Park',
        image: 'assets/images/attraction_chinhoyi_caves.png',
        description: 'Explore a series of limestone and dolomite caves, including the captivating "Sleeping Pool" with its deep blue waters.',
        location: 'Chinhoyi'
    }
];

// Tertiary Institutions in Zimbabwe
const tertiaryInstitutions = [
    // Universities
    { name: 'University of Zimbabwe', type: 'University', location: 'Harare' },
    { name: 'National University of Science and Technology (NUST)', type: 'University', location: 'Bulawayo' },
    { name: 'Midlands State University (MSU)', type: 'University', location: 'Gweru' },
    { name: 'Great Zimbabwe University (GZU)', type: 'University', location: 'Masvingo' },
    { name: 'Bindura University of Science Education (BUSE)', type: 'University', location: 'Bindura' },
    { name: 'Chinhoyi University of Technology (CUT)', type: 'University', location: 'Chinhoyi' },
    { name: 'Africa University', type: 'University', location: 'Mutare' },
    { name: 'Harare Institute of Technology (HIT)', type: 'University', location: 'Harare' },
    { name: 'Lupane State University (LSU)', type: 'University', location: 'Lupane' },
    { name: 'Zimbabwe Open University (ZOU)', type: 'University', location: 'National (Distance Learning)' },
    { name: 'Women\'s University in Africa (WUA)', type: 'University', location: 'Harare' },
    { name: 'Catholic University of Zimbabwe (CUZ)', type: 'University', location: 'Harare' },
    // Polytechnics
    { name: 'Harare Polytechnic', type: 'Polytechnic', location: 'Harare' },
    { name: 'Bulawayo Polytechnic', type: 'Polytechnic', location: 'Bulawayo' },
    { name: 'Mutare Polytechnic', type: 'Polytechnic', location: 'Mutare' },
    { name: 'Gweru Polytechnic', type: 'Polytechnic', location: 'Gweru' },
    { name: 'Kwekwe Polytechnic', type: 'Polytechnic', location: 'Kwekwe' },
    { name: 'Masvingo Polytechnic', type: 'Polytechnic', location: 'Masvingo' },
    // Teachers Colleges
    { name: 'United College of Education (UCE)', type: 'Teachers College', location: 'Bulawayo' },
    { name: 'Hillside Teachers College', type: 'Teachers College', location: 'Bulawayo' },
    { name: 'Mutare Teachers College', type: 'Teachers College', location: 'Mutare' },
    { name: 'Gweru Teachers College', type: 'Teachers College', location: 'Gweru' },
    { name: 'Morgan Zintec College', type: 'Teachers College', location: 'Harare' },
    { name: 'Belvedere Technical Teachers College', type: 'Teachers College', location: 'Harare' },
    // Other Colleges (Vocational/Technical)
    { name: 'Speciss College', type: 'College', location: 'Harare/Bulawayo' },
    { name: 'Trust Academy', type: 'College', location: 'Harare/Bulawayo' },
    { name: 'Institute of Commercial Management (ICM) Centres', type: 'College', location: 'Various' }
];

// Mock Data for Latest News & Updates
const latestNews = [
    {
        id: 'news1',
        title: 'Zim Connect Launches New Skill Development Workshops',
        date: '2025-07-01',
        summary: 'We are excited to announce a series of new workshops focused on digital marketing and graphic design, starting next month. Register now to secure your spot!',
        link: '#'
    },
    {
        id: 'news2',
        title: 'Partnership with Local Tech Incubator Announced',
        date: '2025-06-25',
        summary: 'Zim Connect has partnered with "TechHub Harare" to provide mentorship and seed funding opportunities for promising youth startups.',
        link: '#'
    },
    {
        id: 'news3',
        title: 'Success Story: From Intern to Full-Time at ZimTech',
        date: '2025-06-18',
        summary: 'Read about Sarah\'s journey, who secured a full-time position at ZimTech Solutions after completing her internship found through Zim Connect.',
        link: '#'
    }
];

// Mock Data for Upcoming Events
const upcomingEvents = [
    {
        id: 'event1',
        title: 'Youth Career Fair 2025',
        date: '2025-08-15',
        location: 'Harare International Conference Centre',
        description: 'Connect with leading employers, attend career talks, and explore job opportunities across various sectors.',
        link: '#'
    },
    {
        id: 'event2',
        title: 'Entrepreneurship Bootcamp: Idea to Launch',
        date: '2025-09-10',
        location: 'Online (Zoom)',
        description: 'A 3-day intensive bootcamp designed to help aspiring entrepreneurs develop and launch their business ideas.',
        link: '#'
    },
    {
        id: 'event3',
        title: 'Digital Skills for the Future Webinar',
        date: '2025-07-20',
        location: 'Online',
        description: 'Join our expert panel discussion on essential digital skills for the evolving job market.',
        link: '#'
    }
];


// Array to store jobs posted by the user (in-memory)
let myPostedJobs = [];
// Array to store applied jobs (in-memory)
let myApplications = [];

// Define Zimbabwean flag color palettes for random assignment
// Using Tailwind's closest equivalents for a modern, sophisticated look
const flagColorPalettes = [
    // Green palette: #009739
    { bgLight: 'bg-emerald-100', textDark: 'text-emerald-800', icon: 'text-emerald-600', buttonBg: 'bg-emerald-600', buttonHover: 'hover:bg-emerald-700' },
    // Yellow palette: #FCE300
    { bgLight: 'bg-amber-100', textDark: 'text-amber-800', icon: 'text-amber-600', buttonBg: 'bg-amber-600', buttonHover: 'hover:bg-amber-700' },
    // Red palette: #EF3340
    { bgLight: 'bg-red-100', textDark: 'text-red-800', icon: 'text-red-600', buttonBg: 'bg-red-600', buttonHover: 'hover:bg-red-700' },
    // Black/Neutral palette: #000000 / #FFFFFF (using gray for light background, black for text/button)
    { bgLight: 'bg-gray-100', textDark: 'text-gray-900', icon: 'text-gray-700', buttonBg: 'bg-gray-800', buttonHover: 'hover:bg-gray-900' }
];

// Function to get a random color palette
function getRandomPalette() {
    const randomIndex = Math.floor(Math.random() * flagColorPalettes.length);
    return flagColorPalettes[randomIndex];
}

// Function to display job listings
function displayJobs(jobList, targetElementId) {
    const jobListingsContainer = document.getElementById(targetElementId);
    jobListingsContainer.innerHTML = ''; // Clear previous listings

    if (jobList.length === 0) {
        jobListingsContainer.innerHTML = '<p class="text-gray-600 md:col-span-3 text-center">No jobs found matching your criteria.</p>';
        return;
    }

    jobList.forEach(job => {
        const palette = getRandomPalette(); // Get a random color palette for each card
        const jobCard = `
            <div class="${palette.bgLight} p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-bold ${palette.textDark} mb-2">${job.title}</h3>
                    <p class="text-gray-700 mb-1"><strong>Company:</strong> ${job.company}</p>
                    <p class="text-gray-700 mb-1"><strong>Location:</strong> ${job.location}</p>
                    <p class="text-gray-700 mb-1"><strong>Type:</strong> ${job.type}</p>
                    <p class="text-gray-700 mb-1"><strong>Posted:</strong> ${job.datePosted || 'N/A'}</p>
                    <p class="text-gray-700 mb-3"><strong>Expires:</strong> ${job.expirationDate || 'N/A'}</p>
                    <p class="text-gray-700 text-sm line-clamp-3 mb-4">${job.description}</p>
                </div>
                <button class="view-details-btn ${palette.buttonBg} text-white px-4 py-2 rounded-lg ${palette.buttonHover} transition duration-300 w-full" data-item-type="job" data-item-id="${job.id}">View Details</button>
            </div>
        `;
        jobListingsContainer.innerHTML += jobCard;
    });
}

// Function to display Learn & Grow Courses
function displayLearnGrowCourses() {
    const container = document.getElementById('learn-grow-cards');
    container.innerHTML = '';
    learnGrowCourses.forEach(course => {
        const palette = getRandomPalette();
        const card = `
            <div class="${palette.bgLight} p-5 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <i class="${course.icon} ${palette.icon} text-3xl mb-3"></i>
                <h3 class="font-bold text-xl ${palette.textDark} mb-2">${course.title}</h3>
                <p class="text-gray-700 mb-3">${course.description}</p>
                <button class="${palette.buttonBg} text-white px-4 py-2 rounded-lg ${palette.buttonHover} transition duration-300">Enroll Now</button>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Function to display Entrepreneurship Resources
function displayEntrepreneurshipResources() {
    const container = document.getElementById('entrepreneurship-cards');
    container.innerHTML = '';
    entrepreneurshipResources.forEach(resource => {
        const palette = getRandomPalette();
        const card = `
            <div class="${palette.bgLight} p-5 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <i class="${resource.icon} ${palette.icon} text-3xl mb-3"></i>
                <h3 class="font-bold text-xl ${palette.textDark} mb-2">${resource.title}</h3>
                <p class="text-gray-700 mb-3">${resource.description}</p>
                <button class="${palette.buttonBg} text-white px-4 py-2 rounded-lg ${palette.buttonHover} transition duration-300">Learn More</button>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Function to display Advertisements
function displayAdvertisements() {
    const container = document.getElementById('advertisements-list');
    container.innerHTML = '';
    if (advertisements.length === 0) {
        container.innerHTML = '<p class="text-gray-600 md:col-span-3 text-center">No advertisements currently featured.</p>';
        return;
    }
    advertisements.forEach(ad => {
        const palette = getRandomPalette(); // Use random palette for ads too
        const adCard = `
            <div class="${palette.bgLight} p-5 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <img src="${ad.image}" alt="${ad.title}" class="rounded-lg mb-3 w-full h-32 object-cover">
                <h3 class="font-bold text-xl ${palette.textDark} mb-2">${ad.title}</h3>
                <p class="text-gray-700 mb-3">${ad.description}</p>
                <a href="${ad.link}" target="_blank" class="${palette.buttonBg} text-white px-4 py-2 rounded-lg ${palette.buttonHover} transition duration-300 inline-block">Learn More</a>
            </div>
        `;
        container.innerHTML += adCard;
    });
}

// Function to display Public Holidays
function displayPublicHolidays() {
    const container = document.getElementById('public-holidays-list');
    container.innerHTML = '';
    publicHolidays.forEach(holiday => {
        const listItem = `<li><strong>${holiday.date}:</strong> ${holiday.name}</li>`;
        container.innerHTML += listItem;
    });
}

// Function to display World Heritage Sites
function displayHeritageSites() {
    const container = document.getElementById('heritage-sites-list');
    container.innerHTML = '';
    heritageSites.forEach(site => {
        const palette = getRandomPalette();
        const card = `
            <div class="${palette.bgLight} p-5 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <img src="${site.image}" alt="${site.name}" class="rounded-lg mb-3 w-full h-32 object-cover">
                <h4 class="font-bold text-xl ${palette.textDark} mb-2">${site.name}</h4>
                <p class="text-gray-700 text-sm mb-3">${site.location}</p>
                <button class="nav-link ${palette.buttonBg} text-white px-4 py-2 rounded-lg ${palette.buttonHover} transition duration-300 w-full" data-item-type="heritage" data-item-id="${site.id}" data-target="${site.id}-details">View Details</button>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Function to display Tourist Attractions
function displayTouristAttractions() {
    const container = document.getElementById('tourist-attractions-list');
    container.innerHTML = '';
    touristAttractions.forEach(attraction => {
        const palette = getRandomPalette();
        const card = `
            <div class="${palette.bgLight} p-5 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <img src="${attraction.image}" alt="${attraction.name}" class="rounded-lg mb-3 w-full h-32 object-cover">
                <h4 class="font-bold text-xl ${palette.textDark} mb-2">${attraction.name}</h4>
                <p class="text-gray-700 text-sm mb-3">${attraction.location}</p>
                <button class="nav-link ${palette.buttonBg} text-white px-4 py-2 rounded-lg ${palette.buttonHover} transition duration-300 w-full" data-item-type="attraction" data-item-id="${attraction.id}" data-target="${attraction.id}-details">View Details</button>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Function to display Tertiary Institutions
function displayTertiaryInstitutions() {
    const container = document.getElementById('tertiary-institutions-list');
    container.innerHTML = '';
    tertiaryInstitutions.forEach(institution => {
        const palette = getRandomPalette();
        const card = `
            <div class="${palette.bgLight} p-4 rounded-lg shadow-sm">
                <h4 class="font-bold text-lg ${palette.textDark}">${institution.name}</h4>
                <p class="text-gray-700 text-sm"><strong>Type:</strong> ${institution.type}</p>
                <p class="text-700 text-sm"><strong>Location:</strong> ${institution.location}</p>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Function to display Latest News & Updates
function displayLatestNews() {
    const container = document.getElementById('news-updates-list');
    container.innerHTML = '';
    if (latestNews.length === 0) {
        container.innerHTML = '<p class="text-gray-600 md:col-span-2 text-center">No news or updates available at the moment.</p>';
        return;
    }
    latestNews.forEach(newsItem => {
        const palette = getRandomPalette();
        const newsCard = `
            <div class="${palette.bgLight} p-5 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <h3 class="font-bold text-xl ${palette.textDark} mb-2">${newsItem.title}</h3>
                <p class="text-gray-700 text-sm mb-2">Date: ${newsItem.date}</p>
                <p class="text-gray-700 mb-3">${newsItem.summary}</p>
                <a href="${newsItem.link}" target="_blank" class="${palette.buttonBg} text-white px-4 py-2 rounded-lg ${palette.buttonHover} transition duration-300 inline-block">Read More</a>
            </div>
        `;
        container.innerHTML += newsCard;
    });
}

// Function to display Upcoming Events
function displayUpcomingEvents() {
    const container = document.getElementById('upcoming-events-list');
    container.innerHTML = '';
    if (upcomingEvents.length === 0) {
        container.innerHTML = '<p class="text-gray-600 md:col-span-2 text-center">No upcoming events scheduled at the moment.</p>';
        return;
    }
    upcomingEvents.forEach(eventItem => {
        const palette = getRandomPalette();
        const eventCard = `
            <div class="${palette.bgLight} p-5 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <h3 class="font-bold text-xl ${palette.textDark} mb-2">${eventItem.title}</h3>
                <p class="text-gray-700 text-sm mb-1">Date: ${eventItem.date}</p>
                <p class="text-gray-700 text-sm mb-2">Location: ${eventItem.location}</p>
                <p class="text-gray-700 mb-3">${eventItem.description}</p>
                <a href="${eventItem.link}" target="_blank" class="${palette.buttonBg} text-white px-4 py-2 rounded-lg ${palette.buttonHover} transition duration-300 inline-block">View Details</a>
            </div>
        `;
        container.innerHTML += eventCard;
    });
}


// Generic function to open detail modal for jobs, heritage sites, attractions
function openDetailModal(item, type) {
    const modal = document.getElementById('detail-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const modalActionButton = document.getElementById('modal-action-button');
    const modalMessage = document.getElementById('modal-message');

    console.log("Attempting to open modal for:", item.name || item.title, "Type:", type);

    modalTitle.textContent = item.title || item.name; // Use title for jobs, name for others
    modalContent.innerHTML = ''; // Clear previous content
    modalActionButton.style.display = 'none'; // Hide action button by default
    modalMessage.style.display = 'none'; // Hide message by default

    try {
        if (type === 'job') {
            modalContent.innerHTML = `
                <p class="text-gray-600 mb-2"><strong class="text-emerald-600">Company:</strong> ${item.company || 'N/A'}</p>
                <p class="text-gray-600 mb-2"><strong class="text-emerald-600">Location:</strong> ${item.location || 'N/A'}</p>
                <p class="text-gray-600 mb-2"><strong class="text-emerald-600">Type:</strong> ${item.type || 'N/A'}</p>
                <p class="text-gray-600 mb-2"><strong class="text-emerald-600">Salary:</strong> ${item.salary || 'Not specified'}</p>
                <p class="text-gray-600 mb-2"><strong class="text-emerald-600">Date Posted:</strong> ${item.datePosted || 'N/A'}</p>
                <p class="text-gray-600 mb-4"><strong class="text-emerald-600">Expires On:</strong> ${item.expirationDate || 'N/A'}</p>
                <h4 class="text-xl font-semibold text-gray-700 mb-2">Description:</h4>
                <p class="text-gray-700 leading-relaxed mb-4">${item.description || 'No description available.'}</p>
                <h4 class="text-xl font-semibold text-gray-700 mb-2">Requirements:</h4>
                <ul class="list-disc list-inside text-gray-700 mb-6">
                    ${item.requirements && item.requirements.length > 0 ? item.requirements.map(req => `<li>${req}</li>`).join('') : '<li>No specific requirements listed.</li>'}
                </ul>
            `;
            modalActionButton.textContent = 'Apply Now';
            modalActionButton.onclick = () => applyForJob(item);
            modalActionButton.style.display = 'block'; // Show as block
        } else if (type === 'heritage' || type === 'attraction') {
            // This block is now effectively unused for Discover Zim items as they navigate to sections
            // However, keeping it here for completeness if other parts of the app were to use it differently
            modalContent.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="rounded-lg mb-4 w-full h-48 object-cover" onerror="this.onerror=null;this.src='assets/images/placeholder_site.png';">
                <p class="text-gray-700 leading-relaxed mb-4">${item.description || 'No description available for this site.'}</p>
                <p class="text-gray-600 mb-2"><strong class="text-emerald-600">Location:</strong> ${item.location || 'Location not specified.'}</p>
            `;
        }
    } catch (error) {
        console.error("Error populating modal content:", error);
        modalContent.innerHTML = `<p class="text-red-500">Error loading content. Please try again.</p>`;
    }

    modal.style.display = 'flex'; // Show the modal as a flex container
    console.log("Modal display set to flex.");
}

// Function to close detail modal
function closeDetailModal() {
    document.getElementById('detail-modal').style.display = 'none';
    console.log("Modal display set to none.");
}

// Function to handle job application
function applyForJob(job) {
    // In a real app, this would send data to a backend
    myApplications.push(job);
    document.getElementById('modal-message').textContent = 'Application submitted successfully! We will notify you of the next steps.';
    document.getElementById('modal-message').style.display = 'block'; // Show as block
    document.getElementById('modal-action-button').style.display = 'none'; // Hide action button
    updateMyApplications(); // Update the profile page
}

// Function to update "My Applications" on profile page
function updateMyApplications() {
    const myApplicationsContainer = document.getElementById('my-applications');
    myApplicationsContainer.innerHTML = '';
    if (myApplications.length === 0) {
        myApplicationsContainer.innerHTML = '<p class="text-gray-600">No applications submitted yet.</p>';
        return;
    }
    myApplications.forEach(app => {
        const appItem = `
            <div class="bg-white p-4 rounded-lg shadow-sm mb-3">
                <h5 class="font-semibold text-emerald-700">${app.title} at ${app.company}</h5>
                <p class="text-gray-600 text-sm">${app.location} - ${app.type}</p>
                <p class="text-gray-500 text-xs mt-1">Applied on: ${new Date().toLocaleDateString()}</p>
            </div>
        `;
        myApplicationsContainer.innerHTML += appItem;
    });
}

// Function to handle employer job posting
function postNewJob(event) {
    event.preventDefault(); // Prevent default form submission

    const title = document.getElementById('employer-job-title').value;
    const company = document.getElementById('employer-company-name').value;
    const location = document.getElementById('employer-job-location').value;
    const type = document.getElementById('employer-job-type').value;
    const salary = document.getElementById('employer-job-salary').value;
    const description = document.getElementById('employer-job-description').value;
    const requirements = document.getElementById('employer-job-requirements').value.split(',').map(req => req.trim());
    const datePosted = document.getElementById('employer-date-posted').value;
    const expirationDate = document.getElementById('employer-expiration-date').value;

    const newJob = {
        id: 'job' + (jobs.length + 1), // Simple unique ID
        title,
        company,
        location,
        type,
        salary,
        description,
        requirements,
        datePosted,
        expirationDate
    };

    jobs.unshift(newJob); // Add new job to the beginning of the list
    myPostedJobs.unshift(newJob); // Add to employer's posted jobs

    // Clear the form
    document.getElementById('post-job-form').reset();

    // Re-display jobs on "Find Jobs" page and "My Posted Jobs"
    displayJobs(jobs, 'job-listings');
    displayJobs(myPostedJobs, 'my-posted-jobs');

    // Optionally, show a success message
    // In a real app, a modal or toast notification would be better
    alert('Job posted successfully!');
    showPage('find-jobs'); // Redirect to find jobs page after posting
}

// Function to handle advertisement request submission
function submitAdRequest(event) {
    event.preventDefault();
    // In a real application, this data would be sent to a backend for review
    const advertiserName = document.getElementById('advertiser-name').value;
    const advertiserEmail = document.getElementById('advertiser-email').value;
    const businessName = document.getElementById('business-name').value;
    const adContent = document.getElementById('ad-content').value;

    console.log('Ad Request Submitted:', { advertiserName, advertiserEmail, businessName, adContent });

    document.getElementById('advertise-request-form').reset();
    document.getElementById('advertise-request-form').classList.add('hidden'); // Hide form after submission
    document.getElementById('ad-request-message').classList.remove('hidden'); // Show success message

    // Hide success message after a few seconds
    setTimeout(() => {
        document.getElementById('ad-request-message').classList.add('hidden');
    }, 5000);
}

// Function to handle contact form submission
function submitContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value;

    console.log('Contact Form Submitted:', { name, email, subject, message });

    // Simulate successful submission
    document.getElementById('contact-us-form').reset();
    document.getElementById('contact-us-form').classList.add('hidden');
    const statusMessage = document.getElementById('contact-message-status');
    statusMessage.textContent = 'Your message has been sent successfully! We will get back to you soon.';
    statusMessage.classList.remove('hidden');

    setTimeout(() => {
        statusMessage.classList.add('hidden');
    }, 5000); // Hide message after 5 seconds
}

// Function to filter jobs based on search and dropdowns
function filterJobs() {
    const query = document.getElementById('job-search-query').value.toLowerCase();
    const locationFilter = document.getElementById('job-filter-location').value;
    const typeFilter = document.getElementById('job-filter-type').value;

    const filteredJobs = jobs.filter(job => {
        const matchesQuery = job.title.toLowerCase().includes(query) ||
                                 job.description.toLowerCase().includes(query) ||
                                 job.company.toLowerCase().includes(query) ||
                                 job.requirements.some(req => req.toLowerCase().includes(query));
        const matchesLocation = locationFilter === '' || job.location === locationFilter;
        const matchesType = typeFilter === '' || job.type === typeFilter;

        return matchesQuery && matchesLocation && matchesType;
    });

    displayJobs(filteredJobs, 'job-listings');
}

// Page navigation logic
function showPage(pageId) {
    console.log(`Attempting to show page: ${pageId}`);
    document.querySelectorAll('.page-section').forEach(section => {
        if (section.id === pageId) {
            section.classList.add('active');
            console.log(`Activating section: ${section.id}`);

            // Special handling for Discover Zimbabwe sections that need dynamic content
            if (pageId === 'discover-zimbabwe') {
                console.log('Rendering Discover Zimbabwe content...');
                displayPublicHolidays();
                displayHeritageSites();
                displayTouristAttractions();
                displayTertiaryInstitutions();
            } else if (pageId.endsWith('-details')) {
                // Handle detail pages for Heritage Sites and Tourist Attractions
                const itemId = pageId.split('-')[0]; // e.g., 'whs1' or 'ta1'
                let item = null;
                let itemType = '';

                if (itemId.startsWith('whs')) {
                    item = heritageSites.find(site => site.id === itemId);
                    itemType = 'heritage';
                } else if (itemId.startsWith('ta')) {
                    item = touristAttractions.find(attraction => attraction.id === itemId);
                    itemType = 'attraction';
                }

                if (item) {
                    console.log(`Found item for ${pageId}:`, item); // Log the found item
                    const detailSection = document.getElementById(pageId);
                    if (detailSection) {
                        // Create the HTML string for the detail content
                        const contentHtml = `
                            <h2 class="text-3xl font-semibold text-emerald-700 mb-4">${item.name}</h2>
                            <img src="${item.image}" alt="${item.name}" class="rounded-lg mb-4 w-full h-64 object-cover" onerror="this.onerror=null;this.src='assets/images/placeholder_site.png';">
                            <p class="text-gray-700 leading-relaxed mb-4">${item.description}</p>
                            <p class="text-gray-600 mb-2"><strong>Location:</strong> ${item.location}</p>
                            <button class="back-to-discover-btn bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition duration-300 shadow-md mt-4">Back to Discover Zimbabwe</button>
                        `;
                        console.log("Generated HTML for detail section:", contentHtml); // Log the generated HTML
                        detailSection.innerHTML = contentHtml;
                        console.log("Detail section innerHTML after assignment:", detailSection.innerHTML); // Log after assignment
                    } else {
                        console.error(`Error: Detail section element with ID ${pageId} not found.`);
                    }
                } else {
                    console.warn(`Detail item not found for ID: ${itemId}, Type: ${itemType}. Displaying fallback.`);
                    const detailSection = document.getElementById(pageId);
                    if (detailSection) {
                        detailSection.innerHTML = `
                            <h2 class="text-3xl font-semibold text-red-700 mb-4">Content Not Found</h2>
                            <p class="text-gray-700 leading-relaxed mb-4">The details for this item could not be loaded. Please try again or go back.</p>
                            <button class="back-to-discover-btn bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition duration-300 shadow-md mt-4">Back to Discover Zimbabwe</button>
                        `;
                    }
                }
            }
        } else {
            section.classList.remove('active');
            console.log(`Deactivating section: ${section.id}`);
        }
    });
    window.scrollTo(0, 0); // Scroll to top on page change

    // Close mobile nav if open
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initial display of all dynamic content
    displayJobs(jobs, 'job-listings');
    displayJobs(myPostedJobs, 'my-posted-jobs'); // Display initially empty
    displayLearnGrowCourses();
    displayEntrepreneurshipResources();
    displayAdvertisements();
    displayPublicHolidays();
    displayHeritageSites();
    displayTouristAttractions();
    displayTertiaryInstitutions();
    displayLatestNews(); // New: Display latest news
    displayUpcomingEvents(); // New: Display upcoming events


    // Set the current date as the default for 'Date Posted'
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(today.getDate()).padStart(2, '0');
    document.getElementById('employer-date-posted').value = `${year}-${month}-${day}`;


    // Event delegation for navigation links (including dynamically added ones)
    document.addEventListener('click', (event) => {
        const navLink = event.target.closest('.nav-link');
        if (navLink) {
            event.preventDefault();
            const targetId = navLink.dataset.target;
            showPage(targetId);
        }
    });

    // Hamburger menu toggle
    document.getElementById('hamburger-menu').addEventListener('click', () => {
        document.getElementById('mobile-nav').classList.toggle('active');
    });

    // Close detail modal
    document.getElementById('close-detail-modal').addEventListener('click', closeDetailModal);

    // Universal event listener for "View Details" buttons (for jobs, etc.)
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('view-details-btn')) {
            const itemId = event.target.dataset.itemId;
            const itemType = event.target.dataset.itemType;
            let selectedItem;

            if (itemType === 'job') {
                selectedItem = jobs.find(item => item.id === itemId);
                if (selectedItem) {
                    openDetailModal(selectedItem, itemType);
                } else {
                    console.warn(`Job item not found for ID: ${itemId}`);
                }
            }
            // Note: 'heritage' and 'attraction' types are handled by the 'nav-link' event delegation now
            // as their buttons have 'nav-link' class and 'data-target' attribute.
        }
    });

    // Event listener for "Back to Discover Zimbabwe" buttons
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('back-to-discover-btn')) {
            showPage('discover-zimbabwe');
        }
    });

    // Event listener for "Back to Home" buttons (in enhanced feature sections)
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('back-to-home-btn')) {
            showPage('home');
        }
    });


    // Employer job posting form submission
    document.getElementById('post-job-form').addEventListener('submit', postNewJob);

    // Show/Hide Advertise Request Form
    document.getElementById('show-advertise-form-btn').addEventListener('click', () => {
        const form = document.getElementById('advertise-request-form');
        form.classList.toggle('hidden');
        document.getElementById('ad-request-message').classList.add('hidden'); // Hide message if form is re-opened
    });

    // Advertisement request form submission
    document.getElementById('advertise-request-form').addEventListener('submit', submitAdRequest);

    // Show/Hide Contact Us Form
    document.getElementById('show-contact-form-btn').addEventListener('click', () => {
        const form = document.getElementById('contact-us-form');
        form.classList.toggle('hidden');
        document.getElementById('contact-message-status').classList.add('hidden'); // Hide message if form is re-opened
    });

    // Contact Us form submission
    document.getElementById('contact-us-form').addEventListener('submit', submitContactForm);

    // Apply job filters button
    document.getElementById('apply-job-filters').addEventListener('click', filterJobs);

    // Optional: Filter as user types/changes dropdowns (can be resource-intensive for large datasets)
    // document.getElementById('job-search-query').addEventListener('keyup', filterJobs);
    // document.getElementById('job-filter-location').addEventListener('change', filterJobs);
    // document.getElementById('job-filter-type').addEventListener('change', filterJobs);
});
