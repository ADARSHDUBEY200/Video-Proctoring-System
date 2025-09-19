import { jsPDF } from "jspdf";

// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF();

export const makePdf = (data) => {

    const { geminiReport, mediaPipeReport } = data;
    doc.setFontSize(14);
    doc.text("AI Behavioral Analysis Report", 10, 10);
    doc.setFontSize(12);
    doc.text(geminiReport, 10, 20, { maxWidth: 180 });


    doc.addPage();


    doc.setFontSize(14);
    doc.text("Raw MediaPipe Detection Data Of 1st Second", 10, 10);
    doc.setFontSize(10);
    // const mediapipeText = JSON.stringify(mediaPipeReport, null, 2); // formatted JSON
    doc.text(mediaPipeReport, 10, 20, { maxWidth: 180 });


    const pdfUrl =  doc.output("bloburl");

    const a = document.createElement("a");
    a.style.display = "block";
    a.style.margin = "10px"
    a.style.textDecoration = "none";
    a.style.cursor = "pointer";
    a.style.color = "black";
    a.style.fontWeight = "bold";
    a.style.fontSize = "30px";
    a.style.textDecoration = "underline"
    a.href = pdfUrl;
    a.download = "Sample Proctoring report.pdf";
    a.textContent = "Download Interview Proctoring Result";
    const mainElement = document.querySelector(".main-page");
    mainElement.appendChild(a);

} 