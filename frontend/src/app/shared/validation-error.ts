export class ValidationError {
  public message: string = 'Input data is not valid';
  public errors: any = {};

  constructor(data?: any) {
    if(data){
      if(data.hasOwnProperty('message')){
        this.message = data.message;
      }
      if(data.hasOwnProperty('errors')){
        this.errors = data.errors;
      }
    }
  }

  public keys(): string[] {
    return Object.keys(this.errors);
  }
}
