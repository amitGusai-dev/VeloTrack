/** @format */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            reactStrictMode: true,
            env: {
                API_KEY: "AIzaSyArZxY4aH-NidBaXWvCJ3j5hT9t8VzxYPw",
                AUTH_DOMAIN: "autotrack-e5adc.firebaseapp.com",
                PROJECT_ID: "autotrack-e5adc",
                STORAGE_BUCKET: "autotrack-e5adc.firebasestorage.app",
                MESSAGING_SENDER_ID: "814026979313",
                APP_ID: "1:814026979313:web:01a58bbaa807b08dcab650",
                MAP_BOX_ACCESS_TOKEN: "pk.eyJ1IjoiYW1pdGRvdGRldiIsImEiOiJjbWI0eWJjMTMxcmZoMmpzYTB2N3NjODM2In0.vyzUNJdqBAz-3v2qiWcg1w",
            },
            images: {
                domains: ["links.papareact.com"],
            },
        };
    }

    return {
        reactStrictMode: true,
        env: {
            API_KEY: "AIzaSyArZxY4aH-NidBaXWvCJ3j5hT9t8VzxYPw",
            AUTH_DOMAIN: "autotrack-e5adc.firebaseapp.com",
            PROJECT_ID: "autotrack-e5adc",
            STORAGE_BUCKET: "autotrack-e5adc.firebasestorage.app",
            MESSAGING_SENDER_ID: "814026979313",
            APP_ID: "1:814026979313:web:01a58bbaa807b08dcab650",
            MAP_BOX_ACCESS_TOKEN: "pk.eyJ1IjoiYW1pdGRvdGRldiIsImEiOiJjbWI0eWJjMTMxcmZoMmpzYTB2N3NjODM2In0.vyzUNJdqBAz-3v2qiWcg1w",
        },
        images: {
            domains: ["links.papareact.com"],
        },
    };
};
