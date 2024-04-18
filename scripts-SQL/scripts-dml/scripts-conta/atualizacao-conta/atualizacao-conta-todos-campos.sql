-- Muda todos os campos possiveis de conta

UPDATE conta
SET tipo_conta = 'contaCorrente', saldo = '500', data_abertura = '2001-01-01'
WHERE conta_id = 1;
