class Persona
{
   private _nombre: string;

   private _email: string;

   private _numero?: string;

   private _descripcion?: string;

   constructor(nombre: string, email: string)
   {
      this._nombre = nombre;
      this._email = email;
   }

   get nombre(): string
   {
      return this._nombre;
   }

   set nombre(nombre)
   {
      this._nombre = nombre;
   }

   get email(): string
   {
      return this._email;
   }

   set email(email: string)
   {
      this._email = email;
   }

   get numero(): string | undefined
   {
      return this._numero;
   }

   set numero(numero: string | undefined)
   {
      this._numero = numero;
   }

   get descripcion(): string | undefined
   {
      return this._descripcion;
   }

   set descripcion(descripcion: string | undefined)
   {
      this._descripcion = descripcion;
   }
}