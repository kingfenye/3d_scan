//import React from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";

export default function NewFetch(props) {
    const options = {
        method: "GET",
        url: "http://localhost:8000/scan",
    };
    //Inital POST request

    const options2 = {
        method: "GET",
        url: "http://localhost:8000/check",
        params: { id: "5d8565c4-536c-4e5e-8c48-9e1241b222f2" },
    };
    //Checking GET request (for completion)
    //CHANGE ID back to empty

    const options3 = {
        method: "GET",
        url: "http://localhost:8000/return",
        params: { id: "" },
    };
    //Emailing the url link to GLB file to Myrina

    const options4 = {
        method: "GET",
        url: "http://localhost:8000/pubkey",
    };
    //Getting the EmailJS pubkey

    function checker9000(callback) {
        //use local var id to change the api call
        let time = null;
        try {
            let intervalID = setInterval(async () => {
                axios
                    .request(options2)
                    .then(function (response) {
                        console.log(response.data.eta_minutes);
                        time = response.data.eta_minutes;
                        if (response.data.status === "completed") {
                            console.log("scan complete!");
                            clearInterval(intervalID);
                            callback();
                        } else if (response.data.status === "expired") {
                            clearInterval(intervalID);
                        } else {
                            console.log(response.data.status);
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            }, Math.max(time * 60000, 10000));
        } catch (e) {
            console.log(e);
        }
    }

    axios
        .request(options) //Change BACK to options
        .then(function (response) {
            //fetching the data and opening the scan window
            // console.log(response.data);
            //Process(false, true);
            //changeStatus(); //MOVE to line 86 (in the checker9000 callback function)
            window.open("https://scan.in3d.io/?scan_id=" + response.data.id);
            options2.params.id = response.data.id;
            options3.params.id = response.data.id;
            // props(false);
            return response.data;
        })
        .then((results) => {
            //checking if scan is completed (interval changes based on "eta_minutes" JSON var)
            // console.log(results.id);
            //console.log(options2.params.id);
            //let eta = results.eta_minutes; [DEPRACATED]
            checker9000(function () {
                console.log("hello there, put the email.js stuff here!");
                axios
                    .request(options3)
                    .then(props(false))
                    .then(function (response) {
                        axios.request(options4).then(function (key) {
                            // console.log(response.data.url);
                            emailjs.send(
                                "service_9kipkhb",
                                "template_4xas1cg",
                                {
                                    link: response.data.url,
                                },
                                key.data
                            );
                        });
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            });
        })
        .catch(function (error) {
            console.error(error);
        });
}
