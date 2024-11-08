import { config } from 'dotenv';
config();

const AppConfig = {
    APP: {
      
        PORT: Number(process.env.APP_PORT) || 3012,
        UNSPLASH_ACCESS_KEY:process.env.UNSPLASH_ACCESS_KEY || ""
    },
}

export default AppConfig;