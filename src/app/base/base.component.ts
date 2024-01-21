import { Component, OnInit, Injector, inject, Inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../services/common/http-client.service';

export class BaseComponent {
  protected spinnerService: NgxSpinnerService
  constructor(private readonly injector: Injector) {
    this.spinnerService = injector.get(NgxSpinnerService)
  }

  showSpinner() {
    this.spinnerService.show() 
  }
  hideSpinner() {
    this.spinnerService.hide()
  }
}
export enum SpinnerType {
  BallAtom = "s1",
  Timer = "s2"
}
