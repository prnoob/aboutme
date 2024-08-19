export default {
    title: 'SKills',
    data: [
        {
            category: 'Expert', // 专家
            logo: './misc/expert.svg',
            style: 'emerald',
            list: [],
        },
        {
            category: 'Proficient', // 精通
            logo: './misc/proficient.svg',
            style: 'violet',
            list: ['Python', 'Golang', 'C', 'SQL'],
        },
        {
            category: 'Skilled', // 熟练
            logo: './misc/skilled.svg',
            style: 'orange',
            list: ['Java', 'Bash', 'Linux', 'Git', 'Docker', 'Redis', 'go-micro', 'RESTful APIs', 'HTML', 'CSS'],
        },
        {
            category: 'Familiar', // 了解
            logo: './misc/familiar.svg',
            style: 'gray',
            list: ['React', 'kereas', 'JavaScript', 'Django', 'Grpc'],
        },
    ],
    status: 0,
}
