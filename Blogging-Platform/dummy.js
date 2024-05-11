const posts = [
    {
        username: "ewrin",
        title: "Discover Your Inner Genius To Better",
        type: "Travel",
        author: "EWRIN JONSON",
        date: "MAR 22, 2021",
        views: 62,
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
        image: "/assets/images/demo.jpeg",
        reactions: 34,
        comments: 12
    },
    {
        username: "ewrin",
        title: "Read This To Change How You Mind",
        type: "Thinking",
        author: "EWRIN JONSON",
        date: "MAR 21, 2021",
        views: 51,
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
        image: "/assets/images/demo2.jpeg",
        reactions: 34,
        comments: 12
    },
    {
        username: "ewrin",
        title: "Smart People Think To Get Ahead",
        type: "Thinking",
        author: "EWRIN JONSON",
        date: "MAR 23, 2021",
        views: 51,
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
        image: "/assets/images/demo3.jpeg",
        reactions: 34,
        comments: 12
    },
    {
        username: "ewrin",
        title: "One Simple Word To Success",
        type: "Thinking",
        author: "EWRIN JONSON",
        date: "MAR 23, 2021",
        views: 45,
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
        image: "/assets/images/demo1.jpeg",
        reactions: 34,
        comments: 12
    }
];

const users = [
    {
        fulname: "Ewrin Jonson",
        username: "ewrin",
        email: "ewrin@gmail.com",
        password: "123456",
        joined: "MAR 22, 2021",
        image: "/assets/images/user1.jpeg",
        location: "New York, USA",
        followers: 120,
        following: 120,
        posts: 12,
        bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
        areasOfInterest: ["Travel", "Thinking", "Lifestyle", "Design"],
        socials: [
            {
                name: "twitter",
                link: "https://twitter.com/ewrin"
            },
            {
                name: "instagram",
                link: "https://instagram.com/ewrin"
            },
            {
                name: "linkedin",
                link: "https://linkedin.com/ewrin"
            }
        ],
        role: "Software Engineer",
        reactions: 34,
        comments: 12
    },
    {
        fulname: "John Doe",
        username: "john",
        email: "john@gmail.com",
        password: "123456",
        joined: "MAR 22, 2021",
        image: "/assets/images/user2.jpeg",
        location: "New York, USA",
        followers: 120,
        following: 120,
        posts: 12,
        bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
        areasOfInterest: ["Travel", "Thinking", "Lifestyle", "Design"],
        socials: [
            {
                name: "twitter",
                link: "https://twitter.com/john"
            },
            {
                name: "instagram",
                link: "https://instagram.com/john"
            },
            {
                name: "linkedin",
                link: "https://linkedin.com/john"
            }
        ],
        role: "Doctor",
        reactions: 34,
        comments: 12
    },
    {
        fulname: "Walter White",
        username: "walter",
        email: "walter@gmail.com",
        password: "123456",
        joined: "MAR 22, 2021",
        image: "/assets/images/user3.jpeg",
        location: "New York, USA",
        followers: 120,
        following: 120,
        posts: 12,
        bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
        areasOfInterest: ["Travel", "Thinking", "Lifestyle", "Design"],
        socials: [
            {
                name: "twitter",
                link: "https://twitter.com/walter"
            },
            {
                name: "instagram",
                link: "https://instagram.com/walter"
            },
            {
                name: "linkedin",
                link: "https://linkedin.com/walter"
            }
        ],
        role: "Teacher",
        reactions: 34,
        comments: 12
    },
    {
        fulname: "Jesse Pinkman",
        username: "jesse",
        email: "jess@gmail.com",
        password: "123456",
        joined: "MAR 22, 2021",
        image: "/assets/images/user4.jpeg",
        location: "New York, USA",
        followers: 120,
        following: 120,
        posts: 12,
        bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
        areasOfInterest: ["Travel", "Thinking", "Lifestyle", "Design"],
        socials: [
            {
                name: "twitter",
                link: "https://twitter.com/jesse"
            },
            {
                name: "instagram",
                link: "https://instagram.com/jesse"
            },
            {
                name: "linkedin",
                link: "https://linkedin.com/jesse"
            }
        ],
        role: "Student",
        reactions: 34,
        comments: 12
    },
    {
        fulname: "Skyler White",
        username: "skyler",
        email: "skyler@gmail.com",
        password: "123456",
        joined: "MAR 22, 2021",
        image: "/assets/images/user5.jpeg",
        location: "New York, USA",
        followers: 120,
        following: 120,
        posts: 12,
        bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
        areasOfInterest: ["Travel", "Thinking", "Lifestyle", "Design"],
        socials: [
            {
                name: "twitter",
                link: "https://twitter.com/skyler"
            },
            {
                name: "instagram",
                link: "https://instagram.com/skyler"
            },
            {
                name: "linkedin",
                link: "https://linkedin.com/skyler"
            }
        ],
        role: "Designer",
        reactions: 34,
        comments: 12
    }
];

module.exports = { posts, users };