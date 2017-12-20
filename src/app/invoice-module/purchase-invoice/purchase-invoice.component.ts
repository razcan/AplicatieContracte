import { Component } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { OnInit,ViewChild,AfterViewInit,ElementRef,Renderer2,OnDestroy,OnChanges,ChangeDetectionStrategy,Input } from '@angular/core';
import { BootstrapSwitchModule } from 'angular2-bootstrap-switch';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-purchase-invoice',
  templateUrl: './purchase-invoice.component.html',
  styleUrls: ['./purchase-invoice.component.css']
})
export class PurchaseInvoiceComponent implements OnInit,AfterViewInit {
  // colorTheme = 'theme-dark-blue';
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  colorTheme = 'theme-green';

Left;
Right;
  itemObjectsLeft: any[] = [
    { id: 1, name: 'Suprafata', tip: '1', value: 'Text' },
    { id: 2, name: 'Agent', tip: '1', value: 'Text'   },
    { id: 3, name: 'DataEfectivaPlata', tip: '2', value: 'Date'  },
    { id: 4, name: 'ValoareEfectivaPlata', tip: '3', value: 'Numeric'  }
  ];
 
  itemObjectsRight: any[] = [];

  TextType : false;
  DateType: false;
  NumericType: false ;
  DataRezult: false;



  // myFunction() {
  //   var node = document.createElement("LI");
  //   var textnode = document.createTextNode("Water");
  //   node.appendChild(textnode);
  //   document.getElementById("myList").appendChild(node);
  //   var x = document.createElement("INPUT");
  //   x.setAttribute("type", "text");
  //   document.getElementById("myList").appendChild(x);
  // }
  @ViewChild('someInput') someInput: ElementRef;

  ngAfterViewInit() {
    // this.someInput.nativeElement.value = "Anchovies! 🍕🍕";
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Hello sasjasljdlkjaslkdjasljdlaksjdlkajlkdjalksjdlkasjlkdjalkjdlaskjdlkasjdslakjdkljaskljlkjsajdk world!');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.el.nativeElement, div);
  }

  ngOnInit() {
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });


  }

  bsConfig: Partial<BsDatepickerConfig>;
 
  }

