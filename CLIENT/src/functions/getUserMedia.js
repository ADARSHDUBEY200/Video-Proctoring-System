export const getUserMedia = async (localVideoRef) => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });

    if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
    };

    window.localStream = stream;
};

