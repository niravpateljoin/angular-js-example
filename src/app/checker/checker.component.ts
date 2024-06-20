import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-checker',
  templateUrl: './checker.component.html',
  styleUrls: ['./checker.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void => *', [
        animate('300ms ease-in')
      ]),
      transition('* => void', [
        animate('300ms ease-out')
      ])
    ])
  ]
})
export class CheckerComponent {
  text: string = '';
  subText: string = '';
  selectedOperation: string = ''; // Default to palindrome
  result: string | null = null;
  resultMessage: string = '';

  performOperation() {
    switch (this.selectedOperation) {
      case 'palindrome':
        this.checkPalindrome();
        break;
      case 'pangram':
        this.checkPangram();
        break;
      case 'anagram':
        this.checkAnagram();
        break;
      default:
        this.unknownType();
    }
  }

  checkPalindrome() {
    const cleanString = this.text.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedString = cleanString.split('').reverse().join('');
    this.result = cleanString === reversedString ? 'success' : 'danger';
    this.resultMessage = `${this.text} is ${this.result ? 'a palindrome' : 'not a palindrome'}`;
  }

  checkPangram() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const cleanString = this.text.toLowerCase().replace(/[^a-z]/g, '');
    const uniqueChars = new Set(cleanString.split(''));
    this.result = alphabet.split('').every(char => uniqueChars.has(char)) ? 'success' : 'danger';
    this.resultMessage = `${this.text} is ${this.result ? 'a pangram' : 'not a pangram'}`;
  }

  checkAnagram() {
    const cleanString = this.text.toLowerCase().replace(/[^a-zA-Z]/g, '');
    const sortedString = cleanString.split('').sort().join('');
    const targetString = this.subText.toLowerCase().replace(/[^a-zA-Z]/g, '')
    const sortedTarget = targetString.split('').sort().join('');
    this.result = sortedString === sortedTarget ? 'success' : 'danger';
    this.resultMessage = `${this.text} is ${this.result ? 'an anagram' : 'not an anagram'} of '${targetString}'`;
  }

  unknownType() {
    this.result = 'danger';
    this.resultMessage = 'Unknown Operation Type';
  }

  closeResultSection() {
    console.log('called');
    
    this.result = null;
  }
}
