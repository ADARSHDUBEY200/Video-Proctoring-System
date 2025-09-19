import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from "react-toastify"
import { getUserMedia } from '../functions/getUserMedia';
import { userMediaRecorder } from '../functions/userMediaRecorder';
import { renderLoop } from '../functions/faceDetector';
import "../styles/InterviewPage.css"
import axios from "axios";
import { makePdf } from '../functions/pdfCreator.js';

const InterviewPage = () => {
    let localVideoRef = useRef();
    const [recordedUrl, setRecordedUrl] = useState(null);
    

    useEffect(() => {
        const functionCalling = async () => {
            await callingGetUserMedia();
            await callingUserMediaRecorder();
        };

        functionCalling();

    }, []);

    const callingFaceDetector = () => {
        const interviewResult = [];
        const id = setInterval(async () => {
            const result = await renderLoop(localVideoRef)
            interviewResult.push(result);
        }, 1000);

        setTimeout(async () => {
            console.log("Now I am going to clear the interval");
            clearInterval(id);
            console.log(interviewResult[0]);

            const report = await axios.post(`${import.meta.env.VITE_API_URL}/ai/result`, interviewResult);

            console.log(report);

            const data = {
                geminiReport: report.data,
                mediaPipeReport: interviewResult[0]
            }

            makePdf(data);

            await axios.post(`${import.meta.env.VITE_API_URL}/api/log`, { logs: report.data });

            

        }, 20000);


    };

    const callingGetUserMedia = async () => {
        await getUserMedia(localVideoRef);
        toast("Media Recording started !");
        callingFaceDetector();

    };

    const callingUserMediaRecorder = async () => {
        await userMediaRecorder(setRecordedUrl);
    };


    return (
        <div className='main-page'>
            <div style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>
                InterView Page
            </div>

            <div className='Video'>

                <video ref={localVideoRef} autoPlay width={400} height={400}></video>
            </div>


            {/* <div className='Video'>
                <h3>Recorded Video:</h3>
                <video src={recordedUrl} controls width={400} height={400}></video>

            </div> */}

            


            <ToastContainer />
        </div>

    )
}

export default InterviewPage