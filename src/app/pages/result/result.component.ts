import { Component, OnInit } from '@angular/core';
import { ResultService } from '../../services/result/result.service';
import { Result } from '../../models/resultado.model';

@Component({
  selector: 'app-promesis',
  templateUrl: './result.component.html',
  styles: []
})
export class ResultComponent implements OnInit {
  Result: Result[] = [];
  constructor(
    public _resSer: ResultService
  ) { }

  ngOnInit() {
    this.loadingResult();
  }

  loadingResult() {
    this._resSer.getData()
        .subscribe( (res: any) => {
          this.Result = res.resultados;
        });
  }
}
