import { app } from './app'

app.listen(process.env.PORT || 3001, () => {
  console.log(`🦊 Elysia is running at http://localhost:3001`)
})
