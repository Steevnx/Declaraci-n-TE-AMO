 const question = document.querySelector(".question");
 const gif = document.querySelector(".gif")
 const noBtn = document.querySelector(".si-btn")
 const siBtn = document.querySelector(".no-btn")

 siBtn.addEventListener("click", ()=> {
    question.innerHTML = "Yayy TE AMO MI AMOR❤";
    gif.src="https://media.tenor.com/kpNv8nmAmWsAAAAi/tontonfriends-chubby.gif"
})

noBtn.addEventListener("mouseover", ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px"
})