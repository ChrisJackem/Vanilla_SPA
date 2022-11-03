
import { AddEventListener, RemoveEventListeners } from '../framework/EventMaster.js'
import * as text_animations from './text-animations.js'
import * as user_stats from './user.js'

export function init(){

    // Setup user stats
    user_stats.get_user()

    // Setup animation div
    text_animations.BuildTextDiv()    
    
    // Button Events
    AddEventListener( document.getElementById('squeeze'), 'click', e =>{
        VARS.squeeze()
    })    
    AddEventListener( document.getElementById('type'), 'click', e =>{
        VARS.type()
    })
    AddEventListener( document.getElementById('zipper'), 'click', e =>{
        VARS.zipper()
    })
    /* AddEventListener( document.getElementById('remove_listeners'), 'click', e =>{
        RemoveEventListeners()
    }) */
    

    // Initial Animation
    VARS.squeeze()    
}

export function destroy(){
    VARS.clear_title()
    VARS.clear_timers()
    VARS.title_div.innerHTML = "Bye Bye"
}