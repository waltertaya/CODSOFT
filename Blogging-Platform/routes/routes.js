const router = require('express').Router();
const req = require('express/lib/request');
const db = require('../DB/db');
const Post = require('../DB/models/posts');
const User = require('../DB/models/users');
const { hashPassword, comparePassword } = require('../DB/security/hashing');
require('dotenv').config();

// const { posts, users } = require('../dummy');

// Post.insertMany(posts)
//     .then(() => console.log('Posts inserted successfully'))
//     .catch(err => console.error('Error inserting posts:', err));

const getPosts = async () => {
    try {
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.error('Error getting posts:', error);
    }
};

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findOne({ username });
    if (foundUser) {
        req.session.user = foundUser;
        const isPasswordCorrect = await comparePassword(password, foundUser.password);
        if (isPasswordCorrect) {
            res.redirect('/posts');
        } else {
            res.redirect('/login');
        }
    } else {
        res.redirect('/login');
    }
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup', async (req, res) => {
    const { username, password, fullname, email, conPassword } = req.body;
    const existingUser = await User.findOne({ username });
    const existingEmail = await User.findOne({ email });
    if (existingUser || existingEmail) {
        res.redirect('/signup');
    }
    if (password === conPassword) {
        const hashedPassword = await hashPassword(password);
        const newUser = new User({username, password: hashedPassword, fullname, email});
        await newUser.save();
        req.session.user = newUser;
        res.redirect('/more-info');
    } else {
        res.redirect('/signup');
    }
});

router.get('/more-info', (req, res) => {
    res.render('more-info');
});

router.post('/more-info', async (req, res) => {
    const { location, bio, areasOfInterest, socialLink, socialName } = req.body;
    const socials = [];
    for (let i = 0; i < socialName.length; i++) {
        const social = { name: socialName[i], link: socialLink[i] };
        socials.push(social);
    }
    const userId = req.session.user._id;
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error("User not found");
        }
        user.location = location;
        user.bio = bio;
        user.areasOfInterest = areasOfInterest.split(',');
        user.socials = socials;
        await user.save();
        res.redirect('/posts');
    } catch (error) {
        res.status(500).send("Error updating user details");
    }
});

router.get('/', async (req, res) => {
    const posts = await getPosts();
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

router.get('/posts', async (req, res) => {
    const posts = await getPosts();
    let popularPosts = posts.sort((a, b) => b.views - a.views)[0];
    let recentPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    let totalPosts = posts.length;
    res.render('index', { posts, popularPosts, recentPosts, totalPosts });
});

router.get('/travel', async (req, res) => {
    const posts = await getPosts();
    let popularPosts = posts.sort((a, b) => b.views - a.views)[0];
    let recentPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    let travelPosts = posts.filter(post => post.type === 'Travel');
    let totalPosts = travelPosts.length;
    res.render('index', { posts: travelPosts, popularPosts, recentPosts, totalPosts });
});

router.get('/thinking', async (req, res) => {
    const posts = await getPosts();
    let popularPosts = posts.sort((a, b) => b.views - a.views)[0];
    let recentPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    let thinkingPosts = posts.filter(post => post.type === 'Thinking');
    let totalPosts = thinkingPosts.length;
    res.render('index', { posts: thinkingPosts, popularPosts, recentPosts, totalPosts });
});

router.get('/lifestyle', async (req, res) => {
    const posts = await getPosts();
    let popularPosts = posts.sort((a, b) => b.views - a.views)[0];
    let recentPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    let lifestylePosts = posts.filter(post => post.type === 'Lifestyle');
    let totalPosts = lifestylePosts.length;
    res.render('index', { posts: lifestylePosts, popularPosts, recentPosts, totalPosts });
});

router.get('/design', async (req, res) => {
    const posts = await getPosts();
    let popularPosts = posts.sort((a, b) => b.views - a.views)[0];
    let recentPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    let designPosts = posts.filter(post => post.type === 'Design');
    let totalPosts = designPosts.length;
    res.render('index', { posts: designPosts, popularPosts, recentPosts, totalPosts });
});

router.get('/create-post', (req, res) => {
    res.render('createPost');
});

router.post('/create-post', async (req, res) => {
    const { title, type, description, image } = req.body;
    const author = req.session.user.fullname;
    const username = req.session.user.username;
    const newPost = new Post({ title, type, author, description, image, username });
    await newPost.save();
    res.redirect('/posts');
});

router.get('/profile',async (req, res) => {
    // let userPosts = posts.filter(post => post.author === req.session.user.username);
    const posts = await Post.find({ username: req.session.user.username });
    const user = await User.findById(req.session.user._id);
    console.log(user)
    res.render('profile', { user, posts  });
});

module.exports = router;
