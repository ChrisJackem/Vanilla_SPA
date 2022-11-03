

export function BuildTextDiv(){
    VARS['title_div'] = document.getElementById('test_title')
    VARS['title_div_word'] = VARS.title_div.innerHTML
    VARS['title_div_word_array'] = VARS.title_div.innerHTML.split('') 
    
    VARS['title_timeout'] = null
    VARS['title_interval'] = null
    
    // Clear letters
    VARS['clear_title'] = function(){
        clearInterval( VARS.title_interval )
        clearTimeout( VARS.title_timeout )
        VARS.title_div.innerHTML = ''
        VARS.title_div.removeAttribute('class')
    }

    // Clear setInterval and setTimeout
    VARS['clear_timers'] = function(){
        clearInterval( VARS.title_interval )
        clearTimeout( VARS.title_timeout )
    }

    // Grow (After)
    VARS['grow'] = function( wait=1200 ){        
        VARS.title_timeout = setTimeout( ()=>{
            VARS.title_div.innerHTML = VARS.title_div_word
            VARS.title_div.classList.add('grow')
        }, wait)  
    }

    // Squeeze Animation
    VARS['squeeze'] = function(){
        VARS.clear_title()   
        for ( let letter of VARS.title_div_word_array ){
            letter = letter == ' ' ? '&nbsp' : letter        
            VARS.title_div.innerHTML += `<div class='test_title_letter'>${letter}</div>`        
        }
        VARS.grow(2500)        
    }
    
    // Type Animation
    VARS['type'] = function(){
        VARS.clear_title()       
        VARS['type_letters'] = VARS.title_div_word.split('')
        VARS.title_interval = setInterval(()=>{
            if (VARS.type_letters.length){
                let letter = VARS.type_letters.shift()
                VARS.title_div.innerHTML += letter
            }else{
                VARS.grow(100)  
                clearInterval(VARS.title_interval)
            }
        }, 200)             
    } 

    // Squeeze Animation
    VARS['zipper'] = function(){
        VARS.clear_title()
        let up = true
        let duration = 1
        for ( let letter of VARS.title_div_word_array ){
            letter = letter == ' ' ? '&nbsp' : letter 
            duration += 0.2              
            VARS.title_div.innerHTML += 
                `<div class='${up ? 'test_title_fall_up' : 'test_title_fall_down'}'
                style='animation-duration:${duration}s'>
                    ${letter}
                </div>`
            up = !up
        }
        VARS.grow( (Math.floor(duration) * 1000) + 1000 )
    }
}