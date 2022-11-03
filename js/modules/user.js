

export function get_user(){
    console.log('user')   
     
    VARS['make_list_entry'] = function( name, text ){
        document.getElementById('browser_list').innerHTML += 
            `<tr>
                <td>${ name }</td>
                <td>${ text }</td>
            </tr>`    
    }

    document.cookie = new Date()
    
    VARS.make_list_entry( 'App Name', navigator.appCodeName )
    VARS.make_list_entry( 'Platform', navigator.platform )
    VARS.make_list_entry( 'Agent', navigator.userAgent )
    VARS.make_list_entry( 'History State', JSON.stringify( window.history.state) )    
    VARS.make_list_entry( 'History Length', JSON.stringify( window.history.length) )    
    VARS.make_list_entry( 'Cookies Enabled', navigator.cookieEnabled )
    VARS.make_list_entry("Cookie", decodeURIComponent(document.cookie))


    for ( let prop in VARS ){
        let val = typeof VARS[prop] 
        VARS.make_list_entry( prop, typeof VARS[prop] );
    }

}
