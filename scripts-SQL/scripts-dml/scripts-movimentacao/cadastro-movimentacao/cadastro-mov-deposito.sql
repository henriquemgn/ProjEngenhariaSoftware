-- RODE O SCRIPT EM ORDEM

-- 1o: Verificando se a conta existe
SELECT * FROM conta WHERE conta_id = 1;

-- 2o: Fazendo o deposito na conta
UPDATE conta 
SET saldo = saldo + 600 
WHERE conta_id = 1;

-- 3o: Cadastrando a nova movimentacao na tabela 
INSERT INTO Movimentacao (tipo_movimentacao, valor, "contaContaId")
VALUES ('deposito', 550, 1);


