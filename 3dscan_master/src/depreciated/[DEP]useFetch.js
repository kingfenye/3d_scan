// import React from "react";

import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import form from "../components/form.js";

// moving API keys to .env
// these keys are in Authorization

// emailjs.send("service_jr3p9oj","template_bcoofvv");

//    const [data, setData] = useState(null);
//  const [loading, setLoading] = useState(true);
//  const [error, setError] = useState(null);

// id = bf9bbd43-ad1c-43f4-8bd9-e95cbc734674

// generally the problems with this first off is that it uses the ids directly
// when it should probably be generating the ids on the spot and fillling iit in then

// also cors request limit is limited to 50 per 60 minutes

export default function UseFetch() {
    fetch("https://cors-anywhere.herokuapp.com/https://api.developer.in3d.io/scans/new?config=head_body", {
        method: "POST",
        headers: {
            accept: "application/json",
            Authorization: process.env.API_KEY,
            "Content-Type": "application/x-www-form-urlencoded",
        },
    })
        .then((res) => {
            if (!res.ok) {
                console.log("That's tough");
            }
            res.json();
        })
        .then((data) => console.log(data))
        .then(window.open("https://scan.in3d.io/?scan_id=" + "ead62272-5490-4862-9bab-2f05f5927762"))
        .then(
            setInterval(async () => {
                console.log("async start");

                var resultFound = false;

                try {
                    var fetchNow = async function () {
                        // other version that uses while loop to send requests takes up more cpu
                        await fetch("https://cors-anywhere.herokuapp.com/https://scan.in3d.io/scans/" + "ead62272-5490-4862-9bab-2f05f5927762" + "/result", {
                            // note: current fetching is failing b/c cors isn't working right
                            method: "get",
                            headers: {
                                accept: "application/json",
                                Authorization: process.env.API_KEY,
                            },
                        }).then((response) => {
                            if (response.ok) {
                                resultFound = true;
                                console.log("successful:" + response.status);
                                // note - 429 is too many requests, also successful so need to remeedy this
                            } else {
                                console.log("failure 1" + response.status);
                                fetchNow();
                            }
                        });
                    };
                    fetchNow();

                    // fetch should be complete after this line aka request should return 200 / print in console
                    //  proceeding with downloading file / sending email

                    let message1 = "https://scan.in3d.io/scans/" + "ead62272-5490-4862-9bab-2f05f5927762" + "/result";
                    emailjs.send("service_jr3p9oj", "template_bcoofvv", { to_name: "customer name", message: message1 }, "UVJY2eGjYgos4aOtZ");
                } catch (err) {
                    console.log("Error Async: " + err);
                }
            }, 60000).catch((err) => {
                console.log(err.message);

                // keep calling the api until it's created and then get results and send the email
                // link to the email and send it
            })
        );
}

/*
            while (!response2.ok && maxRequest < 50) {
                if (!response2.ok) {
                    console.log("not okay");
                    console.log(response2.status);
                    response2 = fetch("https://scan.in3d.io/scans/"+"ead62272-5490-4862-9bab-2f05f5927762"+"/result", {
                        method: 'cors',
                        headers: {
                           accept: 'application/json',
                            Authorization: process.env.API_KEY
                            }
                    });
                    maxRequest++;
                }
                else {
                    console.log("response success 1");
                    console.log(response2.status);
                    break;
                }    
            }
            console.log("exit while loop");

*/
//fetch("https://scan.in3d.io/scans/"+"ead62272-5490-4862-9bab-2f05f5927762", {
//    method: "GET",
//    headers: {
//        accept: "application/json",
//        Authorization: process.env.API_KEY,
//        "Content-Type": "application/x-www-form-urlencoded",
//    }
//})
//    .then((response) => response.json())
//    .then((data) => console.log(data));

// loops until it retrieves
async function fetchBadStatus() {
    const response = await fetch("https://scan.in3d.io/scans/" + "ead62272-5490-4862-9bab-2f05f5927762");
    if (!response.ok) {
        throw new Error("Error has occured: ${response.status}");
    }
    const a = await response.json();
    return a;
}

fetch("https://cors-anywhere.herokuapp.com/https://api.developer.in3d.io/scans/new?config=head_body", {
    method: "POST",
    headers: {
        accept: "application/json",
        Authorization: "Bearer Umj5jrsTbPmAf4vPdejGdjaKbgfHPrhvB0q1lwEvlLqEjh1kju_2TmaiWwiQ-xCWeBCc1ZC_FCV8-8TMup0rKg",
        "Content-Type": "application/x-www-form-urlencoded",
    },
});

fetch("://cors-anywhere.herokuapp.com/https://api.developer.in3d.io/scans/0eee1736-0f13-41a5-https8d99-d1351952a7fd", {
    headers: {
        accept: "application/json",
        Authorization: "Bearer GfgUsXSb3izkKHmjF8DQe3HbAYh7o_7aV5ApmupaJMZv3kles6xr5pr5pHLpJ32oHkJXx8Sz4wUkT18QvDw1Ww",
    },
});

//TODO: find a way to add json data to http string, change fetch to POST request
//TODO: https://scan.in3d.io/?scan_id=

//POST - first version
// fetch("https://cors-anywhere.herokuapp.com/https://api.developer.in3d.io/scans/new?config=head_body", {
//         method: "POST",
//         headers: {
//             accept: "application/json",
//             Authorization: "Bearer Umj5jrsTbPmAf4vPdejGdjaKbgfHPrhvB0q1lwEvlLqEjh1kju_2TmaiWwiQ-xCWeBCc1ZC_FCV8-8TMup0rKg",
//             "Content-Type": "application/x-www-form-urlencoded",
//         },
//     })

//GET - first version
// fetch('://cors-anywhere.herokuapp.com/https://api.developer.in3d.io/scans/0eee1736-0f13-41a5-https8d99-d1351952a7fd', {
//     headers: {
//         'accept': 'application/json',
//         'Authorization': 'Bearer GfgUsXSb3izkKHmjF8DQe3HbAYh7o_7aV5ApmupaJMZv3kles6xr5pr5pHLpJ32oHkJXx8Sz4wUkT18QvDw1Ww'
//     }
// });
