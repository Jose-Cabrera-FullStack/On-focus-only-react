import { loadState } from "./Utils/localStorage";

const persistedState = loadState();

export default {
  shoppingcar: persistedState ? persistedState.shoppingcar : [],
  URLvideos: [],
  user: persistedState ? persistedState.user : {},
  total: 0,
  myCourses: [
    {
      course_id: 1,
      title: "Aprende a ser mejor lider",
      category: "diseño-web",
      name: "se-lider",
      featured_image: "http://dummyimage.com/222x221.bmp/cc0000/ffffff",
      status: true,
      teacher: {
        name: "Luis Alvarez",
        profesion: "Profesor",
        photo: "http://dummyimage.com/222x221.bmp/cc0000/ffffff",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        linkedin: "http://linkedin.com",
        facebook: "http://facebook.com",
        twitter: "http://twitter.com",
        youtube: "http://youtube.com",
      },
      students: 5,
      duration: 5400,
      description:
        "pellentesque at nulla suspendisse potenti cras in purus eu magna",
      module: [
        {
          module_id: 1,
          name: "Module 1",
          text: "texto 1",
          status: true,
          videos: [
            {
              video_id: 2,
              name: "video2",
              url: "54561111",
              status: true,
            },
            {
              video_id: 3,
              name: "video3",
              url: "7772458",
              status: true,
            },
            {
              video_id: 4,
              name: "video4",
              url: "5544234",
              status: true,
            },
            {
              video_id: 5,
              name: "video5",
              url: "437219229",
              status: true,
            },
          ],
        },
        {
          module_id: 2,
          text: "texto 2",
          category: "diseño-web",
          name: "Module 2",
          status: true,
          videos: [
            {
              video_id: 2,
              name: "video2",
              url: "84351224",
              status: true,
            },
            {
              video_id: 3,
              name: "video3",
              url: "146869349",
              status: true,
            },
          ],
        },
        {
          module_id: 3,
          text: "texto 3",
          category: "diseño-web",
          name: "Module 3",
          status: true,
          videos: [
            {
              video_id: 3,
              name: "video3",
              url: "5072667",
              status: true,
            },
          ],
        },
        {
          module_id: 4,
          text: "texto 4",
          category: "diseño-web",
          name: "Module 4",
          status: true,
          videos: [
            {
              video_id: 4,
              name: "video4",
              url: "327561148",
              status: true,
            },
          ],
        },
      ],
    },
    {
      course_id: 2,
      title: "Curso básico de Marketing",
      category: "marketing",
      featured_image: "http://dummyimage.com/115x249.bmp/dddddd/000000",
      name: "marketing-basico",
      status: false,
      teacher: {
        name: "José Silvarez",
        photo: "http://dummyimage.com/222x221.bmp/cc0000/ffffff",
        profesion: "Profesor",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        linkedin: "http://linkedin.com",
        facebook: "http://facebook.com",
        twitter: "http://twitter.com",
        youtube: "http://youtube.com",
      },
      students: 57,
      duration: 5400,
      featured_image: "http://dummyimage.com/222x221.bmp/cc0000/ffffff",
      description:
        "pellentesque at nulla suspendisse potenti cras in purus eu magna",
      module: [
        {
          module_id: 1,
          text: "texto 4",
          category: "marketing",
          name: "Module 1",
          status: false,
          videos: [
            {
              video_id: 1,
              name: "video4",
              url: "375203887",
              status: true,
            },
            {
              video_id: 2,
              name: "video4",
              url: "437808118",
              status: false,
            },
            {
              video_id: 3,
              name: "video4",
              url: "146331395",
              status: false,
            },
          ],
        },
        {
          module_id: 2,
          text: "texto 2",
          category: "marketing",
          name: "Module 2",
          status: false,
          videos: [
            {
              video_id: 1,
              name: "video1",
              url: "84351224",
              status: false,
            },
            {
              video_id: 2,
              name: "video2",
              url: "94957294",
              status: false,
            },
          ],
        },
        {
          module_id: 3,
          text: "texto 2",
          category: "marketing",
          name: "Module 3",
          status: false,
          videos: [
            {
              video_id: 1,
              name: "video1",
              url: "437219229",
              status: false,
            },
            {
              video_id: 2,
              name: "video2",
              url: "429262440",
              status: false,
            },
          ],
        },
        {
          module_id: 4,
          text: "texto 2",
          category: "marketing",
          name: "Module 4",
          status: false,
          videos: [
            {
              video_id: 1,
              name: "video1",
              url: "103996183",
              status: false,
            },
            {
              video_id: 2,
              name: "video2",
              url: "148198462",
              status: false,
            },
          ],
        },
      ],
    },
  ],
  course: [
    {
      course_id: 1,
      teacher: "Luis Alvarez",
      students: 5,
      duration: 540,
      status: "false",
      featured_image: "http://dummyimage.com/222x221.bmp/cc0000/ffffff",
      module: 5,
      description:
        "pellentesque at nulla suspendisse potenti cras in purus eu magna",
      price: 700,
      name: "curabitur at ipsum",
      category: "diseño-web",
      creation_date: "10/4/2019",
      video_intro: "375203887",
      entity_status: "published",
      discount: 30,
    },
    {
      course_id: 2,
      teacher: "Carlos Alvarez",
      price: 930,
      students: 6,
      category: "marketing",
      name: "duis bibendum felis sed",
      description:
        "non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla",
      creation_date: "5/6/2020",
      video_intro: "201106279",
      featured_image: "http://dummyimage.com/231x160.bmp/dddddd/000000",
      status: "true",
      module: 15,
      entity_status: "unpublished",
      duration: 6000,
      discount: 35,
    },
    {
      course_id: 3,
      teacher: "David Alvarez",
      price: 530,
      students: 7,
      category: "matematicas",
      name: "tellus in sagittis",
      description: "felis eu sapien cursus vestibulum proin eu mi nulla ac",
      creation_date: "11/10/2019",
      module: 20,
      video_intro: "27745982",
      featured_image: "http://dummyimage.com/155x194.jpg/ff4444/ffffff",
      status: "true",
      duration: 800,
      entity_status: "published",
      discount: 25,
    },
    {
      course_id: 4,
      teacher: "Jose Alvarez",
      price: 600,
      students: 20,
      module: 50,
      category: "arte",
      name: "libero convallis ",
      description: "pede justo eu massa donec dapibus duis at velit eu",
      creation_date: "11/27/2019",
      video_intro: "84351224",
      duration: 900,
      featured_image: "http://dummyimage.com/174x193.png/ff4444/ffffff",
      status: "false",
      entity_status: "unpublished",
      discount: 20,
    },
    {
      course_id: 5,
      teacher: "Jose Alvarez",
      price: 1500,
      students: 23,
      module: 9,
      duration: 400,
      category: "ciecia",
      name: "maecenas tincidunt lacus",
      description:
        "mi pede malesuada in imperdiet et commodo vulputate justo in",
      creation_date: "12/13/2019",
      video_intro: "117779833",
      featured_image: "http://dummyimage.com/115x249.bmp/dddddd/000000",
      status: "true",
      entity_status: "unpublished",
      discount: 15,
    },
    {
      course_id: 6,
      teacher: "Jose Alvarez",
      price: 6840,
      duration: 300,
      module: 14,
      students: 280,
      category: "sociologia",
      name: "tempus sit amet sem",
      description: "est phasellus sit amet erat nulla tempus vivamus in felis",
      creation_date: "7/21/2019",
      video_intro: "113185471",
      featured_image: "http://dummyimage.com/220x250.bmp/5fa2dd/ffffff",
      status: "true",
      entity_status: "published",
      discount: 10,
    },
    {
      course_id: 7,
      teacher: "Jose Alvarez",
      price: 1000,
      duration: 200,
      students: 52,
      module: 27,
      category: "politica",
      name: "sit amet justo",
      description:
        "ut nunc vestibulum ante ipsum primis in faucibus orci luctus",
      creation_date: "5/28/2020",
      video_intro: "62467223",
      featured_image: "http://dummyimage.com/141x196.png/dddddd/000000",
      status: "false",
      entity_status: "unpublished",
      discount: 50,
    },
    {
      course_id: 8,
      teacher: "Jose Alvarez",
      price: 980,
      students: 90,
      duration: 850,
      module: 23,
      category: "quimica",
      name: "semper rutrum nulla",
      description:
        "suspendisse potenti in eleifend quam a odio in hac habitasse",
      creation_date: "1/19/2020",
      video_intro: "19527537",
      featured_image: "http://dummyimage.com/161x225.jpg/dddddd/000000",
      status: "false",
      entity_status: "unpublished",
      discount: 75,
    },
    {
      course_id: 9,
      module: 7,
      teacher: "Jose Alvarez",
      price: 841,
      students: 100,
      duration: 1000,
      category: "dibujo",
      name: "neque vestibulum eget",
      description:
        "dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien",
      creation_date: "9/10/2019",
      video_intro: "62512557",
      featured_image: "http://dummyimage.com/199x225.png/cc0000/ffffff",
      status: "true",
      entity_status: "unpublished",
      discount: 60,
    },
    {
      course_id: 10,
      teacher: "Jose Alvarez",
      price: 3648,
      students: 55,
      module: 12,
      duration: 880,
      category: "psicologia",
      name: "mauris vulputate",
      description:
        "eleifend pede libero quis orci nullam molestie nibh in lectus",
      creation_date: "4/2/2020",
      video_intro: "38052137",
      featured_image: "http://dummyimage.com/104x158.jpg/cc0000/ffffff",
      status: "false",
      entity_status: "published",
      discount: 55,
    },
    {
      course_id: 11,
      teacher: "Jose Alvarez",
      price: 4832,
      duration: 600,
      students: 50,
      module: 3,
      category: "cosmetica",
      name: "id ornare imperdiet sapien",
      description:
        "eget orci vehicula condimentum curabitur in libero ut massa volutpat",
      creation_date: "12/11/2019",
      video_intro: "24462920",
      featured_image: "http://dummyimage.com/158x118.jpg/5fa2dd/ffffff",
      status: "false",
      entity_status: "published",
      discount: 50,
    },
  ],
};
