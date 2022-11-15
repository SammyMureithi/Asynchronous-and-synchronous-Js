const customer = {
    id: 1,
    name: "Mure",
    isGold: true,
    email:"email"
}
const getCustomer= ( id ) =>{
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            console.log('Getting Customer....')
            resolve( {
                id: 1,
                name: "Mure",
                isGold: true,
                email:"email"
            } );
        },2000)   
    })
}
const getMovies = ( isGolden, movies )=>{
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            console.log('Getting Movies ....')
            {isGolden ? resolve( movies ): reject(new Error('Something went wrong'))}
        }, 3000);
    })
}
const sendEmails = ( email, movies ) => {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            console.log('Email sent....')
        },4000)
    })
}
async function handleActivity() {
    const res = await getCustomer( 1 );
    console.log( res );
    const getMovie = await getMovies( res.isGold, ['movie1', 'movie2', 'movie3'] );
    console.log( getMovie );
    const sendEmail = await sendEmails( res.email, getMovie );
    
}
handleActivity();
