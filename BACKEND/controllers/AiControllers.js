const  { GoogleGenAI } = require("@google/genai");
require("dotenv").config();
const ai = new GoogleGenAI({apiKey : process.env.GEMINI_API_KEY});

const InterviewResult = async (req, res) => {
    const report = req.body;
    const parsedreport = report.map((item) => {
        return JSON.parse(item);
    });


    // console.log(JSON.stringify(parsedreport));

    const systemPrompt = `You are an AI analyst specialized in behavioral and facial analysis during online interviews.I will provide you with an array of objects containing MediaPipe face detection data collected over 20 seconds.Each item has fields like boundingBox, keypoints, categories, eye positions, face orientation, and other facial metrics.

    Your task:
        1. Analyze the data and extract key metrics:
            - How many times the candidate moved out of camera frame.
            - Eye movements / disbalance(blinking, looking away, unusual patterns).
            - Face orientation stability.
            - Any other observable suspicious behavior.
        2. Summarize all metrics clearly.
        3. Give a ** final verdict **: "Candidate appears suspicious" or "Candidate appears normal".
        4. Keep it concise and explanatory in ** around 100 words only **.
        5. Format should be readable with metrics listed and final result at the end.
        6. And the full report in well structured format.
        7. Also Give marks of proctoring from 100 according to the analysis.

        Here is the data: 
        ${JSON.stringify(parsedreport)}`

    const response = await ai.models.generateContent({
        model: "models/gemini-2.5-flash-preview-05-20",
        contents: systemPrompt,
    });

    console.log(response.text);

    res.status(200).json(response.text);

}

module.exports = {InterviewResult};