export const userMediaRecorder = (setRecordedUrl) => {
        const recordedChunks = [];
        const options = { mimeType: "video/webm; codecs=vp9" };
        const mediaRecorder = new MediaRecorder(window.localStream, options);
        var handleDataAvialable = (event) => {

            if (event.data.size > 0) {
                recordedChunks.push(event.data);
            };
        };
        mediaRecorder.ondataavailable = handleDataAvialable;
        mediaRecorder.start();



        setTimeout(() => {

            console.log("stopping");
            mediaRecorder.stop();
            console.log(recordedChunks);

        }, 20000);

        mediaRecorder.onstop = () => {
            const blob = new Blob(recordedChunks, { type: "video/webm" });
            console.log("Final recording blob:", blob);
            setRecordedUrl(URL.createObjectURL(blob));
            const a = document.createElement("a");
            a.style.display = "block";
            a.style.margin = "10px"
            a.style.textDecoration = "none";
            a.style.cursor = "pointer";
            a.style.color = "black";
            a.style.fontWeight = "bold";
            a.style.fontSize = "30px";
            a.style.textDecoration = "underline"
            a.href = URL.createObjectURL(blob);
            a.download = "recording.webm";
            a.textContent = "Download Recorded Video";
            const mainElement = document.querySelector(".main-page");
            mainElement.appendChild(a);
            
        }

    }