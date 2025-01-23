export function callRapidAPI(userCode, dataCode) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_KEY,
            'X-RapidAPI-Host': 'redline-redline-zipcode.p.rapidapi.com',
        },
    };

    fetch(`https://redline-redline-zipcode.p.rapidapi.com/rest/distance.json/${userCode}/${dataCode}/mile`, options)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Request failed with status ${response.status}`);
            }
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error('Error:', error.message); 
            throw error;
        });
}

export async function getToken(){
    try {
        const response = await fetch('https://api.petfinder.com/v2/oauth2/token', {
            method: 'POST',
            body: new URLSearchParams({
                'grant_type': process.env.client_id,
                'client_id': process.env.client_id,
                'client_secret': process.env.client_secret,
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
