import express from 'express';
import postsRouter from './routes/posts.router.js';
import usersRouter from './routes/users.router.js';
import commentsRouter from './routes/comments.router.js';
import likesRouter from './routes/likes.router.js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

// CORS 미들웨어 설정
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, PUT, POST, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next(); // 다음 미들웨어로 넘어가도록 호출합니다.
});

// 라우터 설정
app.use('/', [postsRouter, usersRouter, commentsRouter, likesRouter]);

app.listen(PORT, () => {
    console.log(`${PORT} 포트로 서버가 열렸어요!`);
});
