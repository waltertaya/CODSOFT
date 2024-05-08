const router = require('express').Router();
const req = require('express/lib/request');
const db = require('../DB/db');
const Post = require('../DB/models/posts');
const User = require('../DB/models/users');
const { hashPassword, comparePassword } = require('../DB/security/hashing');
require('dotenv').config();

const { posts, users } = require('../dummy');


router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await users.find(user => user.username === username && user.password === password);
    if (foundUser) {
        req.session.user = foundUser;
        res.redirect('/posts');
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

router.get('/', (req, res) => {
    let popularPosts = posts.sort((a, b) => b.views - a.views)[0];
    let recentPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    let totalPosts = posts.length;
    res.render('landing-page', { posts, popularPosts, recentPosts, totalPosts });
});

router.use((req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/');
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

router.get('/posts', (req, res) => {
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
