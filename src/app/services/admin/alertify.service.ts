import { Injectable } from '@angular/core';
declare var alertify: any
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  message(message: string,options:AlertifyOptions) {
    alertify.set('notifier', 'delay', options.delay)
    alertify.set('notifier', 'position', options.position)
    const msg = alertify[options.messageType](message)
    if (options.dismissOthers) {
      msg.dismissOthers()
    }
  }
  dismiss() {
    alertify.dismissAll()
  }
}

export enum MessageType {
  Error = "error",
  Success = "success",
  Message = "message",
  Notify = "notify",
  Warning = "warning"
}
export enum Position {
  TopCenter = "top-center",
  TopRight = "top-right",
  TopLeft = "top-left",
  BottomRight = "bottom-right",
  BottomLeft = "bottom-left"
}
export class AlertifyOptions{
  messageType: MessageType=MessageType.Success;
  position: Position=Position.BottomRight;
  delay: number=3;
  dismissOthers: boolean=false;
}