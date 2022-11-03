/** 
 * #### This is what initializes the {@link PageLoader} ( and loads the first page manually )
 * Put anything else you want do do in the main page here also
 * @module app
 * */

import { PageLoader } from "./framework/PageLoader.js"
import {AddEventListener, AnimatePromise} from './framework/EventMaster.js'

window.onload = () => {

    var footer = document.getElementById('footer')

    var page_loader = new PageLoader( 'home', 'content', {
        // Optional args - not needed
        loading_cover_id : 'loading_cover' // Cover to show while loading pages
        ,debug : false
    })    
    
/////////////////// Custom Events /////////////////////////    

    // This is how I am setting the active link
    AddEventListener( document.body, 'page_load', e =>{
        VARS.loaded_page_anchor.classList.add('active')
        console.log(VARS.loaded_page_anchor)

        // Hide footer - sometimes it's on top
       footer.classList.add('hidden')
    }, true)
    

    // Remove last active link
    AddEventListener( document.body, 'page_unload', e =>{
        VARS.loaded_page_anchor.classList.remove('active')

        console.log(VARS.loaded_page_anchor)
    }, true)

    // There is also an event after we are done animating
    AddEventListener( document.body, 'page_animated', e =>{

        // Show footer
        footer.classList.remove('hidden')
    }, true)

}
