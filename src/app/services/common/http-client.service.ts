import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private readonly httpClient: HttpClient, @Inject("baseUrl") private baseUrl: string) {

  }

  private url(requestParameter: Partial<RequestParameters>) {
    return `${requestParameter.baseUrl ? requestParameter.baseUrl : this.baseUrl}/${requestParameter.controller}${requestParameter.action ? `/${requestParameter.action}` : ''}`
  }
  get<T>(requestParameters: Partial<RequestParameters>, id?: string): Observable<T> {
    let url: string = "";
    if (requestParameters.fullEndPoint) {
      url = requestParameters.fullEndPoint
    } else {
      url = `${this.url(requestParameters)}${id ? `/${id}` : ''}`
    }
    return this.httpClient.get<T>(url,
      { headers: requestParameters.headers })
  }
  post<T>(requestParameters: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
    let url: string = "";
    if (requestParameters.fullEndPoint) {
      url = requestParameters.fullEndPoint
    } else {
      url = `${this.url(requestParameters)}`
    }
    return this.httpClient.post<T>(url, body, {
      headers: requestParameters.headers
    })
  }
  put<T>(requestParameters: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
    let url: string = "";
    if (requestParameters.fullEndPoint) {
      url = requestParameters.fullEndPoint
    } else {
      url = `${this.url(requestParameters)}`
    }
    return this.httpClient.put<T>(url, body, {
      headers: requestParameters.headers
    })
  }
  delete<T>(requestParameters: Partial<RequestParameters>, id: string): Observable<T> {
    debugger
    let url: string = "";
    if (requestParameters.fullEndPoint) {
      url = requestParameters.fullEndPoint
    } else {
      url = `${this.url(requestParameters)}/${id}`
    }
    return this.httpClient.delete<T>(url, { headers: requestParameters.headers })
  }
}

export class RequestParameters {
  controller: string;
  action?: string;
  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string;
}