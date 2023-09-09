import { ResponseObject } from './@types/http.types';
import { HttpResponse } from './protocols.interface';

class ResponseService {
  private transformResponseObj({ status, statusCode, title, data }: ResponseObject) {
    return {
      status,
      statusCode,
      [title]: data,
    };
  }

  protected async success(res: HttpResponse, responseObject: ResponseObject): Promise<HttpResponse> {
    return {
      status: 200,
      data: this.transformResponseObj(responseObject),
    };
  }

  protected async created(res: HttpResponse, responseObject: ResponseObject): Promise<HttpResponse> {
    return {
      status: 201,
    };
  }

  protected async badRequest(res: HttpResponse, responseObject: ResponseObject): Promise<HttpResponse> {
    return {
      status: 400,
      data: this.transformResponseObj(responseObject),
    };
  }
}

export default ResponseService;
