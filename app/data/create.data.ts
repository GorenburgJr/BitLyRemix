import { prisma } from "./database.server";

    const year = 2025;
    const month = 4;
    
    async function Stats() {
        for(let i = 0; i < 30; i++){
            for (let day = 1; day <= 30; day++) {
      // Случайное время
            const hour = Math.floor(Math.random() * 24);
            const minute = Math.floor(Math.random() * 60);
            const second = Math.floor(Math.random() * 60);
    
            const date = new Date(year, month, day, hour, minute, second);
                const stats = {
                        platform: 'macOS',
                        mobileDevice: false,
                        browser: 'Chrome',
                        location: '',
                        referrer: ''
                }
                const { platform, mobileDevice, browser, location, referrer} = stats
                await prisma.stats.create({data: {platform, mobileDevice, browser, location, date, referrer, urlId: 3}})
        }
        }
    }