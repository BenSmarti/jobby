import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable()
export class BaseHttpService {

  readonly apiUrl = environment.apiUrl;

}
