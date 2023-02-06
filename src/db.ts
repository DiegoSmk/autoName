const db = {
    v: "aeiouy",
    c: "bcdfghjklmnpqrstwvxz",
    c2: "bcdfgjklmnpqrstvxz",                            // retirado algumas letras que não entram bem na segunda e terceira silaba de nomes comuns
    c2s: "bcdfgkptv",                                    // letras que casam melhor com as letras "l", "r", "h"
    s1: "lsmnr",
    s2: "hlr",
    ss: "@!",                                             // @ = ão, ! = ães

    dgf: ["gu", "qu", "lh", "nh", "ch", "sh", "ph"],      // Dígrafos Consonantais Inseparáveis
    h: ["ai", "ae", "au", "eu", "ei", "ie", "ia", "oi"],  // Hiatos comuns em nomes
    dtg: ["ia", "ui", "io", "ua", "oa", "ea"],            // Ditongos comuns em nomes
                                                         // TO DO - Dígrafos de outras linguas
    endSyllables: ["son", "nya", "min", "rio", "lin", "nho", "ito"]

}

export const hDtg = db.h.concat(db.dtg)

const arrOptions = {
    zero: [[db.v], [db.h], [db.dtg], [db.c, db.v], [db.c, db.v], [db.dgf, db.v], [db.c, db.h], [db.c, db.dtg], [db.c2s, db.s2, db.v], [db.c, db.v, db.s1], [db.dgf, db.v, db.s1], [db.c2s, db.s2, db.h], [db.c2s, db.s2, db.dtg], [db.c2s, db.s2, db.v, db.s1]],
    middle: [[db.c2, db.v], [db.c2, db.v], [db.dgf, db.v], [db.c2, db.h], [db.c2, db.dtg], [db.c2s, db.s2, db.v], [db.c2, db.v, db.s1], [db.dgf, db.v, db.s1], [db.c2s, db.s2, db.h], [db.c2s, db.s2, db.dtg], [db.c2s, db.s2, db.v, db.s1]],

    preventDitongo: [[db.c2, db.v], [db.c2, db.v], [db.c2s, db.s2, db.v], [db.c2, db.v, db.s1], [db.c2s, db.s2, db.v, db.s1]],

    end: [[db.v], [db.ss], [db.c2, db.v], [db.dgf, db.v], [db.c2s, db.s2, db.v], [db.c2, db.v, db.s1], [db.dgf, db.v, db.s1], [db.c2, db.ss], [db.endSyllables]],
}

export default arrOptions