const e = require('express');

const router = require('express').Router();

const posts = [
    {
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

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await users.find(user => user.username === username && user.password === password);
    if (foundUser) {
        req.session.user = foundUser;
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup', (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        req.session.username = username;
        res.redirect('/login');
    } else {
        res.redirect('/signup');
    }
});

router.use((req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

router.get('/', (req, res) => {
    let popularPosts = posts.sort((a, b) => b.views - a.views)[0];
    let recentPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    let totalPosts = posts.length;
    res.render('index', { posts, popularPosts, recentPosts, totalPosts });
});

router.get('/travel', (req, res) => {
    let popularPosts = posts.sort((a, b) => b.views - a.views)[0];
    let recentPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    let travelPosts = posts.filter(post => post.type === 'Travel');
    let totalPosts = travelPosts.length;
    res.render('index', { posts: travelPosts, popularPosts, recentPosts, totalPosts });
});

router.get('/thinking', (req, res) => {
    let popularPosts = posts.sort((a, b) => b.views - a.views)[0];
    let recentPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    let thinkingPosts = posts.filter(post => post.type === 'Thinking');
    let totalPosts = thinkingPosts.length;
    res.render('index', { posts: thinkingPosts, popularPosts, recentPosts, totalPosts });
});

router.get('/lifestyle', (req, res) => {
    let popularPosts = posts.sort((a, b) => b.views - a.views)[0];
    let recentPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    let lifestylePosts = posts.filter(post => post.type === 'Lifestyle');
    let totalPosts = lifestylePosts.length;
    res.render('index', { posts: lifestylePosts, popularPosts, recentPosts, totalPosts });
});

router.get('/design', (req, res) => {
    let popularPosts = posts.sort((a, b) => b.views - a.views)[0];
    let recentPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    let designPosts = posts.filter(post => post.type === 'Design');
    let totalPosts = designPosts.length;
    res.render('index', { posts: designPosts, popularPosts, recentPosts, totalPosts });
});

router.get('/profile', (req, res) => {
    // let userPosts = posts.filter(post => post.author === req.session.user.username);
    res.render('profile', { user: req.session.user, posts  });
});

module.exports = router;
