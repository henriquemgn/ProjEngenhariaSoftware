/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { Movimentacao } from '../entities/movimentacao.entity';
import { MovimentacoesService } from '../services/movimentacoes.service';

@Controller('movimentacoes')
export class MovimentacoesController {
  constructor(private readonly movimentacoesService: MovimentacoesService) {}

  @Post(':conta_id')
  async cadastroMovimentacao(@Param('conta_id') contaId: number, @Body() movimentacao: Movimentacao,) {
    return this.movimentacoesService.cadastroMovimentacao(contaId, movimentacao);
  }

  @Get(':conta_id')
  async consultaMovimentacoes(@Param('conta_id') contaId: number) {
    return this.movimentacoesService.consultaMovimentacoes(contaId);
  }

  @Get()
  async consultaTodasMovimentacoes() {
    return this.movimentacoesService.consultaTodasMovimentacoes();
  }
}
