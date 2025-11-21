import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const generateBusinessPlanPDF = async (): Promise<void> => {
  try {
    // Initialize jsPDF
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    // Get all sections from the main content
    const mainElement = document.querySelector("main");
    if (!mainElement) {
      throw new Error("Content not found");
    }

    const sections = mainElement.querySelectorAll("section");
    if (!sections.length) {
      throw new Error("No sections found");
    }

    let isFirstPage = true;

    // Process each section individually
    for (const section of Array.from(sections)) {
      // Create a clone to avoid modifying the original
      const clone = section.cloneNode(true) as HTMLElement;
      
      // Style the clone for better PDF rendering
      clone.style.width = "1200px";
      clone.style.padding = "40px";
      clone.style.background = "white";
      clone.style.position = "absolute";
      clone.style.left = "-9999px";
      clone.style.top = "0";
      
      document.body.appendChild(clone);

      // Generate canvas from the section
      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });

      // Remove the clone
      document.body.removeChild(clone);

      // Add new page if not first page
      if (!isFirstPage) {
        pdf.addPage();
      }
      isFirstPage = false;

      // Calculate dimensions to fit the page (landscape)
      const imgWidth = 297; // A4 width in mm (landscape)
      const pageHeight = 210; // A4 height in mm (landscape)
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      const imgData = canvas.toDataURL("image/png");
      
      // If content is taller than one page, scale it to fit
      if (imgHeight > pageHeight - 20) {
        const scaledHeight = pageHeight - 20;
        const scaledWidth = (canvas.width * scaledHeight) / canvas.height;
        pdf.addImage(imgData, "PNG", (imgWidth - scaledWidth) / 2, 10, scaledWidth, scaledHeight);
      } else {
        pdf.addImage(imgData, "PNG", 0, 10, imgWidth, imgHeight);
      }
    }

    // Save the PDF
    const fileName = `WHOOSH-Finance-Business-Plan-${new Date().getFullYear()}.pdf`;
    pdf.save(fileName);
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw new Error("Failed to generate PDF. Please try again.");
  }
};
