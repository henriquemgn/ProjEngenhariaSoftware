CREATE TABLE "cliente" (
    "cliente_id" SERIAL NOT NULL,
    "nome" character varying NOT NULL,
    "email" character varying NOT NULL,
    "cpf" character varying NOT NULL,
    "data_nascimento" date NOT NULL,
    CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("cliente_id")
);

CREATE TABLE "conta" (
    "conta_id" SERIAL NOT NULL,
    "tipo_conta" character varying NOT NULL,
    "saldo" numeric NOT NULL DEFAULT '0',
    "data_abertura" date NOT NULL,
    "clienteClienteId" integer,
    CONSTRAINT "PK_f4f1324a238eccbfc6b7c14ee89" PRIMARY KEY ("conta_id")
);

CREATE TABLE "movimentacao" (
    "movimentacao_id" SERIAL NOT NULL,
    "tipo_movimentacao" character varying NOT NULL,
    "valor" numeric NOT NULL,
    "data_movimentacao" TIMESTAMP NOT NULL DEFAULT now(),
    "contaContaId" integer,
    CONSTRAINT "PK_4b7716fc4a414b0658a4d9a63c9" PRIMARY KEY ("movimentacao_id")
);

ALTER TABLE "conta" 
ADD CONSTRAINT "FK_67fea7b8ce41f3d9b8a39c213d2" 
FOREIGN KEY ("clienteClienteId") REFERENCES "cliente"("cliente_id") 
ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "movimentacao" 
ADD CONSTRAINT "FK_9e2e5c3f8a5f7b9b7677acd6e6d" 
FOREIGN KEY ("contaContaId") REFERENCES "conta"("conta_id") 
ON DELETE NO ACTION ON UPDATE NO ACTION;

