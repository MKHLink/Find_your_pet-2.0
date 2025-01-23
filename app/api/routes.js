export async function getToken(){
    try {
        const response = await fetch('https://api.petfinder.com/v2/oauth2/token', {
            method: 'POST',
            body: new URLSearchParams({
                'grant_type': 'client_credentials',
                'client_id': process.env.NEXT_PUBLIC_CLIENT_ID,
                'client_secret': process.env.NEXT_PUBLIC_CLIENT_SECRET,
            }),
        });
        const data = await response.json();
        return data.access_token;
    } catch (e) {
        console.error('Error getting token:', e.message);
        throw e;
    }
}

export async function getAnimals(location, page=1){
    try {
        const token = await getToken();
        const response = await fetch(`https://api.petfinder.com/v2/animals?location=${location}&page=${page}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        const data = await response.json();
        return data;
    } catch (e) {
        console.error('Error getting animals:', e.message);
        throw e;
    }
}
