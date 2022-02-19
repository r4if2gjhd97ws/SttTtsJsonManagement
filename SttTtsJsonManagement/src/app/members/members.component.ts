import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MEMBERS } from '../mock-members';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.sass'],
})
export class MembersComponent implements OnInit {
  members?: Member[];
  selectedMember: Member = {
    id: -1,
    name: '',
  };

  constructor(private MemberService: MemberService) {}

  // 外部からデータを受け取る時はこちらで実行
  ngOnInit(): void {
    this.getMembers();
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
  }

  getMembers(): void {
    this.members = this.MemberService.getMembers();
  }
}
