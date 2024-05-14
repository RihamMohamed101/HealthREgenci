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
    { title: "Health Tips for [Region's Name] Residents ", category: "Category 1", content: "A brief overview of health considerations unique to the region."  },
    { title: "Health ", category: "Category 2", content: "Encouragement for small, positive changes toward a healthier lifestyle." },
    { title: "Health Tips", category: "Category 1", content: "Advice for promoting health and wellness within families." },
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