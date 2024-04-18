-- Atualiza apenas 1 atributo em "Contas". De exemplo, fiz para atualizar apenas o "tipo_conta"

UPDATE conta 
SET tipo_conta = 'contaInvestimento' 
WHERE conta_id = 1;
