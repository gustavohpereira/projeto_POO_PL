package com.fatec.pl.controle;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.pl.hateoas.HateoasServicos;
// import com.fatec.pl.atualizador.AtualizadorCliente;
// import com.fatec.pl.hateoas.HateoasCliente;
import com.fatec.pl.modelo.Servico;
import com.fatec.pl.repositorio.RepositorioServico;

@CrossOrigin
@RestController
public class ControleServico {
	@Autowired
	private RepositorioServico repositorio;
	@Autowired
	private HateoasServicos hateoas;
	// @Autowired
	// private AtualizadorCliente atualizador;

	// @GetMapping("/cliente/{id}")
	// public ResponseEntity<Cliente> obterCliente(@PathVariable Long id) {
	// 	Cliente cliente = repositorio.findById(id).get();
	// 	if (cliente != null) {
	// 		hateoas.adicionarLink(cliente);
	// 		return new ResponseEntity<Cliente>(cliente, HttpStatus.FOUND);
	// 	} else {
	// 		return new ResponseEntity<Cliente>(HttpStatus.NOT_FOUND);
	// 	}
	// }

	@GetMapping("/servico/servicos")
	public ResponseEntity<List<Servico>> obterServicos(@PathVariable Long id) {
		List<Servico> servicos = repositorio.findAll();
		hateoas.adicionarLink(servicos);
		return new ResponseEntity<List<Servico>>(servicos, HttpStatus.FOUND);
	}

	// @SuppressWarnings("deprecation")
	// @PutMapping("/cliente/atualizar")
	// public ResponseEntity<?> atualizarCliente(@RequestBody Cliente atualizacao) {
	// 	HttpStatus status = HttpStatus.BAD_REQUEST;
	// 	Cliente cliente = repositorio.getById(atualizacao.getId());
	// 	if (cliente != null) {
	// 		atualizador.atualizar(cliente, atualizacao);
	// 		repositorio.save(cliente);
	// 		status = HttpStatus.OK;
	// 	}
	// 	return new ResponseEntity<>(status);
	// }

	@PostMapping("/servico/cadastrar")
	public ResponseEntity<?> cadastrarServico(@RequestBody Servico novo) {
		HttpStatus status = HttpStatus.BAD_REQUEST;
		if (novo != null) {
			repositorio.save(novo);
			status = HttpStatus.OK;
		}
		return new ResponseEntity<>(status);
	}

	@SuppressWarnings("deprecation")
	@DeleteMapping("/cliente/excluir")
	public ResponseEntity<?> excluirServico(@RequestBody Servico exclusao) {
		Servico servico = repositorio.getById(exclusao.getId());
		if (servico == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		} else {
			repositorio.delete(servico);
			return new ResponseEntity<>(HttpStatus.OK);
		}
	}
}