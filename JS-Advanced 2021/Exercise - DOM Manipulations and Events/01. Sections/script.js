function create(words) {
   const content = document.getElementById('content');
   for(let word of words){
      const div = document.createElement('div');
      const para = document.createElement('p');
      para.textContent = word;
      para.style.display = 'none';
      div.appendChild(para);
      div.addEventListener('click', onClick);

      content.appendChild(div);
      
   }

   function onClick(e){
      const el = e.target.firstChild;
      el.style.display = 'block';
      console.log(el);
   }
}
