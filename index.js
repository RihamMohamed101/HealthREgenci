let btn = document.querySelectorAll('.btn');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', (event) => {
        const detailId = event.target.getAttribute('href').substring(1); // Get the href attribute of the clicked button and remove the leading '#'
        const detailElement = document.getElementById(detailId); 
       if (detailElement.classList.contains('d-none')) {
                detailElement.classList.remove('d-none');
            } else {
                detailElement.classList.add('d-none');
            }

    });
}



const posts = [
    { title: "How to Set SMART Goals for Weight Loss", category: "Category 1", content: "Losing weight is often on our list of personal goals, but how we set these goals can make the difference between a fleeting attempt and achieving lasting success. The key lies in setting SMART goals.  The SMART framework ensures your …"  },
    { title: "Intermittent Fasting Questions ", category: "Category 2", content: "Intermittent fasting is one of my favorite topics, and I’ve written many articles all about how intermittent fasting (IF) can help you lose weight, improve your health, etc. So it’s not surprising that I get A LOT of questions about …" },
    { title: "Fasting Benefits That Will Blow Your Mind", category: "Category 1", content: "Fasting benefits! It seems like everyone is talking about fasting these days. Intermittent fasting is the fasting that everyone is talking about. If you haven’t heard about intermittent fasting, it’s just a matter of time because it’s a rapidly growing …" },
  ];


   function displayPosts(category) {
    let filteredPosts;
    if (category === '') {
        filteredPosts = posts;
    } else {
        filteredPosts = posts.filter(post => post.category === category);
    }
    const blogPostsSection = document.getElementById('blogPosts');
    blogPostsSection.innerHTML = '';
    filteredPosts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('card', 'mb-3');
        postDiv.innerHTML = `
        <div class = "col-md-4 ">

         <img src="./image/6.jpeg" class="card-img mt-2" alt="..." style="width:100px">
         
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.content}</p>
        </div>

          

          </div>`
          ;
      blogPostsSection.appendChild(postDiv);
    });
  }
displayPosts('');
  document.getElementById('allPosts').addEventListener('click', () => displayPosts(''));
  document.getElementById('category1').addEventListener('click', () => displayPosts('Category 1'));
  document.getElementById('category2').addEventListener('click', () => displayPosts('Category 2'));