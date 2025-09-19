import { FilesetResolver, FaceDetector } from "@mediapipe/tasks-vision"

const init = async () => {
    const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );


    const facedetector = await FaceDetector.createFromOptions(
        vision,
        {
            baseOptions: {
                modelAssetPath: "/models/blaze_face_short_range.tflite"
            },
            runningMode: "VIDEO",
            minDetectionConfidence: 0.5
        }
    );

    return facedetector;
}




let lastVideoTime = -1;


export const renderLoop = async (localVideoRef) => {
    const facedetector = await init();

    if (localVideoRef.current && localVideoRef.current.currentTime !== lastVideoTime) {
        const detections = facedetector.detectForVideo(localVideoRef.current, performance.now());
        // console.log("Detections:", JSON.stringify(detections, null, 2));
        lastVideoTime = localVideoRef.current.currentTime;

        return JSON.stringify(detections, null, 2);
    }
};



