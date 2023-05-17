const express = require("express");
const axios = require('axios');
const router = express.Router();


router.get('/electronicSegment',async (req,res) =>{
    try {
        const url = 'https://cdp.eu5.gigya.com/api/businessunits/4_OhtEDcyQ_k5UJjEKDYPqYg/views/HGkGoISONUS8Cp1IL8WvuQ/customers';
        const params = {
            userKey: 'ACBFIOU4I2KU',
            secret: '546qXl2H/CVNnARd5RMI1yE5zZYqqdoL',
            query: 'SELECT * FROM profile WHERE having(segments, (segments.name = "Electronics VIP" ))',
            purposeIds: '[12345678]'
        };

        const response = await axios.get(url, { params });

        const responseData = response.data;
        const primaryEmails = responseData.profiles.map(profile => profile.attributes.primaryEmail);

        res.send(primaryEmails);
    } catch (error) {

        console.error(error);
        res.status(500).send('An error occurred when trying to connect CDP');
    }

});

router.get('/heavyBuyersSegment',async (req,res) =>{
    try {
        const url = 'https://cdp.eu5.gigya.com/api/businessunits/4_OhtEDcyQ_k5UJjEKDYPqYg/views/HGkGoISONUS8Cp1IL8WvuQ/customers';
        const params = {
            userKey: 'ACBFIOU4I2KU',
            secret: '546qXl2H/CVNnARd5RMI1yE5zZYqqdoL',
            query: 'SELECT * FROM profile WHERE having(segments, (segments.name = "Heavy buyer" ))',
            purposeIds: '[12345678]'
        };

        const response = await axios.get(url, { params });

        const responseData = response.data;
        const primaryEmails = responseData.profiles.map(profile => profile.attributes.primaryEmail);

        res.send(primaryEmails);
    } catch (error) {

        console.error(error);
        res.status(500).send('An error occurred when trying to connect CDP');
    }

});
















module.exports = router;