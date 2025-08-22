const testimonialsData = [
    {
        quote: "SRTTC’s labs and guidance shaped my coding skills and gave me confidence.",
        name: "Muskan Sharma",
        title: "CSE, 2023 - Software Engineer, Microsoft",
        avatar: "muskan.png",
        icon: "fas fa-laptop-code"
    },
    {
        quote: "Strong E&TC foundation at SRTTC helped me crack GATE and pursue IIT research.",
        name: "Aditya Jadhav",
        title: "E&TC, 2022 - Research Scholar, IIT Bombay",
        avatar: "aditya.png",
        icon: "fas fa-microchip"
    },
    {
        quote: "Workshops and mentorship here opened doors for my career at Tata Motors.",
        name: "Hassan Shan",
        title: "Mechanical, 2023 - Graduate Trainee Engineer, Tata Motors",
        avatar: "Hassan.png",
        icon: "fas fa-car"
    },
    {
        quote: "Projects and visits at SRTTC helped me secure M.Tech admission in NIT.",
        name: "Sakshi Lohade",
        title: "Civil, 2021 - M.Tech, NIT Trichy",
        avatar: "sakshi.png",
        icon: "fas fa-hard-hat"
    },
    {
        quote: "Hackathons and coding clubs pushed me closer to my dream career.",
        name: "Rohit Patil",
        title: "IT, 2022 - Data Analyst, Infosys",
        avatar: "rohit.png",
        icon: "fas fa-database"
    },
    {
        quote: "Hands-on labs and support prepared me for global companies like Bosch.",
        name: "Sayali Jarande",
        title: "E&TC, 2023 - Embedded Engineer, Bosch",
        avatar: "sayali.png",
        icon: "fas fa-microchip"
    },
    {
        quote: "Practical learning at SRTTC helped me become a Design Engineer at Mahindra.",
        name: "Swanil More",
        title: "Mechanical, 2022 - Design Engineer, Mahindra & Mahindra",
        avatar: "swanil.png",
        icon: "fas fa-cogs"
    },
    {
        quote: "The strong fundamentals here gave me confidence for higher studies abroad.",
        name: "Suvarna Pawar",
        title: "Electrical, 2021 - M.S. Power Systems, University of Texas",
        avatar: "suvarna.png",
        icon: "fas fa-bolt"
    },
    {
        quote: "SRTTC’s coding culture prepared me for real-world AI challenges at Amazon.",
        name: "Gaurav Bhosekar",
        title: "CSE, 2020 - AI Engineer, Amazon",
        avatar: "gaurav.png",
        icon: "fas fa-robot"
    },
    {
        quote: "Modern curriculum and guidance led me to a cloud career at Accenture.",
        name: "Dhanashree Dixit",
        title: "IT, 2023 - Cloud Engineer, Accenture",
        avatar: "dhanashree.png",
        icon: "fas fa-cloud"
    },
    {
        quote: "Training and projects gave me confidence to work on L&T projects.",
        name: "Rohan Deshmukh",
        title: "Civil, 2022 - Site Engineer, L&T",
        avatar: "rohan.png",
        icon: "fas fa-building"
    },
    {
        quote: "Academic rigor at SRTTC helped me pursue Data Science abroad.",
        name: "Priya Kulkarni",
        title: "CSE, 2021 - M.S. Data Science, Melbourne",
        avatar: "priya.png",
        icon: "fas fa-chart-line"
    },
    {
        quote: "Practical labs and industry tie-ups helped me join Volkswagen.",
        name: "Nikhil Patankar",
        title: "Mechanical, 2020 - Production Engineer, Volkswagen",
        avatar: "nikhil.png",
        icon: "fas fa-industry"
    },
    {
        quote: "Circuit labs here built the base for my VLSI career at Intel.",
        name: "Anjali Joshi",
        title: "E&TC, 2023 - VLSI Engineer, Intel",
        avatar: "anjali.png",
        icon: "fas fa-microchip"
    },
    {
        quote: "Expert faculty and training helped me start my career at Siemens.",
        name: "Amit Shinde",
        title: "Electrical, 2022 - Control Engineer, Siemens",
        avatar: "amit.png",
        icon: "fas fa-plug"
    },
    {
        quote: "Cybersecurity workshops at SRTTC shaped my TCS career path.",
        name: "Sneha Patil",
        title: "IT, 2021 - Cybersecurity Analyst, TCS",
        avatar: "sneha.png",
        icon: "fas fa-shield-alt"
    },
    {
        quote: "Robotics club and projects motivated me for higher studies at IIT.",
        name: "Kunal Sawant",
        title: "Mechanical, 2023 - M.Tech Robotics, IIT Madras",
        avatar: "kunal.png",
        icon: "fas fa-robot"
    },
    {
        quote: "SRTTC gave me technical knowledge and confidence for real projects.",
        name: "Pooja Nair",
        title: "Civil, 2020 - Project Engineer, HCC",
        avatar: "pooja.png",
        icon: "fas fa-hard-hat"
    },
    {
        quote: "Hackathons and coding culture boosted my software career at Wipro.",
        name: "Varun Kulkarni",
        title: "CSE, 2022 - Backend Developer, Wipro",
        avatar: "varun.png",
        icon: "fas fa-code"
    },
    {
        quote: "Research-driven projects here inspired me to join DRDO.",
        name: "Rutuja Phadke",
        title: "E&TC, 2021 - Signal Engineer, DRDO",
        avatar: "rutuja.png",
        icon: "fas fa-satellite-dish"
    },
    {
        quote: "Workshops on renewable energy inspired my higher studies in Germany.",
        name: "Akshay More",
        title: "Electrical, 2023 - M.S. Renewable Energy, Germany",
        avatar: "akshay.png",
        icon: "fas fa-solar-panel"
    },
    {
        quote: "The innovation cell encouraged me to shape a career in UI/UX.",
        name: "Shreya Kulshreshtha",
        title: "IT, 2020 - UI/UX Designer, Infosys",
        avatar: "shreya.png",
        icon: "fas fa-pencil-ruler"
    },
    {
        quote: "Practical exposure and support boosted my full-stack career at Capgemini.",
        name: "Manish Patil",
        title: "CSE, 2021 - Full Stack Developer, Capgemini",
        avatar: "manish.png",
        icon: "fas fa-code-branch"
    },
    {
        quote: "Labs and field visits prepared me to work confidently in PWD.",
        name: "Neha Chavan",
        title: "Civil, 2023 - Junior Engineer, PWD",
        avatar: "neha.png",
        icon: "fas fa-drafting-compass"
    },
    {
        quote: "Strong academics and faculty support helped me join HAL aerospace.",
        name: "Rajesh Pawar",
        title: "Mechanical, 2021 - Aerospace Engineer, HAL",
        avatar: "rajesh.png",
        icon: "fas fa-plane"
    }
];
