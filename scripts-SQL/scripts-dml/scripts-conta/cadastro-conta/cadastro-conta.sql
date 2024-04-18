-- RODE O SCRIPT EM ORDEM

-- 1o: Verificando se o cliente existe
SELECT cliente_id 
FROM cliente 
WHERE cliente_id = {id_desejado};

-- 2o: Cadastrando a conta na tabela 
INSERT INTO conta (saldo, tipo_conta, data_abertura, "clienteClienteId")
VALUES (1000, 'contaInvestimento', '2023-07-30', 3);

