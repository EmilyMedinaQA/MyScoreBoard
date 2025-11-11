let homeScore = 0
let homeScoreEl = document.querySelector(".home-score")
let guestScore = 0
let guestScoreEl = document.querySelector(".guest-score")
let resetScore = 0
let resetScoreEl = document.querySelector(".reset-score")

let homePlusOneBtn = document.querySelector(".homeplusonescore-btn")
homePlusOneBtn.addEventListener("click", function() {
    
    homeScore += 1
    homeScoreEl.textContent = homeScore
    console.log("Home score:", homeScore)
    })
    
let homePlusTwoBtn = document.querySelector(".homeplustwoscore-btn")
homePlusTwoBtn.addEventListener("click", function() {
    
    homeScore += 2
    homeScoreEl.textContent = homeScore
    console.log("Home score:", homeScore)
    })
    
let homePlusThreeBtn = document.querySelector(".homeplusthreescore-btn")
homePlusThreeBtn.addEventListener("click", function() {
    
    homeScore += 3
    homeScoreEl.textContent = homeScore
    console.log("Home score:", homeScore)
    })
    
let guestPlusOneBtn = document.querySelector(".guestplusonescore-btn")
guestPlusOneBtn.addEventListener("click", function() {
    
    guestScore += 1
    guestScoreEl.textContent = guestScore
    console.log("Guest score:", guestScore)
    })
    
let guestPlusTwoBtn = document.querySelector(".guestplustwoscore-btn")
guestPlusTwoBtn.addEventListener("click", function() {
    
    guestScore += 2
    guestScoreEl.textContent = guestScore
    console.log("Guest score:", guestScore)
    })
    
let guestPlusThreeBtn = document.querySelector(".guestplusthreescore-btn")
guestPlusThreeBtn.addEventListener("click", function() {
    
    guestScore += 3
    guestScoreEl.textContent = guestScore
    console.log("Guest score:", guestScore)
    })
    
let resetHomeScoreBtn = document.querySelector(".resethomescore-btn")
resetHomeScoreBtn.addEventListener("click", function() {
    
    homeScore = 0
    homeScoreEl.textContent = homeScore
    console.log("Home score reset")
})

let resetGuestScoreBtn = document.querySelector(".resetguestscore-btn")
resetGuestScoreBtn.addEventListener("click", function() {
    
    guestScore = 0
    guestScoreEl.textContent = guestScore
    console.log("Guest score reset")
})