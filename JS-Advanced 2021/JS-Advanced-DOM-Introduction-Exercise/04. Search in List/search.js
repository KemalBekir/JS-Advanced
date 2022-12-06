function search() {
   const towns = Array.from(document.querySelectorAll('ul li'));
   let input = document.getElementById('searchText');
   let match = 0;
   const result = document.getElementById('result');

   for (let i = 0; i < towns.length; i++) {
      if (towns[i].textContent.includes(input.value)) {
         towns[i].style.fontWeight = 'bold';
         towns[i].style.textDecoration = 'underline';
         match++;
      } else {
         towns[i].style.fontWeight = 'normal';
         towns[i].style.textDecoration = '';
      }
      
      result.textContent = `${match} matches found`;
   }
   input.value = '';
}