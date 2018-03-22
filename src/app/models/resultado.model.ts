export class Result {

  constructor(
    public tiempo: string,
    public usuario: string,
    public errores: Number,
    public prueba: string,
    public entreGolpes?: string,
    public _id?: string
  ) { }
}