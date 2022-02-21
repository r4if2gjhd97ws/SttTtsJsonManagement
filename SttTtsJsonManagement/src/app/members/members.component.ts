import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MEMBERS } from '../mock-members';
import { MemberService } from '../member.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.sass'],
})
export class MembersComponent implements OnInit {
  members?: Member[];

  constructor(private MemberService: MemberService) {}

  // 外部からデータを受け取る時はこちらで実行
  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.MemberService.getMembers().subscribe(
      (members) => (this.members = members)
    );
  }
}
