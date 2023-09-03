async function fetchAndParseHTML(url) {
    const response = await fetch(url);
    const text = await response.text();
    const parser = new DOMParser();
    return parser.parseFromString(text, 'text/html');
  }
  
  // Function to get array of titles
  async function getTitles() {
    const url = 'https://http.cat';
    const document = await fetchAndParseHTML(url);
    
    const titles = Array.from(document.querySelectorAll('body > div > main > ul > li > div > a > div > p'))
      .map(el => el.textContent);
  
    return titles;
  }
  
  getTitles().then(titles => {
    console.log(titles); // Array of titles
  });