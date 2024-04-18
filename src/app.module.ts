/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesController } from './controllers/clientes.controller';
import { ClientesService } from './services/clientes.service';
import { ContasController } from './controllers/contas.controller';
import { ContasService } from './services/contas.service';
import { MovimentacoesController } from './controllers/movimentacoes.controller';
import { MovimentacoesService } from './services/movimentacoes.service';
import { Cliente } from './entities/cliente.entity';
import { Conta } from './entities/conta.entity';
import { Movimentacao } from './entities/movimentacao.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_DB_HOST,
      port: Number(process.env.POSTGRES_DB_PORT),
      username: process.env.POSTGRES_DB_USERNAME,
      password: process.env.POSTGRES_DB_PASSWORD,
      database: process.env.POSTGRES_DB_DATABASE,
      entities: [Cliente, Conta, Movimentacao],
      cache: false,
    }),
    TypeOrmModule.forFeature([Cliente, Conta, Movimentacao]),
  ],
  controllers: [
    AppController,
    ClientesController,
    ContasController,
    MovimentacoesController,
  ],
  providers: [
    AppService,
    ClientesService,
    ContasService,
    MovimentacoesService,
  ],
})
export class AppModule {}
