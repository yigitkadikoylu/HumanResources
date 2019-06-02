import { Component, OnInit } from '@angular/core';
import { CANDIDATES } from '../mock-candidate'
import {Candidate} from "../candidate"
import { CandidateService } from '../candidate.service';
@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
   //candidate=CANDIDATES;
    selectedCandidate:Candidate;

  candidates: Candidate[];
  
   onSelect(data:Candidate){
   this.selectedCandidate=data;
   console.log("seçilen data",this.selectedCandidate)

  } 
  constructor(private candidateService: CandidateService) { 

   
  }

  ngOnInit() {
    this.getCandidate();
  }

  getCandidate(): void {
    this.candidateService.getCandidates()
    .subscribe(candidates => this.candidates = candidates);
  }

}
