import Course from '../models/Course.js';

const createCourse = async data => {
  const course = new Course({
    name: data.name,
    author: data.author,
    tags: data.tags,
    message: data.message,
    isPublished: data.isPublished,
  });

  await course.save();
};

const searchCourse = async () => {
  const search = await Course.find({ id: '/^#/' });
  for (let i = 0; i < search.length; i++) {
   [search[i].message]
  }

  const func = () => {
    const tweets =  search.map(item => {
      return item.message
    })
    let obj = {};
    
    tweets.forEach(tweet => {
      let twit = tweet.split("#");
      
      for(let i = 1; i < twit.length; i++) {
        let item = twit[i].split(" ")[0];
       
        if(obj[item]) {
          obj[item]++
        } else obj[item] = 1
      }
    })
    
    console.log(obj)
  };
  
  func();
};

searchCourse();

const course = createCourse;

const getCourse = (req, res) => {
  res.send(course(req.body));
};

export { getCourse as course };
