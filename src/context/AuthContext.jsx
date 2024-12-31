// useEffect(() => {
//     const { data: authListener } = supabase.auth.onAuthStateChange(
//         async (event, session) => {
//         console.log("supabase event: ", event);
//         if (session == null) {
//             // navigate("/login", { replace: true });
//         } else {
//             const { user } = session;
//             console.log("data del usuario", session?.user.user_metadata);
//         }
//         }
//     );
//     return () => {
//         authListener.subscription;
//     };
// }, []);


// const singInWithGoogle = (e) => {
//     e.preventDefault();

//     console.log('Iniciando sesión con google')
//     supabase.auth.signInWithOAuth({
//         provider: 'google',
//     });
    

// }