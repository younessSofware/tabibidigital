import { Component, OnInit, Input } from '@angular/core';
import * as html2pdf from 'html2pdf.js';
@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {
  @Input() doctorName;
  @Input() patientName;
  @Input() etat;
  @Input() maladeName;
  date;
  constructor() { }

  ngOnInit(): void {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    this.date = year + "/" + month + "/" + day;
    console.log(1)
    this.downloadPdf(document.querySelector('#html'));
  }
  downloadPdf(content){
    const options = {
      filename : 'Rapport(' + new Date().toJSON().slice(0, 10) + ').pdf',
      image:        { type: 'jpeg', quality: 1 },
      html2canvas:  { scale: 2 },
      jsPDF : { orientation : 'portrait' },
      margin : 15,
    };
    //const child = content.childNodes[4].childNodes[3].childNodes[0];
    //content.childNodes[4].childNodes[3].removeChild(content.childNodes[4].childNodes[3].childNodes[0]);
    const wait = html2pdf().from(content).toImg().set(options).then(() => {
      //content.childNodes[4].childNodes[3].appendChild(child);
      wait.save();
    });
    console.log(content)
  }

}
