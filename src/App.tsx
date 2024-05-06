import { Button } from '@mui/material';
import "./fonts/Montserrat-Bold-normal.js";
import "./fonts/Montserrat-Regular-normal.js";
import { PdfImages } from './constans/PdfImages.js';
import { PdfProvider } from './services/PdfProvider.js';
import { getLastMonth, getSpanishFormattedDate } from './services/DateProvider.js';

function App() {

    const generateInvoice = () => {
        
        const doc = new PdfProvider();
        const header = PdfImages.header;
        
        doc.SetMargin(60);
        doc.SetFont("Montserrat");
        doc.AddImage(header, "PNG", 0, 100, 0, 35);
        
        doc.AddHeader6("CUENTA DE COBRO", "white");
        doc.AddBlankLines(3);
        doc.AddLine(`Bogotá D.C. ${getSpanishFormattedDate()}`);
        doc.AddLine("Ensafe SAS");
        doc.AddLine("NIT. 900392150-2");
        doc.AddBlankLines(2);
        doc.AddHeader6("debe a:");
        doc.AddBlankLines(2);
        doc.AddLine("Tomás Parra Monroy (NEO ARTS)");
        doc.AddLine("NIT. 1.001.098.088-3");
        doc.AddBlankLines(2);
        doc.AddHeader6("Por el concepto de:");
        doc.AddTable(
            ["SERVICIO", "VALOR"],
            [["Manejo de redes sociales mes de " + getLastMonth(), "$250.000 COP"], ["Total a pagar", "$250.000 COP"]]
        );

        doc.SetTextColor(135, 135, 135);
        doc.AddLine('Declaro voluntariamente y bajo la gravedad de juramento, que pertenezco al');
        doc.AddLine('Drégimen simplificado, por lo tanto, de acuerdo al Art 42 del Decreto 3541 de 1983 y');
        doc.AddLine('DArt 511 del ET, no estoy obligado a expedir factura de venta');
        doc.SetTextColor(0, 0, 0);

        doc.AddBlankLines(4);
        doc.AddLine("Cordialmente");
        doc.AddImage(PdfImages.sign, "PNG", 40, 598, 120, 80);
        doc.AddBlankLines(6);
        doc.AddLine("Tomás Parra Monroy");
        doc.AddLine("CC 1.001.098.088");
        doc.DownloadPdf("invoice.pdf");
    };

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <Button variant="contained" color="success" onClick={generateInvoice}>
                Generar cuenta de cobro
            </Button>
        </div>
    )
}

export default App
