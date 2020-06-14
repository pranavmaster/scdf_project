const fs = require("fs");
const VisualRecognitionV3 = require("ibm-watson/visual-recognition/v3");
const { IamAuthenticator } = require("ibm-watson/auth");

const visualRecognition = new VisualRecognitionV3({
	version: "2018-03-19",
	authenticator: new IamAuthenticator({
		apikey: "Ws7tzOxvgCANwQ7OaeKQeKqSv842dWKc7697NR_UbkHK",
	}),
	url:
		"https://api.us-south.visual-recognition.watson.cloud.ibm.com/instances/6db02e30-83af-40ba-a7f1-8874612e997e",
});

const classifyParams = {
	images_file: fs.createReadStream("./fruitbowl.jpg"),
	classifier_ids: ["food"],
};

visualRecognition
	.classify(classifyParams)
	.then((response) => {
		const classifiedImages = response.result;
		console.log(JSON.stringify(classifiedImages, null, 2));
	})
	.catch((err) => {
		console.log("error:", err);
	});
