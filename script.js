let gifs = [
    "https://giphy.com/embed/LTcau7EnQLhHkxxG2u",
    "https://giphy.com/embed/JdBVId6GmYIpjMSi4J",
    "https://giphy.com/embed/UfWAg5cWDHC8w",
    "https://giphy.com/embed/pogOLSlfRz9pS",
    "https://giphy.com/embed/116mAogyorg84U",
  ];
  
  let messages = [
    "Happy 3rd Monthsary Babbyyy",
    "I LOVE YOU SO MUCHHH",
    "This is me when Im back home cuz I know ur tired na:",
    "Me when I finally see you again😘",
    "I miss you so bad na baby, I just want you to know that my love for you only grows deeper as days passes and Im always here by your side, I LOVE YOU FOREVER AND ALWAYS.",
  ];
  
  let index = 0;
  
  function nextGif() {
    index = (index + 1) % gifs.length;
    document.getElementById("gif-frame").src = gifs[index];
    document.getElementById("message").innerText = messages[index];
  }
  