import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../member';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.sass'],
})
export class MemberDetailComponent implements OnInit {
  @Input() member: Member = {
    id: -1,
    name: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
