import app from './app'

// corrigir isso dps
const port = process.env.APP_PORT
app.listen(3333, () => console.log('server is running: ', process.env.APP_PORT))