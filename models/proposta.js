var mongoose = require("mongoose");

var propostaSchema = new mongoose.Schema({
    emprestimo: {
      valor: String,
      prazo: String,
      proposito: String,
      taxa: String
    },
    dadosBancarios: {
      banco: String,
      conta: String,
      agencia: String
    },
    status: String,
    empresa: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Empresa"
    }
});

var Proposta = module.exports = mongoose.model("Proposta", propostaSchema);

module.exports.createProposta = function(newProposta, callback){
  newProposta.save(callback);
}
