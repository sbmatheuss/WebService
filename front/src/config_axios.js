import axios from 'axios'

// Cria um instance Axios com a URL base do Web Service a ser acessado pelo app
export const inAxios = axios.create({baseURL: 'http://localhost:3001'})
