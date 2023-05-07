import express from 'express'
import authRoutes from './routes/auth.js'
import usersRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import cookieParser from 'cookie-parser'

const app =express()

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/posts', postRoutes)

app.listen(4000, () => {
    console.log('Server started on port 4000');
})