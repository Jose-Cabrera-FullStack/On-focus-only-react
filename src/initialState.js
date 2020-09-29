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
  course: [],
};
