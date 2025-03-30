var Contrato = require('../models/contrato')

// GET /contratos
// GET /contratos?entidade=EEEE
// GET /contratos?tipo=AAA
module.exports.list = (query) => {
    if(query.entidade) {
        return Contrato
            .find({entidade_comunicante: query.entidade})
            .sort({idcontrato: 1})
            .exec()
    }
    else if(query.tipo) {
        return Contrato
            .find({tipoprocedimento: query.tipo})
            .sort({idcontrato: 1})
            .exec()
    }
    return Contrato
        .find()
        .sort({idcontrato: 1})
        .exec()
}

// GET /contratos/:id
module.exports.getById = id => {
    return Contrato
        .findOne({idcontrato: id})
        .exec()
}

// GET /contratos/entidades
module.exports.getEntidades = () => {
    return Contrato
        .distinct('entidade_comunicante')
        .sort()
        .exec()
}

// GET /contratos/tipos
module.exports.getTipos = () => {
    return Contrato
        .distinct('tipoprocedimento')
        .sort()
        .exec()
}

// POST /contratos
module.exports.insert = async (contrato) => {
    try {
        const existing = await Contrato.findOne({ idcontrato: contrato.idcontrato }).exec()
        if (!existing) {
            var newContrato = new Contrato(contrato)
            return newContrato.save()
        }
        return false
    } catch (error) {
        console.error('Error inserting contrato:', error)
        throw error
    }
}

// PUT /contratos/:id
module.exports.update = (id, contrato) => {
    return Contrato
        .findOneAndUpdate({idcontrato: id}, contrato, {new: true})
        .exec()
}

// DELETE /contratos/:id
module.exports.delete = id => {
    return Contrato
        .findOneAndDelete({idcontrato: id})
        .exec()
}