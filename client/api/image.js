export const read = async (count) => {
    try {
        //process.env.REACT_APP_API_URL
        const res = await fetch(
            `http://localhost:8081/images?count=${count}`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }

        )

        return await res.json();
    }
    catch (error) {
        throw new Error(error);
    }
}

