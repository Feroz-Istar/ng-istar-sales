import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../pojo/product';
import { Assesst } from '../pojo/assesst';
import { Signal } from '../pojo/signal';


@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {
  @Input() product: Product;
  image;
  filename;
  signal;
  selectedSignal;
  color = "#000";
  constructor(public activeModal: NgbActiveModal) { }


  ngOnInit() {
    if (this.product) {

    }
    else {
      this.product = new Product();
      this.product.assests = new Array<Assesst>();
      this.product.signals = new Array<Signal>();
      this.product.assests.push(new Assesst());
      this.product.signals.push(new Signal());
    }
  }
  step2: any = {
    showNext: true,
    showPrev: true
  };

  step3: any = {
    showSecret: false
  };


  isCompleted: boolean = false;

  onStep1Next(event) {
    console.log('Step1 - Next');
  }

  onStep2Next(event) {
    console.log('Step2 - Next');
  }

  onStep3Next(event) {
    console.log('Step3 - Next');
  }

  onComplete(event) {
    this.isCompleted = true;
  }

  onStepChanged(step) {
    console.log('Changed to ' + step.title);
  }

  getfile(event) {
    console.log(event);
    console.log(event.target.files[0]);
    // this.image = event.target.files[0];
    var reader = new FileReader();

    reader.onload = (event: any) => {
      this.image = event.target.result;
    }

    reader.readAsDataURL(event.target.files[0]);
  }

  getfilename(event, assesst) {
    console.log(event.target.files[0].name);
    this.filename = event.target.files[0].name;
    assesst.assestName = event.target.files[0].name;
  }

  addAsset() {
    this.product.assests.push(new Assesst());
  }

  deleteAsset(assesst) {
    this.product.assests = this.product.assests.filter(
      obj => obj.assestName !== assesst.assestName);
  }

  getSignalType(selectedSignal, signal) {
    console.log(selectedSignal);
  }

  getSignalScript(event, signal) {
    console.log(event);
  }

  addSignal() {
    this.product.signals.push(new Signal());
  }

  deleteSignal(signal) {
    this.product.signals = this.product.signals.filter(
      obj => obj.script !== signal.script);
  }

  setSignalColor(signal, color) {
    console.log(color);
    signal.color = color;
  }

}
