import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MultimediaMessageModel } from 'src/app/models/multimedia-message.model';
import { FileFetcherService } from 'src/app/services/file-fetcher.service';

import { FileUtil } from 'src/app/utils/file-util';

@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewModalComponent implements OnInit {

  errorMessage?: string;
  fileContent?: string;

  @Input() message?: MultimediaMessageModel;

  constructor(private ngbActiveModal: NgbActiveModal,
    private cd: ChangeDetectorRef,
    private fileFetcherService: FileFetcherService){
  }
  ngOnInit(): void {
    if (this.message.fileType !== 'OTHER') {
      return;  
    }
    this.fileFetcherService.fetchAsBytes(this.message.fileCode)
      .subscribe((data: ArrayBuffer) => {
        const decoder = new TextDecoder('utf-8');
        this.fileContent = decoder.decode(data);
        this.cd.detectChanges();
    });
  }

  onClosed(): void {
    this.ngbActiveModal.close();
  }

  getData(): string {
    return FileUtil.getAttachment(this.message.fileCode);
  }

}
