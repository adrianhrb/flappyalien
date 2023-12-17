document.addEventListener('DOMContentLoaded', () => {
    let block = document.getElementById('block')
    let hole = document.getElementById('hole')
    let jumping = 0
    let jumps = 0
    
    hole.addEventListener('animationiteration', () => {
        let random = -((Math.random() * 300) + 150);
        hole.style.top = random + 'px'
    })

    setInterval(function(){
        let charTop = parseInt(window.getComputedStyle(char).getPropertyValue('top'))
        if (jumping == 0){
            char.style.top = (charTop+3) + 'px'
        }
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
        let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue('top'))
        let cTop = -(500 - charTop)
        if ((charTop > 480) || ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holeTop) || (cTop>holeTop+130)))){
            alert(`Has perdido tras haber saltado ${jumps} veces :(`)
            if (confirm('Quieres volver a jugar?')){
                char.style.top = 100 + 'px'
                window.location.reload()
            } else{
                window.close()
            }
        }
    }, 10)

    function jump(){
        jumps++
        jumping = 1
        let jumpCount  = 0
        let jumpInterval = setInterval(function(){
            let charTop = parseInt(window.getComputedStyle(char).getPropertyValue('top'))
            if ((charTop>6) && (jumpCount < 15)){
                char.style.top = (charTop-5) + 'px'
            }

            if(jumpCount>20){
                clearInterval(jumpInterval)
                jumping = 0
                jumpCount = 0
            }
            jumpCount++
        }, 10)
    }

    document.addEventListener('keydown', (e) => {
        if (e.key == ' '){
            jump()
        }
    })
})
