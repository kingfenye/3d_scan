import { EmailJSResponseStatus } from "@emailjs/browser";


var templateParams = {
    name: 'Sharon',
    notes: 'notes area'
};


class Email {

    constructor() {
        this.serviceId = '';
        this.templateId = '';

    };

    sendEmail() {
    // using service id and template id from sharonql
    // gmail personal service is 500 emails per day
    emailjs.send('service_taegtsi', 'template_kdco8yp', templateParams)
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
        });
    }

    sendFormEmail() {
        emailjs.sendForm('service_taegtsi', 'template_kdco8yp', '#myForm')
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
    

    }

}


    
