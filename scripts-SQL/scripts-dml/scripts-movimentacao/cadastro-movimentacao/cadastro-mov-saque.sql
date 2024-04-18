-- RODE O SCRIPT EM ORDEM

-- 1o: Verificando se a conta existe
SELECT * FROM conta WHERE conta_id = 1;

-- 2o: Fazendo o saque na conta SE o saldo for suficiente 
UPDATE conta 
SET saldo = saldo - 500
WHERE conta_id = 1 AND saldo >= 500;

-- 3o: Cadastrando a nova movimentacao na tabela 
INSERT INTO Movimentacao (tipo_movimentacao, valor, "contaContaId")
VALUES ('saque', 550, 1);
