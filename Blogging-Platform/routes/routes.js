const router = require('express').Router();
const multer = require('multer');
const db = require('../DB/db');   // database connection
const Post = require('../DB/models/posts');
const User = require('../DB/models/users');
const Followers = require('../DB/models/followers');
const Following = require('../DB/models/following');
const Comment = require('../DB/models/comments');
const { hashPassword, comparePassword } = require('../DB/security/hashing');
require('dotenv').config();

// Configure Multer to store files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const getPosts = async () => {
    try {
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.error('Error getting posts:', error);
    }
};

// Login route
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

// Signup route
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

// More-info route
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

// Landing page route
router.get('/', async (req, res) => {
    const posts = await getPosts();
    let popularPosts = posts.sort((a, b) => b.views - a.views)[0];
    let recentPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
    let totalPosts = posts.length;
    res.render('landing-page', { posts, popularPosts, recentPosts, totalPosts });
});

// Middleware for authenticated routes
router.use((req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/');
    }
});

// Logout route
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

// Posts routes
router.get('/posts', async (req, res) => {
    const posts = await getPosts();
    let popularPosts = posts.sort((a, b) => b.views - a.views)[0];
    let recentPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
    let totalPosts = posts.length;
    res.render('index', { posts, popularPosts, recentPosts, totalPosts });
});

router.get('/posts/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    post.views += 1;
    await post.save();
    const comments = await Comment.find({ postId: req.params.id });
    res.render('read-more', { post, comments });
});

router.post('/posts/:id', async (req, res) => {
    const { comment, postId } = req.body;
    const userId = req.session.user._id;
    const newComment = new Comment({ userId, postId, text: comment });
    await newComment.save();
    res.redirect(`/posts/${postId}`);
});

// Category routes
router.get('/travel', async (req, res) => {
    const posts = await getPosts();
    let popularPosts = posts.sort((a, b) => b.views - a.views)[0];
    let recentPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
    let travelPosts = posts.filter(post => post.type === 'Travel');
    let totalPosts = travelPosts.length;
    res.render('index', { posts: travelPosts, popularPosts, recentPosts, totalPosts });
});

router.get('/thinking', async (req, res) => {
    const posts = await getPosts();
    let popularPosts = posts.sort((a, b) => b.views - a.views)[0];
    let recentPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
    let thinkingPosts = posts.filter(post => post.type === 'Thinking');
    let totalPosts = thinkingPosts.length;
    res.render('index', { posts: thinkingPosts, popularPosts, recentPosts, totalPosts });
});

router.get('/lifestyle', async (req, res) => {
    const posts = await getPosts();
    let popularPosts = posts.sort((a, b) => b.views - a.views)[0];
    let recentPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
    let lifestylePosts = posts.filter(post => post.type === 'Lifestyle');
    let totalPosts = lifestylePosts.length;
    res.render('index', { posts: lifestylePosts, popularPosts, recentPosts, totalPosts });
});

router.get('/design', async (req, res) => {
    const posts = await getPosts();
    let popularPosts = posts.sort((a, b) => b.views - a.views)[0];
    let recentPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
    let designPosts = posts.filter(post => post.type === 'Design');
    let totalPosts = designPosts.length;
    res.render('index', { posts: designPosts, popularPosts, recentPosts, totalPosts });
});

// Create post routes
router.get('/create-post', (req, res) => {
    res.render('createPost');
});

router.post('/create-post', upload.single('image'), async (req, res) => {
    try {
        // Debugging logs
        console.log('File:', req.file);
        console.log('Body:', req.body);

        const { title, type, description } = req.body;

        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }

        const imageBuffer = req.file.buffer;
        const imageBase64 = imageBuffer.toString('base64');
        const author = req.session.user.fullname;
        const username = req.session.user.username;

        const newPost = new Post({ title, type, author, description, imageBase64, username });
        await newPost.save();
        res.redirect('/posts');
    } catch (error) {
        console.error('Error in /create-post:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Profile routes
router.get('/profile', async (req, res) => {
    const posts = await Post.find({ username: req.session.user.username });
    const user = await User.findById(req.session.user._id);
    res.render('profile', { user, posts });
});

router.get('/profile/:username', async (req, res) => {
    const posts = await Post.find({ username: req.params.username });
    const user = await User.findOne({ username: req.params.username });
    res.render('other-profile', { user, posts });
});

module.exports = router;
