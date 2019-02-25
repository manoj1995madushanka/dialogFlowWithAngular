import { Injectable } from '@angular/core';
import {ApiAiClient} from 'api-ai-javascript/es6/ApiAiClient';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly token =  environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({accessToken: this.token});

  constructor() { }
}
