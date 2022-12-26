module.exports = {
  title: `OneMoreBottlee.com`,
  description: `프론트엔드 개발자 OneMoreBottlee`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://onemorebottlee.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `한병주`,
    bio: {
      role: `프론트엔드 개발자`,
      description: ['데이터의 가치를 아는', '맡은 임무에 최선을 다하는', '한 잔의 여유를 즐기는'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/OneMoreBottlee`, 
      linkedIn: ``, 
      email: `hbj9503@naver.com`, 
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2022.06 ~ 2022.12',
        activity: '코드스테이츠 프론트엔드 부트캠프',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/OneMoreBottlee',
          demo: 'https://wiselife.click/',
        },
      },
      {
        date: '2021.05 ~ 2022.05',
        activity: '와인이야기 브랜드 마케팅',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          // github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          // demo: 'https://www.zoomkoding.com',
        },
      },
      {
        date: '2019.09 ~ 2020.01',
        activity: 'LAB543 데이터 분석',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          // github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          // demo: 'https://www.zoomkoding.com',
        },
      },      {
        date: '2018.01 ~ 2018.02',
        activity: '대홍기획 미디어 플래닝 인턴',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          // github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          // demo: 'https://www.zoomkoding.com',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '슬기로운 생활',
        description:
          '설명을 적어줍시다',
        // '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
        techStack: ['react', 'styled-components'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/codestates-seb/seb40_main_009/tree/BJ',
          demo: 'https://wiselife.click/',
        },
      },
    ],
  },
};