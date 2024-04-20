const router = require('express').Router();

const posts = [
    {
        title: "Discover Your Inner Genius To Better",
        type: "Travel",
        author: "EWRIN JONSON",
        date: "MAR 22, 2021",
        views: 62,
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
        image: "/assets/images/demo.jpeg"
    },
    {
        title: "Read This To Change How You Mind",
        type: "Thinking",
        author: "EWRIN JONSON",
        date: "MAR 21, 2021",
        views: 51,
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
        image: "/assets/images/demo2.jpeg"
    },
    {
        title: "Smart People Think To Get Ahead",
        type: "Thinking",
        author: "EWRIN JONSON",
        date: "MAR 23, 2021",
        views: 51,
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
        image: "/assets/images/demo3.jpeg"
    },
    {
        title: "One Simple Word To Success",
        type: "Thinking",
        author: "EWRIN JONSON",
        date: "MAR 23, 2021",
        views: 45,
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
        image: "/assets/images/demo1.jpeg"
    }
];

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        // req.session.username = username;
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

// router.use((req, res, next) => {
//     if (req.session.username) {
//         next();
//     } else {
//         res.redirect('/login');
//     }
// });

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

module.exports = router;
