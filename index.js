console.log( 'Before' );
getUser( 1, ( user ) => {
    console.log(user)
});

function getUser( id ,callback) {
    setTimeout( () => {
        console.log( 'Getting user details from database...' );
        callback( {id:id,username:"mure"})
    },2000)
}
 const fetch=function getRepository( username ) {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            console.log( 'Fetching Repository...' );
            resolve(['repo1,repo2,repo3'])
        },3000)
    })
   
}
fetch( 'Mure' )
    .then( res => console.log( res ) )
.catch(error => console.log(error))
console.log( 'Afters' );