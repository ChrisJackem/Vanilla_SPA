/** ### Creates, removes and keeps track of listeners
 * #### ( Static Functions )
 * Events will be removed every page load by {@link PageLoader}
 * However, PageLoader is not required to use this. You can/should load **AddEventListener**
 * into your individual view modules to build them independently.
 * 
 * **You can use the others too, but AddEventListener was specifically made for view modules**
 * @module EventMaster
 */

/** This will keep track of all the listeners.
 */
export var listeners = []


/** Add an event listener and record it inside var listeners global
 * @param {Node} target The element we want to target
 * @param {string} event The event
 * @param {function} callback The function to run once event is fired
 * @param {boolean} [persist] Do we want to remove this later ?
 * @param {boolean} [useCapture] dispatch to other listeners ? ( For Links mostly )
 */
export function AddEventListener( target, event, callback, persist=false, useCapture=true ){
    if ( listeners.filter( obj => target===obj.target && obj.event===event ).length ){ return }        
    target.addEventListener( event, callback )
    listeners.push({ 'target': target, 'event': event, 'callback': callback, 'persist': persist })
}


/** Remove all event listeners with persist == false from var listeners global */
export function RemoveEventListeners(){
    for ( let obj of listeners ){
        if ( obj.persist ){ continue }
        obj.target.removeEventListener( obj.event, obj.callback )
        //console.log(`Removed ${obj.target} ${obj.event}`)
    }
}


/** Add styles ( with an animation ) to element.
 * Once the animation is done, remove style(s) and run resolve( element )
 * @param {Node} element The element to animate
 * @param {string} style_name The style(s) to apply, then remove after event. Separate styles with a space. 
 * @returns {Promise} The resolve arg will contain the element
 */
export function AnimatePromise( element, styles ){
    let split = styles.split(' ')
    split.forEach( style => element.classList.add( style ) )
    return new Promise( resolve => {
        element.addEventListener("animationend", 
        //AddEventListener(element, "animationend", 
            function animationEnd( event ) {
                split.forEach( style => element.classList.remove( style ) )                    
                element.removeEventListener( "animationend", animationEnd )
                resolve( element )
            })
    })
}


/** Put a listener on a node and build a Promise. 
 * When the event is fired, remove the listener
 * @param {Node} element The element we want to track
 * @param {Event} event The event to listen to
 * @returns {Promise} The resolve arg will contain the element
 */
export function ListenerPromise( element, event ){
    return new Promise( resolve => {
        element.addEventListener(event, 
            function eventFired(e) {
                element.removeEventListener(e, eventFired);
                resolve( element );
            });
    });
}