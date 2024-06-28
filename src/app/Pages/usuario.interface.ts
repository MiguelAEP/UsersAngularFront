export interface Usuario{
    id:number,
    nombre:string,
    apellido:string,
    usuarioEnum:TipoDocumentEnum,
    numeroDocumento:number,
    generoEnum:GeneroEnum,
    areaEnum:AreaEnum
}

export enum TipoDocumentEnum{
    DNI='DNI',
    PASAPORTE='PASAPORTE'
}

export enum GeneroEnum{
    MASCULINO='MASCULINO',
    FEMENINO='FEMENINO'
}

export enum AreaEnum{
    CONTABILIDAD='CONTABILIDAD',
    TESORERIA='TESORERIA',
    SISTEMAS='SISTEMAS',
    PROYECTOS='PROYECTOS'
}