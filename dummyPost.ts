const dummyPosts = [
  {
    id: 1,
    title: 'His mother had always taught him',
    body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    author: 'James Brown',
    category: ['history', 'american', 'crime'],
    isFeatured: true,
  },
  {
    id: 2,
    title: 'He was an expert but not in a discipline',
    body: 'He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.',
    author: 'James Brown',
    category: ['history', 'american', 'crime'],
    isFeatured: true,
  },
  {
    id: 3,
    title: 'Dave watched as the forest burned up on the hill.',
    body: "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
    author: 'James Brown',
    category: ['history', 'american', 'crime'],
    isFeatured: true,
  },
  {
    id: 4,
    title: 'All he wanted was a candy bar.',
    body: "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
    author: 'James Brown',
    category: ['history', 'american', 'crime'],
    isFeatured: true,
  },
  {
    id: 5,
    title: 'Hopes and dreams were dashed that day.',
    body: "Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.",
    author: 'James Brown',
    category: ['history', 'american', 'crime'],
    isFeatured: true,
  },
  {
    id: 6,
    title: "Dave wasn't exactly sure how he had ended up",
    body: "Dave wasn't exactly sure how he had ended up in this predicament. He ran through all the events that had lead to this current situation and it still didn't make sense. He wanted to spend some time to try and make sense of it all, but he had higher priorities at the moment. The first was how to get out of his current situation of being naked in a tree with snow falling all around and no way for him to get down.",
    author: 'James Brown',
    category: ['history', 'american', 'crime'],
    isFeatured: true,
  },
  {
    id: 7,
    title: 'This is important to remember.',
    body: "This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want.",
    author: "James Brown",
    category: ["history","american","crime"],
    isFeatured: true,
  },
];

 export function getFeaturedPosts() {
   return dummyPosts.filter((posts) => posts.isFeatured);
 }

 export function getAllPosts() {
   return dummyPosts;
 }

 export function getFilteredPosts(dateFilter: { year: any; month: any; }) {
   const { year, month } = dateFilter;

   let filteredPosts = dummyPosts.filter((posts: { date: Date }) => {
     const postDate = new Date(posts.date);
     return (
       postDate.getFullYear() === year && postDate.getMonth() === month - 1
     );
   });

   return filteredPosts;
 }

 export function getPostById(id: any) {
   return dummyPosts.find((post: { id: any; }) => post.id === id);
 }