import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { LayoutBaseComponent } from "../../components/layout-base/layout-base.component";
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Medicamento } from '../../interfaces/medicamento';
import { MedicamentoService } from '../../service/medicamento.service';

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, LayoutBaseComponent, TableModule, CommonModule],
  templateUrl: './consulta.component.html'
})
export class ConsultaComponent implements OnInit{
  medicamentos!: Medicamento[];

  constructor(private medicamentoService: MedicamentoService) { }

  ngOnInit(): void {
    this.medicamentoService.getMedicamentos().subscribe((data) => {
      this.medicamentos = data;
    });
  }

}
