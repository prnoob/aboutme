export default {
    data: {
        basicInfo: {
            name: 'Ziang(David) Zhou',
            career: 'Full-Stack Developer',
            avatar: './user/avatar.jpg', // 头像
            snapshot: './user/MelbourneModifiedSelfie.jpg', // 生活照
            bio: 'A programmer by trade, \n a photographer by passion.',
        },
        contactInfo: {
            email: 'zianzhou@student.unimelb.edu.au',
            website: 'https://github.com/prnoob',
            phone: '0480765225',
            countryCode: '61',
            city: 'Melbourne',
        },
        socials: [
            {
                social: 'github',
                account: '@prnoob',
                link: 'https://github.com/prnoob',
            },
            {
                social: 'wechat',
                account: '@dived42',
                qrcode: './user/WXQRcode.png',
            },
            {
                social: 'linkedin',
                account: '@ziang',
                link: 'https://www.linkedin.com/in/david-z-chow/',
            },
            {
                social: 'xiaohongshu',
                account: '@dived42',
                link: 'https://www.xiaohongshu.com/user/profile/61dec119000000001000f99b',
            },
            {
                social: 'instagram',
                account: '@dived_42',
                link: 'https://www.instagram.com/dived_42/',
            },
        ],
        languages: [
            { language: 'Chinese', level: 'native' },
            { language: 'English', level: 'Fluent' },
            { language: 'German', level: 'Beginner' },
        ],
        hobbies: [
            { hobby: 'Gaming', type: 'game' },
            { hobby: 'Travelling', type: 'travel' },
            { hobby: 'Photography', type: 'photography' },
            { hobby: 'Badminton', type: 'badminton' },
            { hobby: 'Coding', type: 'coding' },
            { hobby: 'Ping-Pong', type: 'Ping-Pong' },
        ],
    },
    status: 0,
}
